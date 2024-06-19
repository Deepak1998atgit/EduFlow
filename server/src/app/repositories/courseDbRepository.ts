import { CourseRepositoryMongoDbInterface } from '@src/frameworks/database/mongodb/repositories/courseReposMongoDb';
import {
  AddCourseInfoInterface
} from '@src/types/courseInterface';

export const courseDbRepository = (
  repository: ReturnType<CourseRepositoryMongoDbInterface>
) => {
  const addCourse = async (courseInfo: AddCourseInfoInterface) =>
    await repository.addCourse(courseInfo);

  return {
    addCourse,
  };
};
export type CourseDbRepositoryInterface = typeof courseDbRepository;