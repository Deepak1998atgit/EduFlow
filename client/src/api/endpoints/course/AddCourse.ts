import END_POINTS from "../../../constants/endPoints";
import {
  addCourseService
} from "../../services/course/course-service";


export const addCourse = (courseInfo: FormData) => {
  return addCourseService(END_POINTS.ADD_COURSE, courseInfo);
};

