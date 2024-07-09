import END_POINTS from "../../../constants/endPoints";
import {
  addCourseService,
  getAllCoursesService
} from "../../services/course/course-service";


export const addCourse = (courseInfo: FormData) => {
  console.log("courseinfo",courseInfo)
  return addCourseService(END_POINTS.ADD_COURSE, courseInfo);
};


export const getAllCourses = () => {
  return getAllCoursesService(END_POINTS.GET_ALL_COURSES);
};
