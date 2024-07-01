import React, { useEffect, useState } from "react";
import {
    getAllInstructorRequests,
} from "../../../api/endpoints/instructor-management";
import { toast } from "react-toastify";
import { acceptInstructorRequest } from "../../../api/endpoints/instructor-management";
import useTimeAgo from "../../../hooks/useTimeAgo";
import { InstructorApiResponse } from "../../../api/types/apiResponses/api-response-instructors";


const ViewInstructorRequests: React.FC = () => {
    const [requests, setRequests] = useState<InstructorApiResponse[]>([]); // Initialize as an empty array of InstructorApiResponse
    const [instructor, setInstructor] = useState<InstructorApiResponse | undefined>(); // Initialize as undefined
    const calculateTimeAgo = useTimeAgo();
    const handleApiCall = async () => {
        try {
            const response = await getAllInstructorRequests();
            setRequests(response?.data?.data || []); // Ensure requests is always an array
            if (response?.data?.data?.length > 0) {
                setInstructor(response.data.data[0]); // Assuming you want to set the first item as instructor
            }
            console.log(response?.data?.data);
        } catch (error: any) {
            toast.error(error?.data?.message, { position: toast.POSITION.BOTTOM_RIGHT })
        }
    };

    useEffect(() => {
        handleApiCall();
    }, []);
    const {
        _id,
        firstName,
        lastName,
        email,
        profilePic,
        mobile,
        qualification,
        subjects,
        experience,
        skills,
        about,
        dateJoined,
        certificates,
    } = instructor || {}; 
    const acceptRequest = async () => {
        try {
            if (_id){
                const response = await acceptInstructorRequest(_id);
                toast.success(response?.data?.message, {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
          }
        } catch (error: any) {
          toast.error(error.data?.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      };

    return (
        <div className="ml-1 max-w-full">
            <ul role='list' className='divide-gray-100 '>
                <li>
                    <p></p>
                </li>
                {requests.map((person) => (
                    <li className='flex justify-between items-center  ml-14 gap-x-4 h-52 gap-y-6 mt-3 p-3 py-4 rounded-md border bg-white border-gray-300'>
                        <div className='flex gap-x-4'>
                            <img
                                className='h-12 w-12 flex-none rounded-full bg-gray-50'
                                src={person?.profilePic?.url}
                                alt=''
                            />
                            <div className='min-w-0 flex-auto'>
                                <p className='text-sm font-semibold leading-6 text-gray-900'>
                                    {`${person?.firstName} ${person?.lastName}`}
                                </p>
                                <p className=' truncate text-xs leading-5 text-gray-500'>
                                    {person?.email}
                                </p>
                            </div>
                        </div>
                        <div className='hidden sm:flex sm:flex-col sm:items-end'>
                            <p className='mt-1 text-xs leading-5 text-gray-500'>
                                {calculateTimeAgo(person?.dateJoined)}
                            </p>
                        </div>
                        <div className=" sm:flex mt-0 sm:flex-col sm:items-end">
                            {person.certificates && person.certificates.length > 0 && (
                                <div className=" w-60 h-20 sm:py-0">
                                    <h4 className="text-sm leading-6 font-medium text-gray-900 ">
                                        Certificates
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-0">
                                        {person.certificates.map((certificate, index) => (
                                            <div key={index} className="flex flex-col items-center bg-white rounded-lg  shadow-lg">
                                                <iframe
                                                    src={certificate?.url}
                                                    width="100%"
                                                    height="25%"
                                                    className="h-20"
                                                    style={{
                                                        overflow: "hidden"
                                                    }}
                                                    title={`Certificate-${index}`}
                                                />
                                                <div>
                                                    <div className="mt-0">
                                                        <button
                                                            className="bg-[#0e7490]  text-sm flex p-3  items-center h-5 text-white  rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            onClick={() => window.open(certificate.url, '_blank')}
                                                        >
                                                            View
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='hidden sm:flex sm:flex-col sm:items-end'>
                            <p className='mt-1 text-xs leading-5 text-gray-500'>
                                {person.qualification}
                            </p>
                        </div>
                        <div className='hidden sm:flex sm:flex-col sm:items-end'>
                            <p className='mt-1 text-xs leading-5 text-gray-500'>
                                {person.skills}
                            </p>
                        </div>
                        <div className='flex gap-x-4'>
                            <button
                                onClick={acceptRequest}
                                className=' rounded-md h-10 bg-[#155e75] text-white w-20 bg-success text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-[#22c55e] hover:shadow-md'
                            >
                                Approve
                            </button>
                            <button
                                className=' rounded-md h-10 bg-[#155e75] text-white w-14 bg-success text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-[#ef4444] hover:shadow-md'
                            >
                                Reject
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewInstructorRequests;

