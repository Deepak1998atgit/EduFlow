import React, { useState, useEffect } from "react";
import AdminNav from '../../layouts/adminNav';
import AdminSideBar from '../../pages/admin/admin-sidebar';
import Students from "./admin-user";
import Instructors from './admin-tutor';
import ViewInstructorRequests from "../instructor-management/view-instructor-requests";
// import AdminHome from "./admin-home";




const AdminDashboard: React.FC = () => {
  const [selectedButtonValue, setSelectedButtonValue] = useState('dashboard');
  const handleSidebarClick = (buttonValue :string) => {
    setSelectedButtonValue(buttonValue);
  };
  return (
    <>
      <AdminNav />
      <div className="flex">
        <AdminSideBar onSidebarClick={handleSidebarClick}  />
        {selectedButtonValue === 'dashboard' && <>Home</>}
        {selectedButtonValue === 'students' && <Students/>}
        {selectedButtonValue === 'tutorrequests' && <ViewInstructorRequests/>}  
        {selectedButtonValue === 'tutors' && <Instructors/>}  
      </div>
    </>
  );
};
export default AdminDashboard;