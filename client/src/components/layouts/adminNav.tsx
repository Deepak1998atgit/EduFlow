import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const AdminNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <>
      <nav className="bg-[#134457] bg-opacity-90  p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src="https://svgsilh.com/svg/1319606.svg?color=indigo&shade=500" alt="Logo" className="h-10" />
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/admin-login" className="block w-20 h-11  bg-white  p-4 pt-2    rounded-xl  text-black">LogOut</NavLink>
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
            <NavLink to="/admin-login" className="block bg-black text-white">LogOut</NavLink>
          </div>
        )}
      </nav>
    </>
  )
}
export default AdminNav;
