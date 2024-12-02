import { Card, Typography, CardBody, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useSelector} from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
    selectStudent
} from "../../../../redux/reducers/studentSlice";
const ProfileCard = ({ onToggle ,isShowComponent}: { onToggle: () => void ,isShowComponent:Boolean }) => {

    const studentInfo = useSelector(selectStudent)?.studentDetails;
    const user = {
        name:studentInfo?.name,
        email:studentInfo?.email,
        mobile:studentInfo?.mobile,
        image:studentInfo?.profilePic?.url, // Replace with your image URL
    };
    const handleClick = () => {
        onToggle();
    };
    return (
        <>
            <Card className={`${isShowComponent ? "relative p-0 md:p-6 lg:p-6 lg:flex items-center w-full md:w-full justify-start lg:w-full md:hidden sm:hidden" : "relative p-0 md:p-6 w-full flex items-center justify-start"}`}>
                {/* Circles */}
                <motion.div
                    className="w-36 h-36 bg-[#49BBBD] bg-opacity-30 rounded-full absolute"
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                        x: [-10, 10, -10],  // Horizontal motion
                        y: [-10, 10, -10],  // Vertical motion
                        boxShadow: [
                            "0 0 0px rgba(73, 187, 189, 0.5)",
                            "0 0 15px rgba(73, 187, 189, 0.7)",
                            "0 0 0px rgba(73, 187, 189, 0.5)",
                        ],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    style={{ top: '50%', left: '5%' }}
                ></motion.div>
                <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                    x: [-10, 10, -10],  // Horizontal motion
                    y: [-10, 10, -10],  // Vertical motion
                    boxShadow: [
                        "0 0 0px rgba(238 ,100 ,91, 0.5)",
                        "0 0 15px rgba(238 ,100 ,91, 0.7)",
                        "0 0 0px rgba(238 ,100 ,91, 0.5)",
                    ],
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                 className="w-44 h-44 bg-[#EE645B] bg-opacity-30 rounded-full absolute" style={{ top: '5%', left: '20%' }}></motion.div>
                <motion.div initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                        x: [-10, 10, -10],  // Horizontal motion
                        y: [-10, 10, -10],  // Vertical motion
                        boxShadow: [
                            "0 0 0px rgba(244, 140, 6 , 0.5)",
                            "0 0 15px rgba(244 ,140, 6 , 0.7)",
                            "0 0 0px rgba(244, 140, 6 , 0.5)",
                        ],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }} className="md:w-52 w-36 h-36 md:h-52 bg-[#F48C06] bg-opacity-30 rounded-full absolute" style={{ top: '40%', left: '60%' }}></motion.div>
                <motion.div initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                        x: [-10, 10, -10],  // Horizontal motion
                        y: [-10, 10, -10],  // Vertical motion
                        boxShadow: [
                            "0 0 0px rgba(244 ,140, 6, 0.5)",
                            "0 0 15px rgba(244, 140, 6, 0.7)",
                            "0 0 0px rgba(244 ,140, 6, 0.5)",
                        ],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }} className="w-10 h-10 bg-[#F48C06] bg-opacity-30 rounded-full absolute" style={{ top: '50%', left: '25%' }}></motion.div>
                <motion.div initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                        x: [-10, 10, -10],  // Horizontal motion
                        y: [-10, 10, -10],  // Vertical motion
                        boxShadow: [
                            "0 0 0px rgba(238, 100 ,91, 0.5)",
                            "0 0 15px rgba(238, 100, 91, 0.7)",
                            "0 0 0px rgba(238, 100, 91, 0.5)",
                        ],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }} className="w-10 h-10 bg-[#EE645B] bg-opacity-30 rounded-full absolute" style={{ top: '60%', left: '50%' }}></motion.div>
                <Typography variant="h5" className="mb-6">
                    Profile
                </Typography>
                {/* Inner Card for User Info */}
                <Card className="md:w-1/2 w-full  lg:w-1/2 rounded-3xl h-auto">
                    <CardBody className="flex  flex-col items-center gap-y-2">
                        <img
                            src={user?.image}
                            alt={user?.name}
                            className="rounded-full mb-4 w-36 h-36 object-cover"
                        />
                        <Typography variant="h5" className="text-center">
                            Name: {user?.name}
                        </Typography>
                        <Typography variant="small" className="text-gray-600 text-center">
                            Email: {user?.email}
                        </Typography>
                        <Typography variant="small" className="text-gray-600 text-center">
                            Phone: {user?.mobile}
                        </Typography>
                        <Button onClick={handleClick} variant="filled" className="w-1/2  bg-[#49BBBD]">
                            Update Profiles
                        </Button>
                    </CardBody>
                </Card>
            </Card>
        </>
    )
}

export default ProfileCard;