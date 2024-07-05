// import React, { Suspense, lazy ,useState} from 'react';
// import StudentNavbar from '../../partials/studentNav';
// import StudentHero from './studentHero';
// import StudentCoursecard from './studentCourseCard';
// import StudentFooter from './studentFooter';

// const StudentDashboard: React.FC = () => {
//   const [responseData, setResponseData] = useState(null);
//     const [error, setError] = useState(null);
//   const fetchData = () => {
//     fetch('http://localhost:5000/api/courses/get-all-courses') // Replace with your backend API endpoint
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//           }
//           console.log("rees",response,"rees")
//           return response.json();
          
//         })
//         .then(data => {
//             console.log('Response from server:', data);
//             setResponseData(data); // Update state with response data
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             setError(error); // Update state with error information
//         });
//   };
//   console.log("responseData",responseData,"responseData")

//   return (
//     <>
//       <StudentNavbar />
//       <StudentHero />
//       <StudentCoursecard />
//       <div className="video-container">
//       <button onClick={fetchData}>Fetch Data</button>
//         <Suspense fallback={<div>Loading...</div>}>
//           <video controls width="400">
//             <source src="https://res.cloudinary.com/dhppn0e84/video/upload/v1719918129/ea3e926269fe656ccf9b1f13f01309ea760eeb95b4f2cae48e459ee2b02b1c8e.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </Suspense>
//       </div>
//       <StudentFooter />
//     </>
//   )
// }

// export default StudentDashboard;


