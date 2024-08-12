import { CourseDbRepositoryInterface } from '../../repositories/courseDbRepository';
import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import AppError from '../../../utils/appError';
import { CloudServiceInterface } from '../../services/cloudServiceInterface';


export const getCourseByInstructorU = async (
  instructorId: string | undefined,
  cloudService: ReturnType<CloudServiceInterface>,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  if (!instructorId && instructorId !== '') {
    throw new AppError(
      'Please provide an instructor id',
      HttpStatusCodes.BAD_REQUEST
    );
  }
  const courses = await courseDbRepository.getCourseByInstructorId(
    instructorId
  );
  await Promise.all(
    courses.map(async (course) => {
      if (course.thumbnail) {
        console.log(course.thumbnail,"url");
        const data= await cloudService.getFile(course.thumbnail.key);
        console.log(data,"url")
      }
    })
  );

  return courses;
};