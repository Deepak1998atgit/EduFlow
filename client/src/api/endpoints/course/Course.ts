import END_POINTS from "../../../constants/endPoints";
import {
  addCourseService,
  getAllCoursesService,
  getCoursesByInstructorService,
  getIndividualCourseService,
  deleteCourseByIdService,
  enrollStudentService
} from "../../services/course/course-service";
import { PaymentIntent } from "@stripe/stripe-js";


export const addCourse = (courseInfo: FormData) => {
  console.log("courseinfo", courseInfo)
  return addCourseService(END_POINTS.ADD_COURSE, courseInfo);
};


export const getAllCourses = () => {
  return getAllCoursesService(END_POINTS.GET_ALL_COURSES);
};


export const getCourseByInstructor = () => {
  return getCoursesByInstructorService(END_POINTS.GET_COURSES_BY_INSTRUCTORS);
};


export const getIndividualCourse = (courseId: string) => {
  return getIndividualCourseService(END_POINTS.GET_COURSE, courseId);
};


export const deleteCourse= (courseId:string)=>{
  return deleteCourseByIdService(END_POINTS.DELETE_COURSE, courseId)
}

export const enrollStudent = (
  courseId: string,
  paymentInfo?: PaymentIntent
) => {
  return enrollStudentService(END_POINTS.ENROLL_STUDENT, courseId, paymentInfo);
};