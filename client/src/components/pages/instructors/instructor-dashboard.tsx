import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
const InstructorDashboard: React.FC = () => {
  const [instructor, setInstructor] = useState({});
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const tutorDetail: any = localStorage.getItem('accessToken');
    const parsedTutor = JSON.parse(tutorDetail)
    setInstructor(parsedTutor)
    console.log(instructor, "kkkkkk")
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
  console.log(instructor?.student?.prifile, "dhhhdh")
  return (

    <>
      <nav className="bg-[#5be5a8] p-4">
        <div className="container mx-auto flex justify-between items-center">

          <div>
            <img src="https://svgsilh.com/svg/1319606.svg?color=indigo&shade=500" alt="Logo" className="h-8 " />
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white"></a>
            <a href="#" className="text-white"></a>
            <a href="#" className="text-white"></a>
            <a href="#" className="text-white"></a>
            <a href="#" className="text-white"></a>
            <button onClick={handleLogOut} className="bg-white rounded-full w-full">LogOut</button>
            <div>
              {instructor ? (<img src={instructor?.student?.prifile} alt="Logo" className='rounded-full' />) : null}
            </div>
          </div>

          {/* Responsive Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Menu (Mobile) */}
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
      <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img src="https://images.unsplash.com/flagged/photo-1564445477052-8a3787406bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHR1dG9yfGVufDB8fDB8fHww" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leadi sm:text-6xl">Smart
                <span className="dark:text-violet-400"> learning</span>
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">Elevate your tutoring experience with our user-friendly app.
               
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"></a>
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};;
export default InstructorDashboard;