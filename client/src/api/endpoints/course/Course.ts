import END_POINTS from "../../../constants/endPoints";
import {
  addCourseService,
  getAllCoursesService,
  getCoursesByInstructorService,
  getIndividualCourseService
} from "../../services/course/course-service";


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
