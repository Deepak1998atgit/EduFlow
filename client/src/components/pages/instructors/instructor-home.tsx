import React,{useState}from 'react'
import InstructorStudentcard from './instructor-studentcard';


const InstructorHome: React.FC<{ activeButton: string }> = ({activeButton}) => {
    return (
      <>
          
          {activeButton === 'performance' && <InstructorStudentcard/>}
          {activeButton === 'students' && <>Stdents</> }
          {activeButton === 'courses' && <>Courses</>}  
          {activeButton === 'communications' && <>Communications</>}  
      </>
    );
  }
  export default InstructorHome;

 