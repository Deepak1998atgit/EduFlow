import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tailwindcss/tailwind.css'; // Ensure this is included in your project
import { faHome, faUsers, faAddressBook, faShoppingCart,faHeart } from '@fortawesome/free-solid-svg-icons';

const Links = [
    { name: "home", path: "/", icon: faHome },
    { name: "wishlist", path: "/wishlist", icon: faHeart },
    { name: "cart", path: "/cart", icon: faShoppingCart },
    { name: "community", path: "/community", icon: faUsers },
    { name: "contact", path: "/contact", icon: faAddressBook },
];

const MobileNav = () => {
    return (
        <nav className='w-full'>
            {Links.map((link, index) => (
                
                    <Link 
                    key={index} 
                    to={link.path} 
                    className=" flex items-center justify-center hover:bg-[#f5f5f5] hover:rounded-lg text-white text-lg py-2 cursor-pointer border-b-2  px-4 hover:text-black"
                >
                    <FontAwesomeIcon icon={link.icon} className='mr-4'/> 
                    {link.name}
                </Link>
               
                
            ))}
        </nav>
    );
};

export default MobileNav;

