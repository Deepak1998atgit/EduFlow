import { CourseRepositoryMongoDbInterface } from '@src/frameworks/database/mongodb/repositories/courseReposMongoDb';
import {
  AddCourseInfoInterface
} from '@src/types/courseInterface';

export const courseDbRepository = (
  repository: ReturnType<CourseRepositoryMongoDbInterface>
) => {

  const addCourse = async (courseInfo: AddCourseInfoInterface) =>
    await repository.addCourse(courseInfo);

  const getAllCourse = async () =>
    await repository.getAllCourse();

  const getCourseByInstructorId = async (instructorId: string) =>
    await repository.getCourseByInstructorId(instructorId);

  const getCourseById = async (courseId: string) =>
    await repository.getCourseById(courseId);

  const deleteCourseById = async (courseId: string) =>
    await repository.deleteCourseById(courseId);

  const getAmountByCourseId = async (courseId: string) =>
    await repository.getAmountByCourseId(courseId);

  const enrollStudent = async (courseId: string, studentId: string) =>
    await repository.enrollStudent(courseId, studentId);

  const getStudentsByCourseForInstructor = async (instructorId: string) =>
    await repository.getStudentsByCourseForInstructor(instructorId);

  const getCourseByStudent = async (studentId: string) =>
    await repository.getCourseByStudent(studentId)

  return {
    addCourse,
    getAllCourse,
    getCourseByInstructorId,
    getCourseById,
    deleteCourseById,
    getAmountByCourseId,
    enrollStudent,
    getStudentsByCourseForInstructor,
    getCourseByStudent
  };

};
export type CourseDbRepositoryInterface = typeof courseDbRepository;