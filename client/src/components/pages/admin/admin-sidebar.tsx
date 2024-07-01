import React, { useState } from 'react'
import { PiStudentFill } from "react-icons/pi";
import { AiFillDashboard } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
interface AdminSidebarProps {
    onSidebarClick: (buttonValue: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ onSidebarClick }) => {
    const [activeButton, setActiveButton] = useState('dashboard');
    const handleButtonClick = (buttonValue: string) => {
        setActiveButton(buttonValue);
        onSidebarClick(buttonValue);

    };
    return (
        <>
            <div className="bg-[#134457]  h-screen w-80   top-17 left-0 overflow-y-auto">
                <div className="p-4 text-white font-bold">ADMIN</div>
                <ul className="py-2">
                    <li className=""><button onClick={() => handleButtonClick('dashboard')} className={`bg-${activeButton === 'dashboard' ? 'white' : 'opacity-0'} text-left border h-32 border-transparent outline-none focus:border-transparent pl-4 py-2 w-full  hover:bg-gray-400 text-${activeButton === 'dashboard' ? 'black' : 'white'}`}> <span className="flex items-center">
                        <AiFillDashboard className="mr-2" /> DASHBOARD
                    </span></button></li>
                    <li className=""><button onClick={() => handleButtonClick('users')} className={`bg-${activeButton === 'users' ? 'white' : 'opacity-0'} text-left border h-32 border-transparent outline-none focus:border-transparent pl-4 py-2 w-full  hover:bg-gray-400 text-${activeButton === 'users' ? 'black' : 'white'}`}> <span className="flex items-center">
                        <PiStudentFill className="mr-2" /> USERS
                    </span></button></li>
                    <li className=""><button onClick={() => handleButtonClick('tutors')} className={`bg-${activeButton === 'tutors' ? 'white' : 'opacity-0'} text-left border border-transparent outline-none focus:border-transparent h-32 pl-4 py-2 hover:bg-gray-400 w-full text-${activeButton === 'tutors' ? 'black' : 'white'}`} ><span className="flex items-center">
                        <GiTeacher className="mr-2" /> INSTRUCTORS
                    </span></button></li>
                    <li className=""><button onClick={() => handleButtonClick('tutorrequests')} className={`bg-${activeButton === 'tutorrequests' ? 'white' : 'opacity-0'} text-left border border-transparent outline-none focus:border-transparent h-32 pl-4 py-2 hover:bg-gray-400 w-full text-${activeButton === 'tutorrequests' ? 'black' : 'white'}`} ><span className="flex items-center">
                        <GiTeacher className="mr-2" /> INSTRUCTOR REQUESTS
                    </span></button></li>
                </ul>
            </div>
        </>
    )
}

export default AdminSidebar;
