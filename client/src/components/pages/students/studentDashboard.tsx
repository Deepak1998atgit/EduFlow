import React from 'react';
import StudentHero from './student-Hero';
import StudentCoursecard from './studentCourseCard';


const StudentDashboard: React.FC = () => {
 

  return (
    <>
      <StudentHero />
      <StudentCoursecard />
      {/* <StudentFooter /> */}
      
    </>
  )
}

export default StudentDashboard;


