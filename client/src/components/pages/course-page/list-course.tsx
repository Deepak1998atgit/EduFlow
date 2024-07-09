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
      }, 1000);
    } catch (error: any) {
      toast.error(error?.data?.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setIsLoading(false);
    }
  };
  console.log("course",courses,"courses")
  useEffect(() => {
    fetchCourse();
  }, []);
  if (isLoading) {
    return (
      <div className='text-customFontColorBlack  '>
        <div className='pt-5 pb-5 pl-9 pr-9 mt-5 mx-auto flex justify-center'>
          <div className='w-10/12 ml-2 pl-1 animate-pulse'>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 h-8 rounded'></h1>
            <p className='text-gray-700 mt-2 bg-gradient-to-r from-gray-300 to-gray-100 h-4 rounded'></p>
          </div>
        </div>
        <div className='mx-auto pl-10 pr-10  flex justify-center'>
          <div className='w-10/12 pl-1 border-b-gray-100 border-b-2 mx-auto animate-pulse'>
            <div className='flex flex-wrap'>
              <div className='text-gray-900 rounded-lg px-2 py-2 mr-2 mb-2 cursor-pointer bg-gradient-to-r from-gray-300 to-gray-100 h-8 w-16'></div>
              <div className='text-gray-900 rounded-lg px-4 py-2 mr-2 mb-2 cursor-pointer bg-gradient-to-r from-gray-300 to-gray-100 h-8 w-24'></div>
              <div className='text-gray-900 rounded-lg px-4 py-2 mr-2 mb-2 cursor-pointer bg-gradient-to-r from-gray-300 to-gray-100 h-8 w-20'></div>
              <div className='text-gray-900 rounded-lg px-4 py-2 mr-2 mb-2 cursor-pointer bg-gradient-to-r from-gray-300 to-gray-100 h-8 w-24'></div>
            </div>
          </div>
        </div>

        <div className=' mx-auto flex justify-center'>
          <div className='w-10/12 '>
            <div className='flex mt-3 flex-wrap justify-center'>
              {[...Array(8)].map((_, index) => (
                <div className='m-2 py-3' key={index}>
                  <ShimmerCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {courses.length ? (
        courses?.map((course: CourseInterface, index: number) => (
          <Link to={course._id} key={course._id} className='mt-5'>
            <div className='m-2'>
              <CourseCard {...course} />
            </div>
          </Link>
        ))
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
    </>
  );
};

export default ListCourse;
