import { useState } from "react";
import MobileNav from "../common-components/mobile-nav";
import StudentNav from "./student-nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSignOut, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn,selectUserType } from "../../redux/reducers/authSlice";
import { clearToken } from "../../redux/reducers/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { persistor } from "@/redux/store";



const StudentHeader: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUserType);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    const handleLogout = () => {
        dispatch(clearToken());
        persistor.purge();
        navigate("/");
    };
    return (
        <>
            <header className="fixed py-5 bg-[#49BBBD]  w-screen z-50 xl:h-30">
                <div className="container mx-4 flex justify-between">
                    <img className="h-14  ml-10" src="./icon.png" />
                    <div className="hidden xl:flex gap-8 items-center">
                        <StudentNav />
                        { isLoggedIn && user === "student" ? (<button onClick={() => setIsModalOpen(true)} className="bg-white text-[14px] font-thin rounded-xl w-28  h-10">Logout<FontAwesomeIcon icon={faSignOut} size="sm" className="ml-2" /></button>):(<Link to={"/Login"}><button className="bg-white text-[14px] font-thin rounded-xl w-28  h-10">Login<FontAwesomeIcon icon={faSignIn} size="sm" className="ml-2" /></button></Link>) }
                        
                    </div>
                    <div className="xl:hidden mr-14">
                        {isOpen ? (<FontAwesomeIcon icon={faTimes} onClick={toggleNav} className="text-3xl cursor-pointer" />) : (<FontAwesomeIcon icon={faBars} onClick={toggleNav} className="text-3xl cursor-pointer" />)}
                    </div>
                </div>
                <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50 ">
                    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                        <DialogPanel className="max-w-lg space-y-4 rounded-3xl  bg-white p-12">
                            <DialogTitle className="font-bold text-2xl">Logout account</DialogTitle>
                            <Description className="font-bold">Are you sure you want to log out?</Description>
                            <p className="text-slate-600">You will need to sign back in to access your account!!</p>
                            <div className="flex gap-4 text-white">
                                <button className="bg-[#49BBBD] rounded-2xl h-12 w-1/2" onClick={() => { handleLogout(), setIsModalOpen(false) }}>Logout</button>
                                <button className="bg-[#49BBBD] rounded-2xl w-1/3 text-red" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
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