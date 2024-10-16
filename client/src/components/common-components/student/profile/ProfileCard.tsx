import { Card, Typography, List, Input, ListItem, ListItemPrefix, CardBody, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
const ProfileCard = ({ onToggle ,isShowComponent}: { onToggle: () => void ,isShowComponent:Boolean }) => {
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        image: 'https://via.placeholder.com/100', // Replace with your image URL
    };
    const handleClick = () => {
        onToggle();
    };
    return (
        <>
            <Card className={`${isShowComponent ? "relative p-6 lg:w-full lg:block  md:hidden sm:hidden items-center":"relative p-6 w-full items-center"}`}>
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
                    }} className="w-52 h-52 bg-[#F48C06] bg-opacity-30 rounded-full absolute" style={{ top: '40%', left: '60%' }}></motion.div>
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
                <Card className="w-1/2 rounded-3xl h-auto">
                    <CardBody className="flex flex-col items-center gap-y-2">
                        <img
                            src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria-146x200.jpg"
                            alt={`${user.firstName} ${user.lastName}`}
                            className="rounded-full mb-4 w-36 h-36 object-cover"
                        />
                        <Typography variant="h5" className="text-center">
                            Name: {user.firstName} {user.lastName}
                        </Typography>
                        <Typography variant="small" className="text-gray-600 text-center">
                            Email: {user.email}
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