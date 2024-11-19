import React, { useState, useEffect } from 'react';
import { BookOpen, Settings, HelpCircle, Shield, Users, Waypoints, Home, Library } from 'lucide-react';
import { motion } from 'framer-motion';
// Define the prop types for InstructorSideNav
interface InstructorSideNavProps {
    onSidebarClick: (buttonValue: string) => void;
    onSubSideBarClick:React.Dispatch<React.SetStateAction<string>>;
}
// Define the component as a TypeScript functional component
const InstructorSideNav: React.FC<InstructorSideNavProps> = ({ onSidebarClick ,onSubSideBarClick}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const [activeButton, setActiveButton] = useState<string>('dashboard');
    const [activeSubRoutes, setActiveSubRoutes] = useState<{ title: string; subRoutes: any[] } | null>(null);

    // Sidebar routes array
    const routes = [
        { title: "Home", icon: <Home />, value: "home", path: '/instructors/' },
        {
            title: "View Courses", icon: <BookOpen />, value: "view-course", path: '/instructors/view-course',
            subRoutes: [
                { title: 'All Courses', value: 'all-courses', path: '/instructors/view-course/all' },
                { title: 'Active Courses', value: 'my-courses', path: '/instructors/view-course/my' },
                { title: 'Passive Courses', value: 'my-courses', path: '/instructors/view-course/my' }
            ]
        },
        {
            title: "Add Courses", icon: <Library />, value: "add-course", path: '/instructors/add-course',
            subRoutes: [
                { title: 'All Courses', value: 'all-courses', path: '/instructors/view-course/all' },
                { title: 'My Courses', value: 'my-courses', path: '/instructors/view-course/my' }
            ]
        },
        {
            title: "My Students", icon: <Users />, value: "view-students", path: '/instructors/view-students',
            subRoutes: [
                { title: 'All Courses', value: 'all-courses', path: '/instructors/view-course/all' },
                { title: 'My Courses', value: 'my-courses', path: '/instructors/view-course/my' }
            ]
        },
        {
            title: "My Profile", icon: <Settings />, value: "view-profile", path: '/instructors/view-profile',
            subRoutes: [
                { title: 'All Courses', value: 'all-courses', path: '/instructors/view-course/all' },
                { title: 'My Courses', value: 'my-courses', path: '/instructors/view-course/my' }
            ]
        },
        {
            title: "Channels", icon: <Waypoints />, value: "view-channels", path: '/instructors/view-channels',
            subRoutes: [
                { title: 'All Courses', value: 'all-courses', path: '/instructors/view-course/all' },
                { title: 'My Courses', value: 'my-courses', path: '/instructors/view-course/my' }
            ]
        },
        {
            title: "Resources", icon: <HelpCircle />, value: "resources", path: '/instructors/resources',
            subRoutes: [
                { title: 'All Courses', value: 'all-courses', path: '/instructors/view-course/all' },
                { title: 'My Courses', value: 'my-courses', path: '/instructors/view-course/my' }
            ]
        },
    ];
    const handleButtonClick = (option: string) => {
        // Find the clicked route by its title or value
        const selectedRoute = routes.find(route => route.value === option);

        // Set the active button
        setActiveButton(option);

        // Call the sidebar click callback
        onSidebarClick(option);
        
        // Check if the selected route has subRoutes
        if (selectedRoute && selectedRoute.subRoutes && selectedRoute.subRoutes.length > 0) {
            // Set the active subRoutes state with the title and subRoutes
            setActiveSubRoutes({ title: selectedRoute.title, subRoutes: selectedRoute.subRoutes });
            
        } else {
            // Clear the active subRoutes state if there are no subRoutes
            setActiveSubRoutes(null);
        }
    };

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
        <div className="flex h-full col-span-3 relative ">
            {/* Sidebar */}
            <motion.div
                initial={{ width: '4rem' }}
                whileHover={{ width: '21.4rem' }}
                animate={{ width: isHovered ? '21.4rem' : '4rem' }}
                transition={{ duration: 0.2 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="bg-[rgb(28,29,31)] min-h-full absolute top-0 left-0 duration-300 z-20 group text-white"
            >
                {/* Logo */}
                <div className="py-7 pl-3  flex items-center text-[#01F9C6] hover:border-gray-700">
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        }}
                    >
                        <Shield className="h-14 w-10" />
                    </motion.div>
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
                <nav className=" ">
                    <ul>
                        {routes.map((route, index) => (
                            <li
                                onClick={() => handleButtonClick(route?.value)}
                                key={index}
                                className={`px-4 py-5 h-16   ${index === 1 ? 'bg-gray-700 border-l-[3px]' : 'hover:bg-gray-700'} text-[15px] font-base cursor-pointer`}
                            >
                                <div className="flex items-center text-[#01F9C6] space-x-3">
                                    {route.icon}
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5 }}
                                        className="hidden  absolute px-5 group-hover:inline-block"
                                    >
                                        {route.title}
                                    </motion.span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
            {/* sub side bar */}
            <div className="z-0 ml-16 flex-1 bg-[#E6F2FF] min-h-screen">
                {activeSubRoutes ? (
                    <>
                        <div className="w-full flex items-center text-[20px] font-extrabold justify-center h-44">
                            <h1>{activeSubRoutes.title}</h1>
                        </div>
                        <ul>
                            {activeSubRoutes.subRoutes.map((subRoute, index) => (
                                <li key={index} onClick={()=>{onSubSideBarClick(subRoute?.title);}} className="pl-7 pr-8 h-16 hover:bg-white text-base text-black font-bold cursor-pointer">
                                <div className="ml-3 pt-6 h-full border-b-[1px] border-black border-opacity-20">
                                    <span className="text-black">{subRoute?.title}</span>
                                </div>
                            </li>
))}
                            {/* <li className="pl-7 pr-8 h-16 hover:bg-white text-base text-black font-bold cursor-pointer">
                                <div className="ml-3 pt-6 h-full border-b-[1px] border-black border-opacity-20">
                                    <span className="text-black">sub route title 1 of Title1</span>
                                </div>
                            </li>
                            <li className="pl-7 pr-8 h-16 bg-white text-base border-l-[4px] border-opacity-50 border-gray-900 font-bold cursor-pointer">
                                <div className="ml-3 pt-6 h-full border-b-[1px] border-black border-opacity-20">
                                    <span className="text-black">sub route title 2 of Title2</span>
                                </div>
                            </li> */}
                        </ul>
                    </>
                ) : "null"}

            </div>
        </div>
    );
};

export default InstructorSideNav;

