
import React, { useState } from 'react';
import InstructorHome from './instructor-home';
import InstructorFooter from './instructor-footer';
import { FaUserGraduate } from "react-icons/fa6";
import { RiCommunityFill } from "react-icons/ri";
import { FcStatistics } from "react-icons/fc";
import { ImBooks } from "react-icons/im";
import InstructorNavbar from './instructor-navbar';
const InstructorDashboard: React.FC = ({ }) => {
  const [activeButton, setActiveButton] = useState('performance');
  const handleButtonClick = (buttonValue: string) => {
    setActiveButton(buttonValue);
  }
  return (
    <>
      <div className="grid grid-cols-6 gap-0">
        <div className="bg-[#31473A] col-span-1">
          <div className="h-screen ">
            <div className=" h-screen">
              <ul>
                <li className=""><button onClick={() => handleButtonClick('performance')} className={`bg-${activeButton === 'performance' ? 'white' : 'green'} text-${activeButton === 'performance' ? 'black' : 'white'} text-left text-lg border border-transparent flex items-center mt-20 outline-none focus:border-transparent pl-4 h-32 w-full  hover:bg-gray-700 `} ><FcStatistics className="mr-2" />Performance</button></li>
                <li className=""><button onClick={() => handleButtonClick('students')} className={`bg-${activeButton === 'students' ? 'white' : 'green'} text-left text-lg border border-transparent flex items-center outline-none focus:border-transparent pl-4 h-32 w-full  hover:bg-gray-700 text-${activeButton === 'students' ? 'black' : 'white'}`} ><FaUserGraduate className="mr-2" />Students</button></li>
                <li className=""><button onClick={() => handleButtonClick('courses')} className={`bg-${activeButton === 'courses' ? 'white' : 'green'} text-left text-lg border border-transparent flex items-center outline-none focus:border-transparent pl-4 h-32  hover:bg-gray-700 w-full text-${activeButton === 'courses' ? 'black' : 'white'}`} ><ImBooks className="mr-2" />Courses</button></li>
                <li className=""><button onClick={() => handleButtonClick('communications')} className={`bg-${activeButton === 'communications' ? 'white' : 'green'} text-left text-lg border border-transparent flex items-center outline-none focus:border-transparent pl-4 h-32 hover:bg-gray-700 w-full text-${activeButton === 'communications' ? 'black' : 'white'}`} ><RiCommunityFill className="mr-2" />Communications</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="bg-gray-300 ">
            <InstructorNavbar />
            <div className="float-left">
              <InstructorHome activeButton={activeButton} />
            </div>
          </div>
        </div>
      </div>
      <InstructorFooter/>
    </>
  );
};
export default InstructorDashboard;

