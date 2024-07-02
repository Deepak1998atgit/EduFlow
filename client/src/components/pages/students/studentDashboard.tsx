import React, { Suspense, lazy } from 'react';
import StudentNavbar from '../../partials/studentNav';
import StudentHero from './studentHero';
import StudentCoursecard from './studentCourseCard';
import StudentFooter from './studentFooter';

const StudentDashboard: React.FC = () => {

  return (
    <>
      <StudentNavbar />
      <StudentHero />
      <StudentCoursecard />
      <div className="video-container">
        <Suspense fallback={<div>Loading...</div>}>
          <video controls width="400">
            <source src="https://res.cloudinary.com/dhppn0e84/video/upload/v1719918129/ea3e926269fe656ccf9b1f13f01309ea760eeb95b4f2cae48e459ee2b02b1c8e.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Suspense>
      </div>
      <StudentFooter />
    </>
  )
}

export default StudentDashboard;


