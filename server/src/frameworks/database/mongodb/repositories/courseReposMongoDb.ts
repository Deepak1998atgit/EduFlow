import Course from '../models/course';
import mongoose from 'mongoose';

import {
  AddCourseInfoInterface,
  CourseInterface
} from '@src/types/courseInterface';

export const courseRepositoryMongodb = () => {
  const addCourse = async (courseInfo: AddCourseInfoInterface) => {
    const newCourse = new Course(courseInfo);
    newCourse.price ? (newCourse.isPaid = true) : (newCourse.isPaid = false);
    const { _id: courseId } = await newCourse.save();
    return courseId;
  };


  const getAllCourse = async () => {
    const courses: CourseInterface[] | null = await Course.find({});
    return courses;
  };


  const getCourseByInstructorId = async (instructorId: string) => {
    const courses = await Course.find({
      instructorId: new mongoose.Types.ObjectId(instructorId)
    });
    return courses;
  };


  return {
    addCourse,
    getAllCourse,
    getCourseByInstructorId
  };
};

export type CourseRepositoryMongoDbInterface = typeof courseRepositoryMongodb;
