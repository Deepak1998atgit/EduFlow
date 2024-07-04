import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import AppError from '../../../utils/appError';
import { CourseDbRepositoryInterface } from '../../repositories/courseDbRepository';
import { CourseInterface } from '@src/types/courseInterface';
import { CloudServiceInterface } from '@src/app/services/cloudServiceInterface';

export const getAllCourseU = async (
  cloudService: ReturnType<CloudServiceInterface>,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  const courses: CourseInterface[] | null =
    await courseDbRepository.getAllCourse();

//   await Promise.all(
//     courses.map(async (course) => {
//       if (course.thumbnail) {
//         course.thumbnailUrl = await cloudService.getFile(course.thumbnail.key);
//       }
//     })
//   );
  return courses;
};
