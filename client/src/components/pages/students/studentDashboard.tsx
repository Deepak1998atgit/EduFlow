import React, { Suspense, lazy ,useState} from 'react';
import StudentNavbar from '../../partials/studentNav';
import StudentHero from './student-Hero';
import StudentCoursecard from './studentCourseCard';


const StudentDashboard: React.FC = () => {
 

  return (
    <>
      {/* <StudentNavbar /> */}
      <StudentHero />
      {/* <StudentCoursecard />
      <StudentFooter /> */}
      
    </>
  )
}

export default StudentDashboard;


