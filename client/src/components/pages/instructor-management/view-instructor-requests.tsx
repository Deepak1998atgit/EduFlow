// import React, { useEffect, useState } from "react";
// import {
//   getAllInstructorRequests,
// } from "../../../api/endpoints/instructor-management";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import useTimeAgo from "../../../hooks/useTimeAgo";
// import { InstructorApiResponse } from "../../../api/types/apiResponses/api-response-instructors";

// const ViewInstructorRequests: React.FC = () => {
//   const [requests, setRequests] = useState<InstructorApiResponse[]>([]); // Initialize as an empty array of InstructorApiResponse
//   const [instructor, setInstructor] = useState<InstructorApiResponse | undefined>(); // Initialize as undefined
//   const calculateTimeAgo = useTimeAgo();

//   const handleApiCall = async () => {
//     try {
//       const response = await getAllInstructorRequests();
//       setRequests(response?.data?.data || []); // Ensure requests is always an array
//       if (response?.data?.data?.length > 0) {
//         setInstructor(response.data.data[0]); // Assuming you want to set the first item as instructor
//       }
//       console.log(response?.data?.data);
//     } catch (error: any) {
//       toast.error(error?.data?.message, { position: toast.POSITION.BOTTOM_RIGHT })
//     }
//   };

//   useEffect(() => {
//     handleApiCall();
//   }, []);

//   // Ensure instructor is defined before accessing its properties
//   // const {
//   //   _id,
//   //   firstName,
//   //   lastName,
//   //   email,
//   //   profilePic,
//   //   mobile,
//   //   qualification,
//   //   subjects,
//   //   experience,
//   //   skills,
//   //   about,
//   //   dateJoined,
//   //   certificates,
//   // } = instructor || {}; // Use empty object as fallback

//   // console.log("2", instructor);
//   // console.log("certificates", certificates);

//   return (
//     <ul role='list' className=' divide-gray-100 '>
//       {requests.map((person) => (
//         <Link
//           to={`/admin/instructors/requests/${person._id}`}
//           key={person?._id}
//         >
//           <li className='flex justify-between gap-x-6 gap-y-3 mt-3 p-3 py-4 rounded-md border bg-white border-gray-300'>
//             <div className='flex gap-x-4'>
//               <img
//                 className='h-12 w-12 flex-none rounded-full bg-gray-50'
//                 src={person?.profilePic?.url}
//                 alt=''
//               />
//               <div className='min-w-0 flex-auto'>
//                 <p className='text-sm font-semibold leading-6 text-gray-900'>
//                   {`${person?.firstName} ${person?.lastName}`}
//                 </p>
//                 <p className=' truncate text-xs leading-5 text-gray-500'>
//                   {person?.email}
//                 </p>
//               </div>
//             </div>
//             <div className='hidden sm:flex sm:flex-col sm:items-end'>
//               <p className='mt-1 text-xs leading-5 text-gray-500'>
//                 Application sent {calculateTimeAgo(person?.dateJoined)}
//               </p>
//             </div>
//             <div className="hidden sm:flex sm:flex-col sm:items-end">
//               {person.certificates && person.certificates.length > 0 && (
//                 <div className="px-1 py-0  sm:py-0">
//                   <h4 className="text-sm leading-6 font-medium text-gray-900 mb-2">
//                     Certificates
//                   </h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {person.certificates.map((certificate, index) => (
//                       <div key={index} className="flex flex-col items-center bg-white rounded-lg outline-none shadow-lg">
//                         <iframe
//                           src={certificate?.url}
//                           width="100%"
//                           height="50%"
//                           className="w-full h-full"
//                           style={{
//                             overflowY: 'hidden',
//                             border: 'none',
//                             padding: '0',
//                             margin: '0'
//                           }}
//                           title={`Certificate-${index}`}
//                         />
//                         <div>
//               <div className="mt-0">
//                 <button
//                   className="bg-blue-500 mt-0 text-sm mb-0.5 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   onClick={() => window.open(certificate.url, '_blank')}
//                 >
//                   View Full PDF
//                 </button>
//               </div>
//             </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div className='hidden sm:flex sm:flex-col sm:items-end'>
//               <p className='mt-1 text-xs leading-5 text-gray-500'>
//                 {person.qualification}
//               </p>
//             </div>
//             <div className='hidden sm:flex sm:flex-col sm:items-end'>
//               <p className='mt-1 text-xs leading-5 text-gray-500'>
//                 {person.skills}
//               </p>
//             </div>
//             <div className='flex gap-x-4'>
//               <button
//                 className='p-1 m-3 rounded-md bg-blue-600 text-white w-20 text-center focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-700 hover:shadow-md'
//               >
//                 Verify
//               </button>
//             </div>
//           </li>
//         </Link>
//       ))}
//     </ul>
//   );
// };

// export default ViewInstructorRequests;

