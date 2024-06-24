import React, { useState} from "react";
import InstructorNav from '../../partials/instructorNav';
import InstructorSideBar from '../../pages/instructors/instructor-sidebar';
import CombinedCourseAddForm from "../add-corse/add-course-form";



const AdminDashboard: React.FC = () => {
  const [selectedButtonValue, setSelectedButtonValue] = useState('dashboard');
  const handleSidebarClick = (buttonValue :string) => {
    setSelectedButtonValue(buttonValue);
  };
  return (
    <>
      <InstructorNav />
      <div className="flex">
        <InstructorSideBar onSidebarClick={handleSidebarClick}  />
        {selectedButtonValue === 'dashboard' && <div>dash</div>}
        {selectedButtonValue === 'users' && <CombinedCourseAddForm/>}
        {selectedButtonValue === 'tutors' && <div>Tutors</div>}  
      </div>
    </>
  );
};
export default AdminDashboard;
