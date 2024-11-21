import React, { useState, useEffect } from "react";
import ListCourseForInstructors from "../add-corse/list-course-for-instructors";
import InstructorHeader from "../../layouts/instructor-header";
import ViewLessons from "../add-lesson/view-lesson";
// import InstructorSideNav from "./instructorDashboard";
import CombinedCourseAddForm from "../add-corse/add-course-form";
import {useLocation} from 'react-router-dom';
type SelectedButtonValue = 'add-course' | 'view-courses' | "view-lessons";
const AdminDashboard: React.FC=() => {
  const location = useLocation();
  const [selectedButtonValue, setSelectedButtonValue] = useState('dashboard');
  const [subSidebarTitle,setSubSidebarTitle]=useState("")
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sidebar = queryParams.get('sidebar');
    const subSidebar = queryParams.get('subSidebar'); 
    if (sidebar) {
      setSelectedButtonValue(sidebar as SelectedButtonValue); // Set the selected button value
    }
    if (subSidebar) {
      setSubSidebarTitle(subSidebar); // Set the sub-sidebar title
    }
  }, [location.search]);
  const componentsMap = {
    'add-course': <CombinedCourseAddForm />,
    'view-courses': <ListCourseForInstructors subSideBar={subSidebarTitle} />,
    'view-lessons':<ViewLessons/>
  };
  return (
      <>
        {componentsMap[selectedButtonValue as SelectedButtonValue ] || <p>{selectedButtonValue}NO COMP</p>}
      </>
  );
};
export default AdminDashboard;
