import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { CourseRepositoryMongoDbInterface } from '../../frameworks/database/mongodb/repositories/courseReposMongoDb';
import { CourseDbRepositoryInterface } from '../../app/repositories/courseDbRepository';
import { addCourses } from '../../app/usecases/course/addCourse';
import {
  getAllCourseU,
  getCourseByIdU,
} from '../../app/usecases/course/listCourse';
import {
  getCourseByInstructorU
} from "../../app/usecases/course/view-course"
import { getLessonsByCourseIdU } from '../../app/usecases/lessons/view-lessons';
import {
  AddCourseInfoInterface,
} from '../../types/courseInterface';
import { deleteCourse } from '@src/app/usecases/course/delete-course';
import { CustomRequest } from '../../types/customRequest';
import { CloudServiceInterface } from '../../app/services/cloudServiceInterface';
import { CloudServiceImpl } from '../../frameworks/services/cloudinaryService';
import { RedisClient } from '../../../server';
import { RedisRepositoryImpl } from '@src/frameworks/database/redis/redisCacheRepository';
import { CacheRepositoryInterface } from '@src/app/repositories/cachedRepoInterface';
import { addLessonsU } from '../../app/usecases/lessons/addLesson';
import { LessonDbRepositoryInterface } from '@src/app/repositories/lessonDbRepository';
import { LessonRepositoryMongoDbInterface } from '@src/frameworks/database/mongodb/repositories/lessonRepoMongoDb';
import { QuizDbInterface } from '@src/app/repositories/quizDbRepository';
import { QuizRepositoryMongoDbInterface } from '@src/frameworks/database/mongodb/repositories/quizRepoMongoDb';


const courseController = (
  courseDbRepository: CourseDbRepositoryInterface,
  courseDbRepositoryImpl: CourseRepositoryMongoDbInterface,
  lessonDbRepository: LessonDbRepositoryInterface,
  lessonDbRepositoryImp: LessonRepositoryMongoDbInterface,
  quizDbRepository: QuizDbInterface,
  quizDbRepositoryImp: QuizRepositoryMongoDbInterface,
  cloudServiceInterface: CloudServiceInterface,
  cloudServiceImpl: CloudServiceImpl,
  cacheDbRepository: CacheRepositoryInterface,
  cacheDbRepositoryImpl: RedisRepositoryImpl,
  cacheClient: RedisClient

) => {
  const dbRepositoryCourse = courseDbRepository(courseDbRepositoryImpl());
  const dbRepositoryLesson = lessonDbRepository(lessonDbRepositoryImp());
  const dbRepositoryQuiz = quizDbRepository(quizDbRepositoryImp());
  const cloudService = cloudServiceInterface(cloudServiceImpl());
  const dbRepositoryCache = cacheDbRepository(cacheDbRepositoryImpl(cacheClient));


  const addCourse = asyncHandler(
    async (req: CustomRequest, res: Response, next: NextFunction) => {
      console.log("ok get")
      const course: AddCourseInfoInterface = req.body;
      const files: Express.Multer.File[] = req.files as Express.Multer.File[];
      const instructorId = req.user?.Id;
      const response = await addCourses(
        instructorId,
        course,
        files,
        cloudService,
        dbRepositoryCourse
      );
      console.log(response)
      res.status(201).json({
        status: 'success',
        message:
          'Successfully added new course, course will be published after verification',
        data: response
      });
    }
  );


  const getAllCourses = asyncHandler(async (req: Request, res: Response) => {
    console.log("not cached in to course db")
    const courses = await getAllCourseU(cloudService, dbRepositoryCourse);
    const cacheOptions = {
      key: `all-courses`,
      expireTimeSec: 600,
      data: JSON.stringify(courses)
    };
    await dbRepositoryCache.setCache(cacheOptions);
    res.status(200).json({
      status: 'success',
      message: 'Successfully retrieved all courses',
      data: courses
    });
  });


  const getCoursesByInstructor = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      const instructorId = req.user?.Id;
      const courses = await getCourseByInstructorU(
        instructorId,
        cloudService,
        dbRepositoryCourse
      );
      res.status(200).json({
        status: 'success',
        message: 'Successfully retrieved your courses',
        data: courses
      });
    }
  );


  const addLesson = asyncHandler(async (req: CustomRequest, res: Response) => {
    const instructorId = req.user?.Id;
    const courseId = req.params.courseId;
    const lesson = req.body;
    const medias = req.files as Express.Multer.File[];
    const questions = JSON.parse(lesson.questions);
    lesson.questions = questions;
    console.log("passing....add lesson")
    await addLessonsU(
      medias,
      courseId,
      instructorId,
      lesson,
      dbRepositoryLesson,
      cloudService,
      dbRepositoryQuiz
    );
    res.status(200).json({
      status: 'success',
      message: 'Successfully added new lesson',
      data: null
    });
  });


  const getIndividualCourse = asyncHandler(
    async (req: Request, res: Response) => {
      const courseId: string = req.params.courseId;
      const course = await getCourseByIdU(
        courseId,
        cloudService,
        dbRepositoryCourse
      );
      console.log(course)
      res.status(200).json({
        status: 'success',
        message: 'Successfully retrieved the course',
        data: course
      });
    }
  );


  const getLessonsByCourse = asyncHandler(
    async (req: Request, res: Response) => {
      const courseId = req.params.courseId;
      console.log("obtaind", courseId)
      const lessons = await getLessonsByCourseIdU(courseId, dbRepositoryLesson);
      res.status(200).json({
        status: 'success',
        message: 'Successfully retrieved lessons based on the course',
        data: lessons
      });
    }
  );


  const deleteCourseByInstructor = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      const courseId = req?.params?.courseId;
      const instructorId = req?.user?.Id;
      await deleteCourse(instructorId, courseId, dbRepositoryCourse);
      res.status(200).json({
        status: 'success',
        message: 'Successfully deleted the course'
      });
    }
  );

  return {
    addCourse,
    getAllCourses,
    getCoursesByInstructor,
    addLesson,
    getIndividualCourse,
    getLessonsByCourse,
    deleteCourseByInstructor
  };

};

export default courseController;
