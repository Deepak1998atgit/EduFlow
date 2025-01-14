import { FaPlay, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { FcComboChart, FcCustomerSupport, FcSpeaker } from "react-icons/fc";
import { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { toast } from "react-toastify";
import useApiData from "@/hooks/useApiCall";
import { useParams } from "react-router-dom";
import { CourseInterface } from "@/types/course";
import { getIndividualCourse } from "@/api/endpoints/course/Course";
import { getLessonsByCourse } from "../../../api/endpoints/course/lesson";
import { useSelector, useDispatch } from "react-redux";
import { setCourse } from "@/redux/reducers/courseSlice";
import { getIndividualInstructors } from "@/api/endpoints/instructor-management";
import useTimeAgo from "@/hooks/useTimeAgo";
import { selectIsLoggedIn } from "../../../redux/reducers/authSlice";
import { selectStudentId } from "../../../redux/reducers/studentSlice";
import {useNavigate} from "react-router-dom"
const ViewCourseStudent: React.FC = () => {
    const navigate=useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);
    const dispatch = useDispatch();
    const studentId = useSelector(selectStudentId);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const calculateTimeAgo = useTimeAgo();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);
    const [loginConfirmation, setLoginConfirmation] = useState(false);
    const [openPaymentConfirmation, setOpenPaymentConfirmation]=useState<boolean>(false);
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
    const handleEnroll = () => {
        if (!isLoggedIn) {
          setLoginConfirmation(true);
          alert("not logged in please log in");
        } else {
          setOpenPaymentConfirmation(true);
        }
      };
    console.log("courseId", courseId, "courseId")
    const { data, isLoading, refreshData } = useApiData(fetchCourse, courseId);
    const { data: lessons, isLoading: isLessonsLoading } = useApiData(
        fetchLessons,
        courseId
    );
    console.log("data of lesson", "coursejj", lessons, "course")
    const course: CourseInterface | null = data;
    const enrolled = course?.coursesEnrolled.includes(studentId ?? "");
    course && dispatch(setCourse({ course }));
    const instructorId: string | undefined = course?.instructorId;
    const fetchInstructorDetails = async (instructorId: string) => {
        try {
            if (instructorId) {
                const instructor = await getIndividualInstructors(instructorId);
                return instructor?.data;
            }
        } catch (error: any) {
            toast.error(error.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            throw error;
        }
    }
    const { data: instructor, isLoading: isfetchInstructorLoading } = useApiData(
        fetchInstructorDetails,
        instructorId
    );
    console.log("instructor", instructor, "instructor",studentId,isLoggedIn)
    // const randomArrayGeneratorForLesson = Array.from({ length:lessons.length }, (_, index) => index);
    const itemVariants: Variants = {
        open: {
            padding: "1rem",
            height: "8rem",
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
                duration: 0.5,
            }
        },
        closed: {
            height: 0,
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.3,
            }
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
            videoRef?.current?.requestFullscreen();

        } else {
            videoRef?.current?.pause();
        }
        setIsPlaying(!isPlaying);
    }
    const handleOpenlist = (index: number) => {
        setIsOpen(!isOpen);
        setIsOpenIndex(index);
    }
    if (isLessonsLoading || isfetchInstructorLoading) {
        return <div>Loading datas...</div>;
    }
    if (!lessons || lessons.length === 0 || !instructor || instructor?.length === 0) {
        return <div>No datas available</div>;
    }
    openPaymentConfirmation && course?.isPaid && navigate(`/course/${courseId}/payment`);
    return (
        <main className="w-full pt-20">
            <section className="w-full lg:flex p-10  md:flex-row lg:h-72 gap-2">
                <div className="sm:w-full mb-7 lg:w-1/2 h-full lg:relative ">
                    <h3 className="flex items-center font-bold">Category <i><FaAngleRight /></i> {course?.category} </h3>
                    <h3 className="h3 lg:absolute lg:left-">{course?.title}</h3>
                    <div className="lg:absolute  lg:right-0 lg:top-16"><StarRating enableTransition={true} /></div>
                    <div className="left-12 mt-4 lg:left-0   lg:items-start items-center lg:mt-16 flex flex-row lg:flex-col   gap-1 lg:w-1/5">
                        <h5 className="h2 lg:left-0">4.5</h5>
                        <StarRating enableTransition={false} />
                        <p className="customfont">46 Ratings</p>
                    </div>
                    <div className=" lg:absolute text-right customfontforsmallheadding  right-0 bottom-0 text-black">
                        <p >Duraton:{course?.duration}Weeks</p>
                        <p>Language:English</p>

                    </div>
                </div>
                <aside className="w-full   flex-col justify-center items-center  lg:justify-start  lg:items-start  lg:w-1/2  lg:pt-7">
                    <figure className="w-full">
                        <div className="relative flex flex-col items-center justify-center">
                            <div className="relative lg:w-4/6 md:w-1/2  z-10 rounded-t-lg">
                                <video ref={videoRef} controls className="w-full    z-10 rounded-t-lg" >
                                    <source src={course?.introduction?.url} type="video/mp4" />
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
                            <div className="h-40 relative rounded-bl-xl  border border-[#D6EFD8] pt-3 bg-[#f9f9f9] w-full md:w-1/2 lg:w-4/6">
                                <div className="ml-2 text-base  font-light flex  w-full  leading-9">
                                    <div className="w-full flex mt-3 gap-1
                                ">
                                        <p><span className="customfontforsmallheadding flex gap-1"><FcCustomerSupport />{instructor ? `${instructor?.data?.firstName} ${instructor?.data?.lastName}`: null}</span></p>
                                        <p> <span className="customfontforsmallheadding gap-1 flex"><FcSpeaker />{calculateTimeAgo(course?.createdAt as string)}</span></p>
                                        <p> <span className="customfontforsmallheadding "><span className="flex gap-1"><FcComboChart />{course?.level}</span></span></p>

                                    </div>
                                    <div className="text-right underline text-sm font-semibold text-[#78A793] mr-6 w-1/2">
                                        <p>{course?.isPaid ? "PAID" : "FREE"}</p>
                                    </div>
                                </div>
                                <p className="w-full flex items-end justify-end pr-3"><span className="ml-2 mt-4 h3">{course?.price}/-</span></p>
                                <div className="flex items-center justify-center w-full">
                                    <button
                                        disabled={enrolled}
                                        onClick={handleEnroll}
                                        className="bg-[#B1E1B5] h-10  absolute bottom-0  w-2/3"><span className="text-sm font-light">{enrolled ? 'ENROLLED' : 'ENROLL NOW'}</span></button>
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
                    {course?.description}
                </p>
            </div>
            <div className="w-full pt-7 pl-8">
                <h2 className="text-2xl font-medium">LESSONS</h2>
                {
                    lessons.map((lesson: any, index: number) => (
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
                                    <span className="font-medium "> {course?.syllabus[index]}</span>
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
                                    animate={isOpen && isOpenIndex === index ? "open" : "closed"}>
                                    <motion.li key={index} className="border overflow-hidden transition-max-height shadow-lg text-justify" variants={itemVariants}>{lesson?.about}</motion.li>
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
        </main>
    )
}


export default ViewCourseStudent;