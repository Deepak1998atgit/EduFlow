import { FaPlay, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { toast } from "react-toastify";
import useApiData from "@/hooks/useApiCall";
import { useParams } from "react-router-dom";
import { CourseInterface } from "@/types/course";
import { getIndividualCourse } from "@/api/endpoints/course/Course";
import { getLessonsByCourse } from "../../../api/endpoints/course/lesson";
const ViewCourseStudent: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false)
    const params = useParams();
    const courseId: string | undefined = params.courseId;
    const fetchCourse = async (courseId: string): Promise<CourseInterface> => {
        try {
            const course = await getIndividualCourse(courseId);
            return course?.data?.data as CourseInterface;
        } catch (error: any) {
            toast.error(error.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            throw error;
        }
    };

    const fetchLessons = async (courseId: string) => {
        try {
            const lessons = await getLessonsByCourse(courseId);
            return lessons.data;
        } catch (error: any) {
            toast.error(error.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            throw error;
        }
    };
    console.log("courseId",courseId,"courseId")
    const { data, isLoading, refreshData } = useApiData(fetchCourse, courseId);
    const { data: lessons, isLoading: isLessonsLoading } = useApiData(
        fetchLessons,
        courseId
    );
    console.log("data of lesson","course",data,"course")
    const course: CourseInterface | null = data;
    const randomArrayGeneratorForLesson = Array.from({ length: 7 }, (_, index) => index);
    const itemVariants: Variants = {
        open: {
            padding: 13,
            height: "10rem",
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: {
            height: 0,
            opacity: 0,
            y: 20,
            transition: { duration: 0.2 }
        }
    };
    const StarRating = ({ enableTransition }: { enableTransition: boolean }) => {
        const [rating, setRating] = useState<number>(0);
        const [time, setTime] = useState<number>(500)
        useEffect(() => {
            const timer = setTimeout(() => {
                if (rating < 5) {
                    setRating(rating + 1);
                    setTime(500)
                    rating === 4 ? setTime(6500) : setTime(500)
                } else {
                    setRating(0);
                }
            }, time);
            return () => clearTimeout(timer)
        }, [rating])
        const pulseAnimation = {
            scale: [1, 1.5, 1],
            transition: { duration: 1, repeat: Infinity, repeatDelay: 2 }
        };
        const stars = Array.from({ length: 5 }, (_, index) => (
            <motion.div
                animate={index < rating ? pulseAnimation : { scale: 1 }}
            >
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block"
                    viewBox="0 0 24 24"
                    stroke="#F7DC6F"
                    fill={index < rating ? "#F7DC6F" : enableTransition ? "none" : "#F7DC6F"}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z" />
                </svg>
            </motion.div>
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
            <section className="w-full lg:flex p-10  md:flex-row lg:h-72 gap-2">
                <div className="sm:w-full mb-7 lg:w-1/2 h-full lg:relative ">
                    <h3 className="flex items-center font-bold">Category <i><FaAngleRight /></i> WebDevelopment </h3>
                    <h3 className="h3 lg:absolute lg:left-">React - The Complete Guide 2024 (incl. Next.js, Redux)</h3>
                    <div className="lg:absolute  lg:right-0 lg:top-16"><StarRating enableTransition={true} /></div>
                    <div className="left-12 mt-4 lg:left-0   lg:items-start items-center lg:mt-16 flex flex-row lg:flex-col   gap-1 lg:w-1/5">
                        <h5 className="h2 lg:left-0">4.5</h5>
                        <StarRating enableTransition={false} />
                        <p className="customfont">46 Ratings</p>
                    </div>
                    <button>sh</button>
                    <div className=" lg:absolute text-right customfontforsmallheadding  right-0 bottom-0 text-black">
                        <p >Duraton:25 Min</p>
                        <p>Language:English</p>
                    </div>
                </div>
                <aside className="w-full   flex-col justify-center items-center  lg:justify-start  lg:items-start  lg:w-1/2  lg:pt-7">
                    <figure className="w-full">
                        <div className="relative flex flex-col items-center justify-center">
                            <div className="relative lg:w-4/6 md:w-1/2  z-10 rounded-t-lg">
                                <video ref={videoRef} controls className="w-full    z-10 rounded-t-lg" >
                                    <source src="https://videocdn.cdnpk.net/videos/cebe11b1-e085-4f12-9374-3fe8f8d95501/horizontal/previews/videvo_watermarked/large.mp4" type="video/mp4" />
                                    Your Browser does not support the Video
                                </video>
                                <div className="absolute  inset-0 flex flex-col items-center justify-center">
                                    <button onClick={handlePlayandPauseOnVideo} className="h-20 w-20 z-20 bg-white  opacity-80 text-black flex items-center justify-center rounded-full">
                                        <i>
                                            <FaPlay size={35} />
                                        </i>
                                    </button>
                                    <p className="text-white font-bold">Preview This Course</p>
                                </div>
                            </div>

                            <div className="h-32 relative rounded-bl-xl  border border-[#D6EFD8] pt-3 bg-[#f9f9f9] w-full md:w-1/2 lg:w-4/6">
                                <div className="ml-2 text-sm  font-thin flex  w-full  leading-9">
                                    <div className="w-full flex gap-6
                                ">
                                        <p><span className="customfontforsmallheadding">Ana James</span></p>
                                        <p> <span className="customfontforsmallheadding">21/7/2024</span></p>
                                    </div>
                                    <div className="text-right underline text-sm font-semibold text-[#78A793] mr-6 w-1/2">
                                        <p>FREE</p>
                                    </div>
                                </div><div className="flex items-center justify-center w-full">
                                    <button
                                        className="bg-[#B1E1B5] h-10  absolute bottom-0  w-2/3"><span className="text-sm font-light">ENROLL NOW</span></button>
                                </div>
                                <div className="absolute -bottom-2 -left-2 w-4/5  -z-10 rounded-xl bg-[#D6EFD8] h-52">
                                </div>
                            </div>
                        </div>
                    </figure>
                </aside>

            </section>
            <div className="lg:w-1/2 mt-3  flex flex-col pr-8 pl-8 justify-between">
                <h4 className="font-semibold w-full text-center h-11   bg-[#B1E1B5] flex items-center justify-center">DETAILS</h4>
                <p className="text-justify p-4 border border-[#B1E1B5]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="w-full pt-7 pl-8">
                <h2 className="text-2xl font-medium">LESSONS</h2>
                {
                    randomArrayGeneratorForLesson.map((_, index) => (
                        <div className="lg:w-5/6">
                            <motion.div
                                initial={false}
                                animate={isOpen ? "open" : "closed"}
                                className="menu pr-6"
                                key={index}
                            >
                                <motion.button
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => { handleOpenlist(index) }}
                                    className="w-full  text-left flex h-10 border border-[#EAEEEB] justify-center items-center rounded-xl gap-4"

                                >
                                    <motion.div
                                        variants={{
                                            open: { rotate: isOpen && isOpenIndex === index ? 180 : 0 },
                                            closed: { rotate: 0 }
                                        }}
                                        transition={{ duration: 0.4 }}
                                        style={{ originY: 0.55 }}
                                        key={index}
                                        className="w-4 font-bold"
                                    >
                                        <FaAngleUp />
                                    </motion.div>
                                    <span className="font-medium ">LESSON {index + 1}</span>
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
                                    <motion.li key={index} className="border shadow-lg text-justify " variants={itemVariants}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</motion.li>
                                </motion.ul>
                            </motion.div>
                        </div>

                    ))
                }
            </div>
            <div className="w-full   lg:flex p-8">
                <div className="lg:w-1/2 mb-7 h:10 lg:h-16 border border-[#969BA2] text-start">
                    <textarea
                        className="w-full h-full box-border  focus:outline-none pt-4 pl-3"
                        placeholder="Write a review"
                        rows={4}
                    />
                </div>
                <div className="lg:w-1/3 flex rounded-full md:rounded-none items-center bg-[#969BA2] justify-center h-16  lg:h-16">
                    <StarRating enableTransition={false} />
                </div>

            </div>
            {lessons.map((lesson: any) => {
                return (
                    <div
                        
                        key={lesson._id}
                    >
                        {lesson._id}
                        <li className='p-6 border-b flex items-center cursor-pointer hover:bg-customBlueShade'>
                            <span className='mr-2 text-blue-500' />
                            <span className='flex-1'>{lesson.title}</span>
                        </li>
                    </div>
                );
            })}
        </main>
    )
}


export default ViewCourseStudent;