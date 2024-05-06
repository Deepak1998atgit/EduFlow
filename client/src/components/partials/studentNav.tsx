import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';
import decodeJwtToken from "../../utils/decodeJwt";
import { AnimatePresence, motion } from "framer-motion";


interface Student {
    Id: string;
    email: string;
    name: string;
    prifile: string;
}

const studentNavbar = () => {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate();
    const [student, setStudent] = useState<Student>();
    useEffect(() => {
        const accessToken = localStorage?.getItem("accessToken");
        if (accessToken) {
            const decodedToken: any = decodeJwtToken(accessToken ?? "");
            setStudent(decodedToken.payload);

        }

    }, [])
    const handleLogOut = () => {
        try {
            localStorage.removeItem('accessToken');
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-[#e2e3e5] bg-opacity-50 fixed top-0 w-full z-50 h-20">
                <div className="mx-auto max-w-7xl px-7 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen ? 'true' : 'false'}
                                onClick={toggleMenu}
                            >
                                <svg
                                    className={isOpen ? 'hidden h-6 w-6' : 'block h-6 w-6'}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg
                                    className={isOpen ? 'block h-6 w-6' : 'hidden h-6 w-6'}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://svgsilh.com/svg/1319606.svg?color=indigo&shade=500" alt="Eduflowlogo" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">

                                    <a href="#" className=" text-[#040404]  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                                    <a href="#" className="text-[#040404]  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Categories</a>
                                    {student ? (<>
                                        <a href="#" className="text-[#040404] hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Instructor</a>
                                        <a href="#" className="text-[#040404]  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">My learning</a></>

                                    ) : null}
                                    {student ? null : <NavLink to="/instructor-welcome" className="text-[#040404]  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Teach on Eduflow</NavLink>}

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            {student ? false : (<button type="button" className="relative rounded-full w-28 h-10  bg-[#040404] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <NavLink className='' to="/login">Login</NavLink>
                            </button>)}
                            {student ? (<> <FaHeart className=' mt-1' size={30} />
                                <FaShoppingCart className='ml-3 mt-1 mr-3' size={30} />{student?.name}</>) : null}
                            <div className="relative ml-3">
                                <div>

                                    <button type="button" className="relative w-full flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        {student ? (<img className="h-9 w-9 rounded-full object-cover object-center" src={student?.prifile} />) : null}
                                    </button>
                                </div>

                            </div>
                            {student ? (<>
                                <button onClick={handleLogOut} type="button" className="mx-3 relative rounded-full w-1/2 h-10  bg-[#040404] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    LogOut
                                </button></>) : false}
                        </div>

                    </div>
                </div>
                <div className={isOpen ? 'sm:hidden' : 'hidden'} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default studentNavbar;