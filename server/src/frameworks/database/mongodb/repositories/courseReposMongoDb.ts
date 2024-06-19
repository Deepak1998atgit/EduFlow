import Course from '../models/course';
import mongoose, { FilterQuery } from 'mongoose';
import Students from '../models/student';
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



  return {
    addCourse,
  };
};

export type CourseRepositoryMongoDbInterface = typeof courseRepositoryMongodb;
