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
    console.log("hh")
    const course: CourseInterface | null = await Course.findOne({
      _id: new mongoose.Types.ObjectId(courseId)
    }).lean()
    console.log("hh", course)                                              //lean() Mongoose skips the process of creating full Mongoose documents, making queries faster. making js plain objects to remove overhead
    return course;
  };


  const deleteCourseById = async (courseId: string) => {
    const course: CourseInterface | null = await Course.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(courseId)
    })

  }


  const getAmountByCourseId = async (courseId: string) => {
    const amount = await Course.findOne(
      { _id: new mongoose.Types.ObjectId(courseId) },
      { price: 1 }
    );
    return amount;
  };


  const enrollStudent = async (courseId: string, studentId: string) => {
    const response = await Course.updateOne(
      { _id: new mongoose.Types.ObjectId(courseId) },
      { $push: { coursesEnrolled: studentId } }
    );
    return response;
  };


  const getStudentsByCourseForInstructor = async (instructorId: string) => {
    const students = await Course.aggregate([
      {
        $match: { instructorId: new mongoose.Types.ObjectId(instructorId) }
      },
      {
        $unwind: '$coursesEnrolled'
      },
      {
        $lookup: {
          from: 'students',
          localField: 'coursesEnrolled',
          foreignField: '_id',
          as: 'studentDetails'
        }
      },
      {
        $project: {
          student: { $arrayElemAt: ['$studentDetails', 0] },
          courseName: '$title'
        }
      },
      {
        $group: {
          _id: '$student._id',
          course: { $first: '$courseName' },
          name: { $first: '$student.name' },
          email: { $first: '$student.email' },
          mobile: { $first: '$student.mobile' },
          dateJoined: { $first: '$student.dateJoined' },
          isBlocked: { $first: '$student.isBlocked' },
          profilePic: { $first: '$student.profilePic' },
          // isGoogleUser: { $first: '$student.isGoogleUser' }
        }
      }
    ]);
    return students;
  };

  const getCourseByStudent = async (id: string) => {
    const courses: CourseInterface[] | null = await Course.find({
      coursesEnrolled: {
        $in: [new mongoose.Types.ObjectId(id)]
      }
    });
    return courses;
  };


  return {
    addCourse,
    getAllCourse,
    getCourseByInstructorId,
    getCourseById,
    deleteCourseById,
    getAmountByCourseId,
    enrollStudent,
    getStudentsByCourseForInstructor,
    getCourseByStudent
  };
};

export type CourseRepositoryMongoDbInterface = typeof courseRepositoryMongodb;
