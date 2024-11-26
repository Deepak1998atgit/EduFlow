import AppError from '../../../utils/appError';
import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import { CourseDbRepositoryInterface } from '../../repositories/courseDbRepository';
import { CourseInterface } from '@src/types/courseInterface';




export const deleteCourse = async (
    instructorId: string | undefined,
    courseId: string | undefined,
    courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
    if (!instructorId || !courseId) {
        throw new AppError(
            'Both instructorId and courseId are required.',
            HttpStatusCodes.BAD_REQUEST
        );
    }
    const course: CourseInterface | null = await courseDbRepository.getCourseById(
        courseId
    )
    if(course && course.instructorId.toString() === instructorId){
        console.log("couree del",course,"del")
        await courseDbRepository.deleteCourseById(courseId);
    }else{
        throw new AppError(
            'You do not have permission to access this course.',
            HttpStatusCodes.FORBIDDEN
        );
    }
}