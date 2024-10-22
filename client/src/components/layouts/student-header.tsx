import { useState } from "react";
import MobileNav from "../common-components/mobile-nav";
import StudentNav from "./student-nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faTimes,faSignOut} from '@fortawesome/free-solid-svg-icons';


const StudentHeader: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className="fixed py-5 bg-[#49BBBD]  w-screen z-50    xl:h-30">
                <div className="container mx-4 flex justify-between">
                    <img className="h-14  ml-10"  src="./icon.png"/>
                    <div className="hidden xl:flex gap-8 items-center">
                        <StudentNav />
                        <button className="bg-white text-[14px] font-thin rounded-xl w-28  h-10">Logout<FontAwesomeIcon icon={ faSignOut } size="sm" className="ml-2" /></button>
                    </div>
                    <div className="xl:hidden mr-14">
                       {isOpen ? (<FontAwesomeIcon icon={faTimes} onClick={toggleNav} className="text-3xl cursor-pointer" />):(<FontAwesomeIcon icon={faBars} onClick={toggleNav} className="text-3xl cursor-pointer" />)} 
                    </div>
                </div>
            </header>
            {isOpen && <div className='mr-0 w-full  h-screen-minus-nav  bg-platinum xl:hidden'>
                <div className="flex flex-col items-center text">
                    <MobileNav />
                </div>
            </div>
            }
        </>

    );
}




export default StudentHeader;