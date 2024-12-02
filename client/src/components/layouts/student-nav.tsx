import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from "react-redux";
import { selectStudent } from '@/redux/reducers/studentSlice';

import { faHome, faUsers, faAddressBook, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import {
    Avatar,
    Tooltip,
    Typography
} from "@material-tailwind/react";

const Links = [
    { name: "home", path: "/", icon: faHome },
    { name: "wishlist", path: "/wishlist", icon: faHeart },
    { name: "cart", path: "/cart", icon: faShoppingCart },
    { name: "community", path: "/community", icon: faUsers },
    { name: "contact", path: "/contact", icon: faAddressBook },
];

const StudentNav: React.FC = () => {
    const student = useSelector(selectStudent);
    const location = useLocation();
    console.log(student,"student data check")

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
            <Link to="/profile" className='flex justify-end items-end gap-2'>
                <Tooltip content="Profile" className="z-50" color="white">
                    <Avatar
                        size="xs"
                        variant="circular"
                        alt="image"
                        className="cursor-pointer rounded-full bg-white"
                        src={student.studentDetails?.profilePic?.url || "/user-default.svg"}
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    />
                </Tooltip>
                <Typography className="text-white text-[12px]">{student?.studentDetails?.name}</Typography>
            </Link>

        </>
    );
}

export default StudentNav;