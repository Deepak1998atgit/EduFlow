import React, { Suspense, lazy ,useState} from 'react';
import StudentNavbar from '../../partials/studentNav';
import StudentHero from './studentHero';
import StudentCoursecard from './studentCourseCard';
import StudentFooter from './studentFooter';
import StudentHeader from "./studentheaderdemo"

const StudentDashboard: React.FC = () => {
 

  return (
    <>
      {/* <StudentNavbar />
      <StudentHero />
      <StudentCoursecard />
      <StudentFooter /> */}
      <StudentHeader/>
    </>
  )
}

export default StudentDashboard;


