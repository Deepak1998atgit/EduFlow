import React, { useState, useEffect } from "react";
import InstructorNav from '../../partials/instructorNav';
import InstructorSideBar from '../../pages/instructors/instructor-sidebar';
import ListCourseForInstructors from "../add-corse/list-course-for-instructors";
import { useSelector } from "react-redux";
import CombinedCourseAddForm from "../add-corse/add-course-form";
import { selectIsLoggedIn } from "../../../redux/reducers/authSlice";
import { useNavigate } from 'react-router-dom';
import { selectUserType } from "../../../redux/reducers/authSlice";



const AdminDashboard: React.FC = () => {

  const navigate = useNavigate();
  const [selectedButtonValue, setSelectedButtonValue] = useState('dashboard');
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

  return (
    <>
      <InstructorNav />
      <div className="flex">
        <InstructorSideBar onSidebarClick={handleSidebarClick} />
        {selectedButtonValue === 'dashboard' && <div>dash</div>}
        {selectedButtonValue === 'users' && <CombinedCourseAddForm />}
        {selectedButtonValue === 'tutors' && <div>Tutors</div>}
        {selectedButtonValue === 'view-courses' && <ListCourseForInstructors/>}
      </div>
    </>
  );
};
export default AdminDashboard;
