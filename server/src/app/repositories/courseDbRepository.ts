import { CourseRepositoryMongoDbInterface } from '@src/frameworks/database/mongodb/repositories/courseReposMongoDb';
import {
  AddCourseInfoInterface
} from '@src/types/courseInterface';

export const courseDbRepository = (
  repository: ReturnType<CourseRepositoryMongoDbInterface>
) => {

  const addCourse = async (courseInfo: AddCourseInfoInterface) => await repository.addCourse(courseInfo);

  const getAllCourse = async () => await repository.getAllCourse();

  const getCourseByInstructorId = async (instructorId: string) =>
    await repository.getCourseByInstructorId(instructorId);

  const getCourseById = async (courseId: string) =>
    await repository.getCourseById(courseId);


  return {
    addCourse,
    getAllCourse,
    getCourseByInstructorId,
    getCourseById 
  };

};
export type CourseDbRepositoryInterface = typeof courseDbRepository;