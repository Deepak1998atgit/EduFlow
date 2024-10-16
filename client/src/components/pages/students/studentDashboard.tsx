import React from 'react';
import StudentHero from './student-Hero';
import StudentCoursecard from './studentCourseCard';
import StudentLandingPageFeatures from "./studentFeatures"


const StudentDashboard: React.FC = () => {
 

  return (
    <>
      <StudentHero />
      <StudentCoursecard />
      <StudentLandingPageFeatures/>
      {/* <StudentFooter /> */}
      
    </>
  )
}

export default StudentDashboard;


