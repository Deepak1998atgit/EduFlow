import React, { useEffect, useState } from "react";
import { CourseInterface } from "@/types/course";
import ShimmerCard from "../shimmer/shimmer-card";
import useTimeAgo from "@/hooks/useTimeAgo";
import {
    ExclamationCircleIcon
} from "@heroicons/react/24/outline";
import {
    PencilIcon,
    TrashIcon,
    SquaresPlusIcon,
    ClockIcon
} from "@heroicons/react/24/solid";
import {
    Card,
    Typography,
    CardBody,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import { getCourseByInstructor } from "@/api/endpoints/course/course";
import { deleteCourse } from "@/api/endpoints/course/course";
import { Link } from "react-router-dom";
import usePagination from "../../../hooks/usePagination";
import useSearch from "../../../hooks/useSearch";
interface PropsInterface {
    subSideBar: string; // The 'data' prop should be a string
}
const ListCourseForInstructors: React.FC<PropsInterface> = ({ subSideBar }) => {
    const [courses, setCourses] = useState<CourseInterface[] | any>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredData, setFilteredData] = useState<CourseInterface[] | any>([]);
    const [loading, setLoading] = useState<boolean>(true); // Add loading state
    const {
        currentPage,
        totalPages,
        currentData,
        goToPage,
        goToPreviousPage,
        goToNextPage,
    } = usePagination(filteredData, 3);

    const pages = [];
    const visiblePages = 5;
    // Calculate range of pages to show (for example: 1-5, 2-6)
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            goToPage(page);
        }
    }
    const calculateTimeAgo = useTimeAgo();
    console.log("courses", courses)
    const searchResult = useSearch(courses, searchQuery);

    const fetData = async () => {
        const response = await getCourseByInstructor();
        setCourses(response.data);
        setLoading(false);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    const handleDeleteCourse = async (courseId: string) => {
        console.log("Deleting course with ID:", courseId);
        try {
            const response = await deleteCourse(courseId);  
            if (response) { 
                setCourses((prevCourses: CourseInterface[]) =>
                    prevCourses.filter((course) => course._id !== courseId)
                );
            } else {
                console.error("Failed to delete the course");
            }
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    }
    useEffect(() => {
        fetData();
    }, []);

    let displayData: CourseInterface[] | any = searchQuery !== ""
        ? searchResult
        : currentData;
    useEffect(() => {
        const filterCourses = () => {
            setLoading(true);
            if (searchQuery !== "") {
                return searchResult;
            }
            switch (subSideBar) {
                case "Active Courses":
                    return courses.filter((course: any) => course?.isVerified === true);
                case "Passive Courses":
                    return courses.filter((course: any) => course?.isVerified === false);
                case "All Courses":
                default:
                    return courses;
            }
        };
        setFilteredData(filterCourses());
        setTimeout(() => { setLoading(false); }, 1000)
    }, [searchQuery, subSideBar, courses]);


    return (
        <div className="col-span-9">
            <div className={`flex  ${totalPages === 2 || 1 ? " justify-start" : " justify-center items-center"}w-full`}>
                {loading ? (
                    // Shimmer loading effect when data is being fetched
                    <div className="flex p-4 h-[75vh] gap-2 flex-wrap">
                        <ShimmerCard />
                        <ShimmerCard />
                        <ShimmerCard />
                    </div>
                ) : displayData.length > 0 ? (
                    displayData?.map(
                        ({ _id, title, thumbnailUrl, category, createdAt, isVerified }: CourseInterface, index: number) => {
                            return (
                                <Card key={_id} className="w-1/4 h-[70vh] shadow-lg rounded-lg m-4">
                                    {/* Image Section */}
                                    <img
                                        src={thumbnailUrl}
                                        alt="Course Thumbnail"
                                        className="w-full h-40 rounded-t-lg border-black object-cover"
                                    />
                                    <CardBody className="p-4">
                                        {/* Tag and Duration */}
                                        <div className="flex items-center justify-between text-gray-500 space-x-2 text-sm">
                                            <div className="flex items-center gap-1 justify-between">
                                                <div className="flex gap-1">
                                                    <Tooltip content="Add lessons">
                                                        <Link to={`/instructor/view-lessons/${_id}`}>
                                                            <SquaresPlusIcon className="h-4 w-4" />
                                                        </Link>
                                                    </Tooltip>
                                                    <Tooltip content="Edit course">
                                                        <Link to={`/instructors/edit-course/${_id}`}>
                                                            <PencilIcon className="h-4 w-4" />
                                                        </Link>
                                                    </Tooltip>
                                                    <Tooltip content="Delete course">
                                                        <TrashIcon
                                                            onClick={() => { handleDeleteCourse(_id) }}
                                                            className="h-4 w-4 text-red-500" />
                                                    </Tooltip>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 justify-between">
                                                <Tooltip content="course added">
                                                    <ClockIcon className="h-4 w-4" />
                                                </Tooltip>
                                                <span>{calculateTimeAgo(createdAt)}</span>
                                            </div>
                                        </div>
                                        {/* Course Title */}
                                        <Typography variant="h6" color="blue-gray" className="font-semibold mt-2">
                                            {title}
                                        </Typography>
                                        {/* Description */}
                                        <Typography color="gray" className="text-sm mt-1">
                                            {category}
                                        </Typography>
                                        {/* Author and Price */}
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center space-x-2">
                                                <Avatar
                                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnRzfGVufDB8fDB8fHww"
                                                    alt="Author"
                                                    size="sm"
                                                />
                                                <span className="text-sm font-medium">sam</span>
                                            </div>
                                            <div className="flex items-center text-[12px] space-x-2">
                                                {isVerified ? (
                                                    <>
                                                        <span className="text-gray-400 line-through">Pending</span>
                                                        <span className="text-green-500 font-semibold">Active</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="text-gray-400 line-through">Active</span>
                                                        <span className="text-yellow-500 font-semibold">Pending</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            );
                        }
                    )
                ) : (
                    <div className="flex items-center justify-center gap-2">
                        <ExclamationCircleIcon className="h-6 w-6 text-blue-gray-400" />
                        <Typography variant="h6" color="blue-gray">
                            No results found for your search query.
                        </Typography>
                    </div>
                )}
            </div>
            <div className="flex w-full px-44 items-center justify-end space-x-1">
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className=" border border-slate-300 py-6 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                    Prev
                </button>
                {/* Page Buttons */}
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className="min-w-9  border border-slate-300 py-6 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="min-w-9  border border-slate-300 py-6 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                    Next
                </button>
            </div>
        </div>
    );
};
export default ListCourseForInstructors;
