import Course from '../models/course';

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



  return {
    addCourse,
    getAllCourse
  };
};

export type CourseRepositoryMongoDbInterface = typeof courseRepositoryMongodb;
