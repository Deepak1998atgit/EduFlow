import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { CourseRepositoryMongoDbInterface } from '../../frameworks/database/mongodb/repositories/courseReposMongoDb';
import { CourseDbRepositoryInterface } from '../../app/repositories/courseDbRepository';
import { addCourses } from '../../app/usecases/course/addCourse';
import {
  getAllCourseU,
} from '../../app/usecases/course/listCourse';
import {
  getCourseByInstructorU } from "../../app/usecases/course/view-course"
import {
  AddCourseInfoInterface,
} from '../../types/courseInterface';
import { CustomRequest } from '../../types/customRequest';
import { CloudServiceInterface } from '../../app/services/cloudServiceInterface';
import { CloudServiceImpl } from '../../frameworks/services/cloudinaryService';
import { RedisClient } from '../../../server';
import { RedisRepositoryImpl } from '@src/frameworks/database/redis/redisCacheRepository';
import { CacheRepositoryInterface } from '@src/app/repositories/cachedRepoInterface';
import { addLessonsU } from '../../app/usecases/lessons/addLesson';


const courseController = (
  courseDbRepository: CourseDbRepositoryInterface,
  courseDbRepositoryImpl: CourseRepositoryMongoDbInterface,
  cloudServiceInterface: CloudServiceInterface,
  cloudServiceImpl: CloudServiceImpl,
  cacheDbRepository: CacheRepositoryInterface,
  cacheDbRepositoryImpl: RedisRepositoryImpl,
  cacheClient: RedisClient

) => {
  const dbRepositoryCourse = courseDbRepository(courseDbRepositoryImpl());
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
    console.log("not cached")
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



  return {
    addCourse,
    getAllCourses,
    getCoursesByInstructor,
    addLesson
  };

};

export default courseController;
