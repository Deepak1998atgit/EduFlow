import React, { useState } from 'react'
import StudentNavbar from '../../partials/studentNav';
import StudentHero from './studentHero';
import StudentCoursecard from './studentCourseCard';
import StudentFooter from './studentFooter';

const StudentDashboard: React.FC = () => {

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


