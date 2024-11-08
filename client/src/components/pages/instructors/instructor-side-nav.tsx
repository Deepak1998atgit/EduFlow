import React, { useState, useEffect } from 'react';
import { BookOpen, Settings, HelpCircle, Shield, Users, Waypoints, Home, Library } from 'lucide-react';
import { motion } from 'framer-motion';

// Define the component as a TypeScript functional component
const InstructorSideNav: React.FC= () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    // Sidebar routes array
    const routes = [
        { title: "Home", icon: <Home />, value: "home", path: '/instructors/' },
        { title: "View Courses", icon: <BookOpen />, value: "view-course", path: '/instructors/view-course' },
        { title: "Add Courses", icon: <Library />, value: "add-course", path: '/instructors/add-course' },
        { title: "My Students", icon: <Users />, value: "view-students", path: '/instructors/view-students' },
        { title: "My Profile", icon: <Settings />, value: "view-profile", path: '/instructors/view-profile' },
        { title: "Channels", icon: <Waypoints />, value: "view-channels", path: '/instructors/view-channels' },
        { title: "Resources", icon: <HelpCircle />, value: "resources", path: '/instructors/resources' },
    ];
    // Mouse enter handler
    const handleMouseEnter = (): void => {
        setIsHovered(true);
        const newTimeoutId = setTimeout(() => setShouldAnimate(true), 500);
        setTimeoutId(newTimeoutId);
    };
    // Mouse leave handler
    const handleMouseLeave = (): void => {
        setIsHovered(false);
        setShouldAnimate(false);
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    };
    // Cleanup timeout on component unmount
    useEffect(() => {
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [timeoutId]);
    return (
        <div className="flex h-full col-span-3 relative bg-white">
            {/* Sidebar */}
            <motion.div
                initial={{ width: '4rem' }}
                whileHover={{ width: '21.4rem' }}
                animate={{ width: isHovered ? '21.4rem' : '4rem' }}
                transition={{ duration: 0.2 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="bg-[rgb(28,29,31)] min-h-screen absolute top-0 left-0 duration-300 z-20 group text-white"
            >
                {/* Logo */}
                <div className="py-7 pl-3 flex items-center hover:border-gray-700">
                    <Shield className="h-14 w-10" />
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={shouldAnimate ? { opacity: 1, x: 10 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl ml-2 hidden absolute px-6 mb-4 group-hover:inline-block font-medium"
                    >
                        Eduflow
                    </motion.h1>
                </div>

                {/* Sidebar Menu */}
                <nav>
                    <ul>
                        {routes.map((route, index) => (
                            <li
                                key={index}
                                className={`px-4 py-5 h-16   ${index === 1 ? 'bg-gray-700 border-l-[3px]' : 'hover:bg-gray-700'} text-base font-bold cursor-pointer`}
                            >
                                <a href={route.path} className="flex items-center space-x-3">
                                    {route.icon}
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5 }}
                                        className="hidden absolute px-5 group-hover:inline-block"
                                    >
                                        {route.title}
                                    </motion.span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
            {/* Main Content */}
            <div className="z-0 ml-16 flex-1 bg-[#E6F2FF] min-h-screen">
                <div className="w-full flex items-center text-[20px] font-extrabold justify-center h-44">
                    <h1>Communication</h1>
                </div>
                <ul>
                    <li className="pl-7 pr-8 h-16 hover:bg-white text-base text-black font-bold cursor-pointer">
                        <div className="ml-3 pt-6 h-full border-b-[1px] border-black border-opacity-20">
                            <span className="text-black">Courses</span>
                        </div>
                    </li>
                    <li className="pl-7 pr-8 h-16 bg-white text-base border-l-[4px] border-opacity-50 border-gray-900 font-bold cursor-pointer">
                        <div className="ml-3 pt-6 h-full border-b-[1px] border-black border-opacity-20">
                            <span className="text-black">Communication</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InstructorSideNav;
