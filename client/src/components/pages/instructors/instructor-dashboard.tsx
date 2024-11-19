import React, { useState, useEffect } from "react";
import InstructorNav from '../../layouts/instructorNav';
import InstructorSideBar from '../../pages/instructors/instructor-sidebar';
import ListCourseForInstructors from "../add-corse/list-course-for-instructors";
import InstructorHeader from "../../layouts/instructor-header";
import { useSelector } from "react-redux";
import InstructorSideNav from "./instructorDashboard";
import CombinedCourseAddForm from "../add-corse/add-course-form";
import { selectIsLoggedIn } from "../../../redux/reducers/authSlice";
import { useNavigate } from 'react-router-dom';
import { selectUserType } from "../../../redux/reducers/authSlice";
interface CompCProps {
  subSideBar: string; // The 'data' prop should be a string
}
type SelectedButtonValue = 'add-course' | 'view-course';
const AdminDashboard: React.FC<CompCProps> = ({subSideBar}) => {
  const navigate = useNavigate();
  const [selectedButtonValue, setSelectedButtonValue] = useState('dashboard');
  const [subSidebarTitle,setSubSidebarTitle]=useState("")
  const [isLesson, setIsLesson] = useState<boolean>(false)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const user = useSelector(selectUserType)
  const handleSidebarClick = (buttonValue: string) => {
    setSelectedButtonValue(buttonValue);
  };
  useEffect(() => {
    if (!isLoggedIn || user !== "instructor") {
      navigate("/instructor-login");
    }
  }, [isLoggedIn, user, navigate]);

  if (!isLoggedIn && user !== "instructor") {
    return null;
  }
  const componentsMap = {
    'add-course': <CombinedCourseAddForm />,
    'view-course': <ListCourseForInstructors subSideBar={subSidebarTitle} />,
  };
  return (
    <div className="grid grid-cols-12">
      <InstructorSideNav onSidebarClick={handleSidebarClick} onSubSideBarClick={setSubSidebarTitle} />
      <div className="col-span-9">
        <InstructorHeader />
        {componentsMap[selectedButtonValue as SelectedButtonValue ] || <p>{selectedButtonValue}</p>}
      </div>
    </div>
  );
};
export default AdminDashboard;



{/* <>
      <div className="flex">
        <InstructorSideBar onSidebarClick={handleSidebarClick} />
        {selectedButtonValue === 'dashboard' && <div>dash</div>}
        {selectedButtonValue === 'users' && <CombinedCourseAddForm />}
        {selectedButtonValue === 'tutors' && <div>Tutors</div>}
        {selectedButtonValue === 'view-courses' && <ListCourseForInstructors/>}
      </div>
    </> */}