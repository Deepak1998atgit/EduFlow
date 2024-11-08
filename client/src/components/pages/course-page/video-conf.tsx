// src/VideoConferencePage.js
import React from 'react';
import {
    Card,
    CardBody,
    Button,
    Typography,
    Avatar,
    Progress,
    Input
} from '@material-tailwind/react';
import { GoArrowLeft } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import { MdCallEnd } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";
import { MdMonitor } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
const VideoConferencePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-28">
            {/* Main Content */}
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
                {/* Video Section */}
                <div className='col-span-2'>
                    <div className='flex items-center gap-7  justify-center'>
                        <Button className='bg-[#49BBBD]  mb-7 rounded-none'><i><GoArrowLeft size={19} /></i></Button>
                        {/* Header Section */}
                        <Card className="flex-row flex-grow  justify-between   p-4 mb-6 shadow-lg">
                            <div>
                                <Typography variant="h5" color="blue-gray">
                                    UX/UI Design Conference Meeting
                                </Typography>
                                <Typography variant="small" color="gray" className="ml-auto">
                                    9 Lessons 8h 30min
                                </Typography>
                            </div>
                            <Button size="md" className="ml-4 shadow-none border-none bg-white block">
                                <i><IoSettingsOutline size={19} className='text-[#252641]' /></i>
                            </Button>
                        </Card>
                    </div>
                    <Card className=" relative rounded-3xl  shadow-lg">
                        <video
                            controls
                            autoPlay
                            muted
                            className="rounded-3xl w-full  h-auto"
                        >
                            <source
                                src="https://www.w3schools.com/html/mov_bbb.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <Card className="shadow-lg bg-[#E6F2FF] bottom-9 w-10/12 left-16 rounded-3xl absolute">
                            <CardBody className='flex justify-center items-center gap-2'>
                                <Button className='bg-white shadow-none'><i><FaVideo className='text-[#EE645B]  bg-[#E6F2FF]' size={19} /></i></Button>
                                <Button className='bg-white shadow-none'><i><FaMicrophone className='text-[#29B9E7]' size={19} /></i></Button>
                                <Button className='bg-white shadow-none'><i><MdCallEnd className='text-[#EE5B90]' size={19} /></i></Button>
                                <Button className='bg-white shadow-none'><i>< MdMonitor className='text-[#00CBB8]' size={19} /></i></Button>
                            </CardBody>
                        </Card>
                        <Card className="bg-[#E6F2FF] top-2 right-2 h-1/4 w-1/4 border-2  rounded-3xl absolute">

                            <video
                                controls
                                autoPlay
                                muted
                                className="rounded-3xl w-full  h-full"
                            >
                                <source
                                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>

                        </Card>
                    </Card>
                </div>
                {/* Sidebar Section */}
                <Card className="shadow-lg rounded-t-3xl">
                    <CardBody className='bg-[#E6F2FF] rounded-3xl'>
                        <div className='flex  justify-between items-center'>
                            <Typography variant="h6" color="blue-gray" className="mb-4">
                                Instructor
                            </Typography>
                            <div className='flex items-end gap-2'>
                                <span className="text-sm font-medium">Tina Martin</span>
                                <Avatar src="https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnRzfGVufDB8fDB8fHww"
                                    alt="Author"
                                    size="sm" />

                            </div>
                        </div>
                        <div className="flex ml-0 items-center w-10/12 absolute bottom-0 bg-white rounded ">
                            <Input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-grow border-2  !border-[#E6F2FF] focus:outline-none rounded-full"
                                crossOrigin="anonymous"
                            />
                            <Button
                                className="ml-2 bg-[#E6F2FF]"
                            >
                                <i><IoMdSend size={19}  className='text-black '/></i>
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default VideoConferencePage;
