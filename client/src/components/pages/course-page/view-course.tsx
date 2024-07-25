import { FaIcons, FaPause, FaPlay, FaAngleRight } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
const ViewCourseStudent: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);
    const [isOpen,setIsOpen] =useState(false)
    const randomArrayGeneratorForLesson = Array.from({ length: 7 }, (_, index) => index);
    const itemVariants: Variants = {
        open: {
            height:"auto",
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { height: 0, opacity: 0, y: 20, transition: { duration: 0.2 } }
    };
    const StarRating = () => {

        const stars = Array.from({ length: 5 }, (_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 24 24" stroke="#F7DC6F" fill=" #F7DC6F">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z" />
            </svg>
        ));
        return (
            <div className="flex">
                {stars}
            </div>
        );

    };
    const handlePlayandPauseOnVideo = () => {
        if (isPlaying) {
            videoRef?.current?.play()
        } else {
            videoRef?.current?.pause();
        }
        setIsPlaying(!isPlaying);
    }

    const handleOpenlist = (index: number) => {
        setIsOpen(!isOpen);
        setIsOpenIndex(index); 
    }
    return (
        <main className="w-full pt-20">
            <section className="w-full flex p-10 flex-row bg-[#fdfdfd] h-72 gap-2">
                <div className="w-1/2 h-full relative">
                    <h3 className="flex items-center font-bold  ">Category <i><FaAngleRight /></i> WebDevelopment </h3>
                    <h3 className="h3 absolute left-0 top-7">React - The Complete Guide 2024 (incl. Next.js, Redux)</h3>
                    <div className="absolute left-0 top-16"> <StarRating /></div>
                    <div className=" absolute text-right text-sm  right-0 bottom-0 text-black">
                        <p>Duraton:25 Min</p>
                        <p>Language:English</p>
                    </div>
                </div>
                <aside className="w-1/2 pt-24">
                    <figure className="relative ">
                        <video ref={videoRef} controls className="w-96" >
                            <source src="https://videocdn.cdnpk.net/videos/cebe11b1-e085-4f12-9374-3fe8f8d95501/horizontal/previews/videvo_watermarked/large.mp4" type="video/mp4" />
                            Your Browser does not support the Video
                        </video>
                        <div className="absolute top-20  left-28  flex flex-col items-center justify-center">
                            <button onClick={handlePlayandPauseOnVideo} className="h-14 w-14  bg-white  opacity-80 text-black flex items-center justify-center rounded-full">
                                <i>
                                    <FaPlay />
                                </i>
                            </button>
                            <p className="text-white font-bold">Preview This Course</p>
                        </div>
                        <div className="h-36 relative shadow-md border border-[#D6EFD8] pt-5 bg-[#f9f9f9] w-96">

                            <div className="ml-2 text-sm  font-thin flex w-full  leading-9">
                                <div className="w-1/2 
                                ">
                                    <p>CREATER: <span className=" font-semibold">Ana James</span></p>
                                    <p>PUBLISHED ON: <span className="font-semibold">21/7/2024</span></p>
                                </div>
                                <div className="text-right underline text-sm font-semibold text-[#78A793] mr-6 w-1/2">
                                    <p>FREE</p>
                                </div>
                            </div>
                            <button className="bg-[#D6EFD8] h-10  absolute bottom-0 left-24 w-48"><span className="text-sm font-light">ENROLL NOW</span></button>
                        </div>
                    </figure>
                </aside>

            </section>
            <div className="w-1/2 mt-3 flex flex-col pr-8 pl-8 justify-between">
                <h4 className="font-semibold w-full text-center  bg-[#D6EFD8] flex items-center justify-center mb-4">DETAILS</h4>
                <p className="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            {
                randomArrayGeneratorForLesson.map((_, index) => (
                    <div className="w-5/6">
                        <motion.div
                            initial={false}
                            animate={isOpen? "open" : "closed"}
                            className="menu pr-6 "
                            key={index}
                        >
                            <motion.button
                                whileTap={{ scale: 0.97 }}
                                onClick={() => {handleOpenlist(index)}}
                                className="w-full bg-slate-400  "
                                
                            >
                                Menu
                                <motion.div
                                    variants={{
                                        open: { rotate: 180 },
                                        closed: { rotate: 0 }
                                    }}
                                    transition={{ duration: 0.2 }}
                                    style={{ originY: 0.55 }}
                                >
                                </motion.div>
                            </motion.button>
                            <motion.ul
                                variants={{
                                    open: {
                                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                                        transition: {
                                            type: "spring",
                                            bounce: 0,
                                            duration: 0.7,
                                            delayChildren: 0.3,
                                            staggerChildren: 0.05
                                        }
                                    },
                                    closed: {
                                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                                        transition: {
                                            type: "spring",
                                            bounce: 0,
                                            duration: 0.3
                                        }
                                    }
                                }}
                                animate={isOpen && isOpenIndex === index ? "open" : "closed"}
                                    // style={{ overflow: "hidden", pointerEvents: isOpen? "auto" : "none" }}
                            >
                                <motion.li key={index} className="bg-slate-400" variants={itemVariants}>Item 1sgggggggggggggggggggggggg</motion.li>
                            </motion.ul>
                        </motion.div>
                    </div>

                ))
            }

        </main>
    )
}


export default ViewCourseStudent;