import { Typography } from "@material-tailwind/react";
import { GiNetworkBars } from "react-icons/gi";
import { FcDoughnutChart } from "react-icons/fc";

const LandingPageFeatures: React.FC = () => {

    return (
        <>
            <div className="w-full flex justify-center items-center mt-11">
                <div className="text-center">
                    <Typography variant="h3" className="" >Our Success</Typography>
                    <Typography variant="small" className="mt-4 text-[15px] text-[#696984]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </div>
            </div>
            <div className="flex flex-wrap justify-around w-full mt-11">
                <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/5">
                    <Typography
                        variant="h1"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]"
                    >
                        15K+
                    </Typography>
                    <Typography variant="h6" className="text-center">Students</Typography>
                </div>
                <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/3  lg:w-1/5">
                    <Typography
                        variant="h1"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]"
                    >
                        75%
                    </Typography>
                    <Typography variant="h6" className="text-center">Total success</Typography>
                </div>
                <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/3  lg:w-1/5">
                    <Typography
                        variant="h1"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]"
                    >
                        35
                    </Typography>
                    <Typography variant="h6" className="text-center">Main Questions</Typography>
                </div>
                <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/3  lg:w-1/5">
                    <Typography
                        variant="h1"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]"
                    >
                        26
                    </Typography>
                    <Typography variant="h6" className="text-center">Chief experts</Typography>
                </div>
                <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/3  lg:w-1/5">
                    <Typography
                        variant="h1"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]"
                    >
                        16
                    </Typography>
                    <Typography variant="h6" className="text-center">Years of experience</Typography>
                </div>
            </div>

            <div className="flex items-center  justify-center  mt-11">
                <div className="text-center w-1/2">
                    <Typography variant="h4" className="text-[#2F327D]">What is <span className="text-[#00CBB8]">EDUFLOW</span></Typography>
                    <Typography variant="small" className="font-light text-[15px] text-[#696984] mt-3">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-12 items-center justify-center">
                <div className="relative">
                    <img
                        src="https://media.gettyimages.com/id/1496098116/photo/a-happy-beautiful-blonde-businesswoman-looking-at-camera-while-holding-a-notebook.jpg?s=612x612&w=0&k=20&c=OZV1iAKpOgkUPq1L8GrhbMFfb0Yd3FM_cytwRPL39sU="
                        className="rounded-3xl h-72"
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="rounded-3xl text-white bg-white bg-opacity-20 h-14 border w-1/2 border-white px-4 py-2">
                            Start a class today
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="https://media.gettyimages.com/id/1430078498/photo/mature-adult-participants-discussing-in-teams-during-the-workshop.jpg?s=612x612&w=0&k=20&c=CzYnzv1ilv_VmfHWg82v5YWFLcuYeJD6VKN9RNm7w6I="
                        className="rounded-3xl h-72"
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="rounded-3xl text-white h-14 bg-[#23BDEE] w-1/2  px-4 py-2">
                            Start a course today
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row p-20">
                <div className="w-full lg:w-1/2 relative">
                    <div className="w-36 h-36 absolute left-16  bg-[#33EFA0]  rounded-full">
                    </div>
                    <div className="w-6 h-6 absolute top-2 left-52 bg-[#33D9EF] rounded-full">
                    </div>
                    <div className="bg-[#F56666] h-10 w-10 rounded-full absolute right-48 top-96 mt-24" ></div>
                    <div className="bg-[#5B61EB] w-48 h-48 rounded-full absolute right-0 top-80 "></div>
                    <div className="bg-[#F4F4F4] opacity-95 top-11 w-full absolute rounded-xl z-10 h-96 ">
                        <div className="bg-[#EAEAEA] h-6 w- p-2 gap-1 flex rounded-t-xl">
                            <div className="w-2 h-2 bg-[#EE6767] rounded-full">
                            </div>
                            <div className="w-2 h-2 bg-[#F6C566] rounded-full">
                            </div>
                            <div className="w-2 h-2 bg-[#5BEB7B] rounded-full">
                            </div>
                        </div>
                        <div className="absolute top-10 left-11">
                            <div className="p-12"><img src="https://images.pexels.com/photos/3727511/pexels-photo-3727511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-44 h-48 rounded-2xl" alt="" />
                                <div className="h-7 p-1 flex gap-2 ml-2 text-white text-[11px] bg-black bg-opacity-20 rounded-md w-3/5 absolute z-10 top-52">
                                    <GiNetworkBars className="opacity-100" />
                                    <span>Instructor</span>
                                    <span>Laura Nackson</span>
                                </div>
                            </div>
                            <div className="absolute  left-0 top-64  flex gap-6">
                                <button className="bg-[#3465E1] mt-1  w-28 h-10 gap-8 rounded-full text-white">Present</button>
                                <div className="relative w-32 h-11">
                                    <div className="absolute top-0 left-0 w-32 h-12 bg-[#E13468] opacity-30 rounded-full z-0"></div>
                                    <button className="relative z-10 top-1 left-2 bg-[#E13468] rounded-3xl w-28 h-10 text-white">
                                        Call
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex absolute top-10 left-80 gap-12 ">
                            <img src="https://imgs.search.brave.com/vqr0ugM7I0oR4u7GUBU4jQGB2aWtQ1fQu32ev6jVyEw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzAyLzUyLzM2/LzM2MF9GXzIwMjUy/MzY1Ml9OcUVNcDUw/SWtPUkxYbENtSlhx/Z3FSQkxNVzh4QkhN/UC5qcGc" className="w-32 mt-11 rounded-lg h-24" alt="" />
                            <div className="h-6 p-1 flex gap-2 ml-2 text-white text-[11px] bg-black bg-opacity-20 rounded-md w-4/3 absolute z-30 mt-3 top-60">
                                <GiNetworkBars className="opacity-100" />
                                <span>Laura Nackson</span>
                            </div>
                            <img src="https://imgs.search.brave.com/IDbN3DFv2FM_gwU9Hq9krnsvH2Xxve9nuLdhMVSs3HY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/MDQ0NDg3Ni9waG90/by9wb3NpdGl2ZS1h/c2lhbi10ZWFjaGVy/LW1hbi1zbWlsaW5n/LXdyaXRpbmctb24t/d2hpdGVib2FyZC1p/bi1jbGFzc3Jvb20u/anBnP2I9MSZzPTE3/MDY2N2Emdz0wJms9/MjAmYz0zdzFQMDJr/cXBpVzJXclpKbWVG/Mm5vT0l1V2ZXLTRS/WXBEM3BpclZMNENr/PQ" className="w-40 ml-4 rounded-lg h-28 mt-9" alt="" />
                            <div className="h-6 p-1 flex gap-2 ml-2 text-white text-[11px] bg-black bg-opacity-20 rounded-md w-4/3 absolute z-30 mt-4 top-24">
                                <GiNetworkBars className="opacity-100" />
                                <span>Sam Tard</span>
                            </div>
                        </div>

                        <div className="flex absolute top-56 z-20 left-80 gap-12">
                            <img src="https://imgs.search.brave.com/36yZCr_IL1El5a8BG8EH2_DyVTsVzCaYkk_QhYyu-uY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzc5Lzc3LzUy/LzM2MF9GXzE3OTc3/NTI0OV9tbGtKdElU/a0NRY2tHWjdMTUVW/WGljMENtcnZXZU5W/SC5qcGc" className="w-32 rounded-lg h-24 " alt="" />
                            <div className="h-6 p-1 flex gap-2  text-white text-[11px] bg-black bg-opacity-20 rounded-md w-4/3 absolute z-30    -right-7  -top-16">
                                <GiNetworkBars className="opacity-100" />
                                <span>Linan mark sam</span>
                            </div>
                            <img src="https://imgs.search.brave.com/OOJoCrl_dkxlR4L25op5QVPF7OOe0Wm75tjxOAE0_AQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbWlsaW5nLXRl/YWNoZXItZ3ltXzEw/MzA4NzktMTMwMzgx/LmpwZz9zaXplPTYy/NiZleHQ9anBn" className="w-52 object-cover rounded-lg mt-8 h-36" alt="" />
                            <div className="h-6 p-1 flex gap-2 ml-3 text-white text-[11px] bg-black bg-opacity-20 rounded-md w-4/3 absolute z-30 right-0 mt-2   top-36">
                                <GiNetworkBars className="opacity-100" />
                                <span>Dane Marker</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className=" w-full md:w-full lg:w-1/2 pt-20 pl-40 flex justify-end text-left">
                    <div>
                        <p className="text-2xl font-semibold text-[#2F327D] mb-4">
                            A <span className="text-[#00CBB8]">user interface</span> designed for the classroom
                        </p>
                        <div className="flex  mb-2 mt-3">
                            <FcDoughnutChart className=" text-2xl" /> {/* Adjust logo size */}
                            <Typography variant="small" className="ml-3 text-[15px] text-[#696984]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                        </div>

                        <div className="flex mb-2 mt-3">
                            <FcDoughnutChart className=" text-2xl" />
                            <Typography variant="small" className="ml-3 text-[15px] text-[#696984]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                        </div>

                        <div className="flex mt-3">
                            <FcDoughnutChart className="text-2xl" />
                            <Typography variant="small" className="ml-3 text-[15px] text-[#696984]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-[#161F3D] h-80 mt-40 t-40 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex gap-2  items-center justify-center">
                            <img src="./icon.png" className="w-4 h-4" alt="" />
                            <h2 className="text-lg  font-semibold ">EduFlow</h2>
                        </div>
                        <p className="text-[14px]">Virtual Class for Zoom</p>
                        <div className="mb-4">
                            <p className="mb-2">Subscribe to get our Newsletter</p>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border border-gray-300 rounded-full px-4 py-2 mr-2"
                            />
                            <button className="bg-[#00CBB8] rounded-full text-white py-2 px-4 ">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex space-x-4">
                            <a href="/careers" className="hover:underline">Careers</a>
                            <span>|</span>
                            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                            <span>|</span>
                            <a href="/terms" className="hover:underline">Terms & Conditions</a>
                        </div>
                        <p className="mt-4 text-sm">© 2021 Class Technologies Inc.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}


export default LandingPageFeatures;