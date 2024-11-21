import React, { useState,useMemo } from 'react';
import { BookOpen, Settings, HelpCircle, Shield, Users, Waypoints, Home, Library } from 'lucide-react';
import { motion } from 'framer-motion';

// Props Interface
interface InstructorSideNavProps {
  onSidebarClick: (buttonValue: string) => void;
  onSubSideBarClick: React.Dispatch<React.SetStateAction<string>>;
}

// Utility Function for Conditional Classes
const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Sidebar Component
const InstructorSideNav: React.FC<InstructorSideNavProps> = ({ onSidebarClick, onSubSideBarClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeButton, setActiveButton] = useState('dashboard');
  const [activeSubSideBar, setActiveSubSideBar] = useState('');
  const routes = useMemo(
    () => [
      { title: 'Home', icon: <Home />, value: 'home', path: '/instructors/' },
      {
        title: 'View Courses',
        icon: <BookOpen />,
        value: 'view-courses',
        path: '/instructors/view-course',
        subRoutes: [
          { title: 'All Courses', value: 'all-courses', path: '/instructors/view-course/all' },
          { title: 'Active Courses', value: 'my-courses', path: '/instructors/view-course/my' },
          { title: 'Passive Courses', value: 'passive-courses', path: '/instructors/view-course/passive' },
        ],
      },
      { title: 'Add Course', 
        icon: <Library />, 
        value: 'add-course', 
        path: '/instructors/add-course',
        subRoutes: [
          { title: 'All Courses', value: 'all-courses', path: '/instructors/view-course/all' },
          { title: 'Active Courses', value: 'my-courses', path: '/instructors/view-course/my' },
          { title: 'Passive Courses', value: 'passive-courses', path: '/instructors/view-course/passive' },
        ]
      },
      { title: 'My Students', icon: <Users />, value: 'view-students', path: '/instructors/view-students' },
      { title: 'My Profile', icon: <Settings />, value: 'view-profile', path: '/instructors/view-profile' },
      { title: 'Channels', icon: <Waypoints />, value: 'view-channels', path: '/instructors/view-channels' },
      { title: 'Resources', icon: <HelpCircle />, value: 'resources', path: '/instructors/resources' },
    ],
    []
  );

  const activeSubRoutes = useMemo(() => {
    const selectedRoute = routes.find((route) => route.value === activeButton);
    return selectedRoute?.subRoutes ? { title: selectedRoute.title, subRoutes: selectedRoute.subRoutes } : null;
  }, [activeButton, routes]);

  // Handlers
  const handleButtonClick = (option: string) => {
    setActiveButton(option);
    onSidebarClick(option);
  };

  const handleSubSideBarClick = (option: string) => {
    setActiveSubSideBar(option);
    onSubSideBarClick(option);
  };

  return (
    <div className="flex h-full col-span-3 relative">
      {/* Sidebar */}
      <motion.div
        initial={{ width: '4rem' }}
        whileHover={{ width: '21.4rem' }}
        animate={{ width: isHovered ? '21.4rem' : '4rem' }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-[rgb(28,29,31)] min-h-full absolute top-0 left-0 z-20 group text-white"
      >
        {/* Logo */}
        <div className="py-7 pl-3 flex items-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Shield className="h-14 w-10" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={isHovered ? { opacity: 1, x: 10 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl ml-2 hidden group-hover:inline-block font-medium"
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
                onClick={() => handleButtonClick(route.value)}
                className={classNames(
                  'px-4 py-5 h-16 text-[15px] font-base cursor-pointer',
                  activeButton === route.value ? 'bg-gray-700 border-l-[3px]' : 'hover:bg-gray-700'
                )}
              >
                <div className="flex items-center space-x-3">
                  {route.icon}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                    className="hidden group-hover:inline-block"
                  >
                    {route.title}
                  </motion.span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* Sub Sidebar */}
      <div className="z-0 ml-16 flex-1 bg-[#E6F2FF] min-h-screen">
        {activeSubRoutes ? (
          <>
            <div className="w-full flex items-center text-[20px] font-extrabold justify-center h-44">
              <h1>{activeSubRoutes.title}</h1>
            </div>
            <ul>
              {activeSubRoutes.subRoutes.map((subRoute, index) => (
                <li
                  key={index}
                  onClick={() => handleSubSideBarClick(subRoute.title)}
                  className={classNames(
                    'pl-7 pr-8 h-16 text-base text-black font-bold cursor-pointer hover:bg-white',
                    activeSubSideBar === subRoute.title
                      ? 'border-l-[4px] border-[#01F9C6] bg-white'
                      : 'border-none'
                  )}
                >
                  <div className="ml-3 pt-6 h-full border-b-[1px] border-black border-opacity-20">
                    <span>{subRoute.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default InstructorSideNav;

