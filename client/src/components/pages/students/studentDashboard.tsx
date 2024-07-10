import React, { Suspense, lazy ,useState} from 'react';
import StudentNavbar from '../../partials/studentNav';
import StudentHero from './studentHero';
import StudentCoursecard from './studentCourseCard';
import StudentFooter from './studentFooter';
import StudentNav from "./studentheaderdemo"

const StudentDashboard: React.FC = () => {
 

  return (
    <>
      {/* <StudentNavbar />
      <StudentHero />
      <StudentCoursecard />
      <StudentFooter /> */}
      <StudentNav/>
    </>
  )
}

export default StudentDashboard;


