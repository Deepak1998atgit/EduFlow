import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faAddressBook, faShoppingCart,faHeart } from '@fortawesome/free-solid-svg-icons';

const Links = [
    { name: "home", path: "/", icon: faHome },
    { name: "wishlist", path: "/wishlist", icon: faHeart },
    { name: "cart", path: "/cart", icon: faShoppingCart },
    { name: "community", path: "/community", icon: faUsers },
    { name: "contact", path: "/contact", icon: faAddressBook },
];

const StudentNav: React.FC = () => {
    const location = useLocation();

    return (
        <>
            {Links.map((link, index) => (
                <Link
                    to={link.path}
                    key={index}
                    className={`flex items-center capitalize text-darkred hover:text-darkpink font-medium transition-all ${link.path === location.pathname && 'xl:text-darkpink border-b-2 border-darkpink'}`}
                >
                    <FontAwesomeIcon icon={link.icon}  />
                    
                </Link>
            ))}
        </>
    );
}

export default StudentNav;
