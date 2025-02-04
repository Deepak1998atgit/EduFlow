import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from "react-redux";
import { fetchStudentData, selectStudent } from '@/redux/reducers/studentSlice';
import { AppDispatch } from "@/redux/store";
import { selectIsLoggedIn, selectUserType } from '@/redux/reducers/authSlice';
import { faHome, faUsers, faAddressBook, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import {
    Avatar, // student id -> course 
    Tooltip,
    Typography
} from "@material-tailwind/react";

const Links = [
    { name: "home", path: "/", icon: faHome },
    { name: "wishlist", path: "/wishlist", icon:faHeart },
    { name: "cart", path: "/cart", icon:faShoppingCart },
    { name: "community", path: "/community", icon:faUsers },
    { name: "contact", path: "/contact", icon:faAddressBook},
];

const StudentNav: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUserType)
    const studentInfo = useSelector(selectStudent)?.studentDetails;
    const location = useLocation();
    useEffect(() => {
        dispatch(fetchStudentData());
    }, []);

    return (
        <>
            {Links.map((link, index) => (
                <Link
                    to={link.path}
                    key={index}
                    className={`flex items-center capitalize text-black hover:text-[#f5f5f5] font-medium transition-all ${link.path === location.pathname && 'xl:text-[#f5f5f5] border-b-2 border-[#f5f5f5]'}`}
                >
                    <FontAwesomeIcon icon={link.icon} />
                </Link>
            ))}
            {isLoggedIn && user === 'student'?(
                <Link to="/profile" className='flex justify-end items-end gap-2'>
                    <Tooltip content="Profile" className="z-50" color="white">
                        <Avatar
                            size="xs"
                            variant="circular"
                            alt="image"
                            className="cursor-pointer rounded-full bg-white"
                            src={studentInfo?.profilePic?.url || "/user-default.svg"}
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        />
                    </Tooltip>
                    <Typography className="text-white text-[12px]">{studentInfo?.name}</Typography>
                </Link>
            ):""}
           <Link to="/instructor-login">Teach on Eduflow</Link>
        </>
    );
}

export default StudentNav;