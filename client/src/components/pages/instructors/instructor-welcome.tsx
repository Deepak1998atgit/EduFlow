import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import InstructorNavbar from './instructor-navbar';
const InstructorWelcome: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="bg-[#31473A] bg-opacity-75  h-20">
        <div className="container py-3 mx-auto flex justify-between items-center">
          <div>
            <img src="https://svgsilh.com/svg/1319606.svg?color=indigo&shade=500" alt="Logo" className="h-8 ml-20 " />
          </div>
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-4 mr-34 ">
            <NavLink to='/instructor-login' className="bg-white rounded-full w-20 mt-1  pl-5 pt-2  h-11">LogIn</NavLink>
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
      <section className="dark:bg-gray-800 dark:text-gray-100 h-screen">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="https://images.unsplash.com/flagged/photo-1564445477052-8a3787406bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHR1dG9yfGVufDB8fDB8fHww" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">Smart
              <span className="dark:text-violet-400"> learning</span>
            </h1>
            <p className="mt-6 ml-4 mb-8 text-lg sm:mb-12">Elevate your tutoring experience with EduFlow
            </p>
            <NavLink to='/instructor-login' className='bg-[#1a2f34] h-12 pl-44 pt-2 text-base hover:bg-[#5be5a8]  hover:text-[#1a2f34]  border border-[#5be5a8]-500 text-white'>Get Start</NavLink>
          </div>
        </div>
      </section>
      <div className=" bottom-0  h-45  flex left-0  w-full bg-[#1a2f34] text-white border-b border-solid border-gray-300 p-4">
        <div className='flex-1 mt-2'>
          <h1 className='text-base'>Top companies choose Udemy Business to build in-demand career skills</h1>
        </div>
        <div className='flex-2 flex items-center'>
          <img className='ml-4' src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="" />
          <img className='ml-4' src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="" />
          <img className='ml-4' src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="" />
          <img className='ml-4' src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="" />
          <img className='ml-4' src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="" />
        </div>
      </div>
      <div className="flex left-0 w-full  bg-[#1a2f34] text-white  p-4">
        <div className='flex-1 h-40'>
          <p className='text-base'>EDUFLOW</p>
        </div>
        <div className='flex-2 text-base'>
          © 2023 EDUFLOW, Inc.
        </div>
      </div>
    </>
  );
};
export default InstructorWelcome;