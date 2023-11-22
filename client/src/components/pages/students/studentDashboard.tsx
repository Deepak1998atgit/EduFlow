import React, { useState } from 'react'
import StudentNavbar from '../../partials/studentNav';
import StudentHero from './studentHero';
import StudentCoursecard from './studentCourseCard';
import StudentFooter from './studentFooter';

const StudentDashboard: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <StudentNavbar />
      <StudentHero/>
      <StudentCoursecard/>  
      <StudentFooter/>
    </>
  )
}

export default StudentDashboard;


