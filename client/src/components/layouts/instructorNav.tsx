import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { clearToken } from "../../redux/reducers/authSlice";
import { clearDetails } from "../../redux/reducers/instructorSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const InstructorNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogOut = () => {
    try {
      dispatch(clearToken());
      dispatch(clearDetails());
      navigate("/instructor-login");
    } catch (error) {
      console.log("ERROR WHEN INSTRUCTOR LOGOUT",error)
    }
  }
  
  return (
    <>
      <nav className="bg-[#134457] bg-opacity-90  p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src="https://svgsilh.com/svg/1319606.svg?color=indigo&shade=500" alt="Logo" className="h-10" />
          </div>
          <div className="hidden md:flex space-x-4">
            <button onClick={handleLogOut} className="w-24 h-11 pl-5 bg-white pt-1 flex justify-between items-center  rounded-xl  text-black">LogOut</button>
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
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <button  className="block bg-black text-white px-4 py-2 rounded">
            LogOut
          </button>
        </div>
        )}
      </nav>
    </>
  )
}
export default InstructorNav;
