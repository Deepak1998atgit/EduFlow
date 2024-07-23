import React, { useState, useEffect } from 'react';
import CourseCard from './course-card';
import { CourseInterface } from "../../../types/course";
import {
  getAllCourses
} from "../../../api/endpoints/course/Course";
import { toast } from "react-toastify";
import ShimmerCard from '../shimmer/shimmer-card';
import { MdSentimentDissatisfied } from "react-icons/md";
import { Link } from "react-router-dom";
const ListCourse: React.FC = () => {
  const [courses, setCourses] = useState<CourseInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchCourse = async () => {
    try {
      const courses = await getAllCourses();
      setCourses(courses?.data?.data || []);
      setTimeout(() => {
        setIsLoading(false);
      }, 9000);
    } catch (error: any) {
      toast.error(error?.data?.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setIsLoading(false);
    }
  };
  console.log("course", courses, "courses")
  useEffect(() => {
    fetchCourse();
  }, []);
  if (isLoading) {
    return (
      <div className='mx-auto flex  flex-wrap justify-center'>
        <div className='w-10/12 '>
          <div className='flex mt-3 justify-center'>
            {[...Array(4)].map((_, index) => (
              <div className='m-2 py-3' key={index}>
                <ShimmerCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className='container w-screen flex justify-center items-center'>
      {courses.length ? (
        < div className=' w-full flex flex-wrap'>
          {
            courses?.map((course: CourseInterface, index: number) => (
              <div className='w-screen   xl:w-1/3  md:w-1/2 flex items-center justify-center'>
                <Link to={course._id} key={course._id} className=''>
                  <CourseCard {...course} />
                </Link>
              </div>
            ))
          }
        </div>
      ) : (
        <div className='text-center pt-8 pb-14 mt-8'>
          <MdSentimentDissatisfied
            className='mx-auto text-gray-500 mb-4'
            size={38}
          />
          <p className='text-gray-500 text-sm'>
            No results found for the search query.
          </p>
        </div>
      )}
    </section>
  );
};

export default ListCourse;
