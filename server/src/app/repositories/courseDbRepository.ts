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


  return {
    addCourse,
    getAllCourse,
    getCourseByInstructorId
  };

};
export type CourseDbRepositoryInterface = typeof courseDbRepository;