import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Wishlist",
        path: "/wishlist"
    },
    {
        name: "Cart",
        path: "/cart"
    },
    {
        name: "Community",
        path: "/community"
    },
    {
        name: "Contact",
        path: "/contact"
    },
];

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='relative mr-0'>
            <FontAwesomeIcon icon={faBars} onClick={toggleNav} className="text-3xl cursor-pointer" />
            {isOpen && (
                <div className="absolute top-14 right-0 h-screen w-48 bg-platinum border-l border-gray-200">
                    {Links.map((link, index) => (
                        <Link key={index} to={link.path} className="block py-2 px-4 text-gray-800 hover:text-darkpink">{link.name}</Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default MobileNav;
