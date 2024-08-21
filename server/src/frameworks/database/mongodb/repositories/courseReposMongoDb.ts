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


  const getCourseById = async (courseId: string) => {
    const course: CourseInterface | null = await Course.findOne({
      _id: new mongoose.Types.ObjectId(courseId)
    }).lean()                                               //lean() Mongoose skips the process of creating full Mongoose documents, making queries faster. making js plain objects to remove overhead
    return course;
  };


  return {
    addCourse,
    getAllCourse,
    getCourseByInstructorId,
    getCourseById
  };
};

export type CourseRepositoryMongoDbInterface = typeof courseRepositoryMongodb;
