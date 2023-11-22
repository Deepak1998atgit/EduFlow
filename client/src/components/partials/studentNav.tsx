import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { string } from 'yup';

const studentNavbar = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState([]);
    useEffect(() => {
        const studentDetail: any = localStorage.getItem('accessToken');
        console.log(studentDetail,"kkkk")
        const parsedStudent = JSON.parse(studentDetail)

        setStudent(parsedStudent)
        console.log(student, "kkkkkk")
    }, [])
    console.log(student?.student?.prifile, "kkkkkk")
    const handleLogOut = () => {
        try {
            localStorage.removeItem('accessToken');
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }
    console.log(student?.student?.prifile, "kkkkddkkfff")
    return (
        <>
            <nav className="bg-[#e2e3e5] bg-opacity-50 fixed top-0 w-full z-50 h-20">
                <div className="mx-auto max-w-7xl px-7 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://svgsilh.com/svg/1319606.svg?color=indigo&shade=500" alt="Eduflowlogo" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">

                                    <a href="#" className=" text-[#040404] text-lg  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                                    <a href="#" className="text-[#040404] text-lg hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Tutor</a>
                                    <a href="#" className="text-[#040404] text-lg hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Course</a>
                                    <a href="#" className="text-[#040404] text-lg hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {student ? false : (<button type="button" className="relative rounded-full w-28 h-10  bg-[#040404] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <NavLink className='' to="/login">Login</NavLink>
                            </button>)}
                            {student?.student?.name}
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative w-full flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        {student ? (<img className="h-8 w-8 rounded-full" src={student?.student?.prifile} />) : null}
                                    </button>
                                </div>

                            </div>
                            {student ? (<button onClick={handleLogOut} type="button" className="mx-3 relative rounded-full w-1/2 h-10  bg-[#040404] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                LogOut
                            </button>) : false}

                        </div>

                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
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