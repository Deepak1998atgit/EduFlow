import { useNavigate, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import decodeJwtToken from '../../../utils/decodeJwt';
interface Student {
  Id: string;
  email: string;
  name: string;
  prifile: string; 
}

export default function InstructorNavbar() {
  const [instructor, setInstructor] = useState<Student>();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const accessToken = localStorage?.getItem("accessToken");
    if(accessToken){
     const decodedToken : any = decodeJwtToken(accessToken ?? "");
     setInstructor(decodedToken.payload); 
     
    }        
 }, []) 
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogOut = () => {
    try {
      localStorage.removeItem('accessToken');
      navigate('/instructor-login');
    } catch (error) {
    }
  }
  return (
    <>
         <nav className="bg-[#31473A] bg-opacity-80  h-20 pt-5">
          <div className="container mx-auto flex justify-between items-center pr-20">
            <div>
              <img src="https://svgsilh.com/svg/1319606.svg?color=indigo&shade=500" alt="Logo" className="h-8 ml-20 " />
            </div>
            <div className="hidden md:flex space-x-4 mr-34 ">
              <div>
                {instructor ? (<img src={instructor?.prifile} alt="Logo" className='rounded-full h-9' />) : null}
              </div>
              {instructor ? (<button onClick={handleLogOut} className="bg-[#B2456E] text-[#FBEAE7] rounded-full w-20 h-10  mr-auto">LogOut</button>) : (<NavLink to='/instructor-login' className="bg-white rounded-full w-20 mt-1  pl-5 pt-2  h-10">LogIn</NavLink>)} 
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden bg-blue-500 p-4 text-right">
              <a href="#" className="block text-white mb-2">Home</a>
              <a href="#" className="block text-white mb-2">About</a>
              <a href="#" className="block text-white mb-2">Services</a>
              <a href="#" className="block text-white mb-2">Contact</a>
              <a href="#" className="block text-white">Blog</a>
            </div>
          )}
        </nav>
    </>
  )
}
