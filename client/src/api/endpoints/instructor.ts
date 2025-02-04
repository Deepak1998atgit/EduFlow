import {
    getMyStudentsService,
    getInstructorDetailsService
} from "../services/instructor";
import END_POINTS from "@/constants/endPoints";


export const getMyStudents = () => {
    return getMyStudentsService(END_POINTS.GET_MY_STUDENTS);
};


export const getInstructorDetails = () => {
    return getInstructorDetailsService(END_POINTS.GET_INSTRUCTOR_DETAILS)
}