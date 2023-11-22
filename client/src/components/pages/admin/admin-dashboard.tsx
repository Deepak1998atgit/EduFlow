import React, { useState, useEffect } from "react";
import AdminNav from '../../partials/adminNav';
import AdminSideBar from '../../pages/admin/admin-sidebar';
import Students from "./admin-user";
import Instructors from './admin-tutor'



const AdminDashboard: React.FC = () => {
  const [selectedButtonValue, setSelectedButtonValue] = useState('users');
  const handleSidebarClick = (buttonValue :string) => {
   // Set the selected button value
    setSelectedButtonValue(buttonValue);
  };
  return (
    <>
      <AdminNav />
      <div className="flex">
        <AdminSideBar onSidebarClick={handleSidebarClick}  />
        {selectedButtonValue === 'users' && <Students/>}
        {selectedButtonValue === 'tutors' && <Instructors/>}  
      </div>
    </>
  );
};
export default AdminDashboard;