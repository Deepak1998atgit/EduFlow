import express from 'express';
import courseController from '../../../adapters/controllers/courseController';
import { courseRepositoryMongodb } from '../../../frameworks/database/mongodb/repositories/courseReposMongoDb';
import { courseDbRepository } from '../../../app/repositories/courseDbRepository';
import upload from '../middlewares/multer';
import { cloudServiceInterface } from '../../../app/services/cloudServiceInterface'
import { cloudinaryService } from '../../../frameworks/services/cloudinaryService';
import roleCheckMiddleware from '../middlewares/roleCheckMiddleware';
import jwtAuthMiddleware from '../middlewares/userAuth';
import { RedisClient } from '../../../../server';
import { redisCacheRepository } from '../../../frameworks/database/redis/redisCacheRepository';
import { cacheRepositoryInterface } from '../../../app/repositories/cachedRepoInterface';
import { cachingMiddleware } from '../middlewares/redisCaching';
import { lessonDbRepository } from '../../../app/repositories/lessonDbRepository';
import { quizDbRepository } from '../../../app/repositories/quizDbRepository';
import { quizRepositoryMongodb } from '@src/frameworks/database/mongodb/repositories/quizRepoMongoDb';
import { lessonRepositoryMongodb } from '@src/frameworks/database/mongodb/repositories/lessonRepoMongoDb';
import { paymentRepositoryMongodb } from '@src/frameworks/database/mongodb/repositories/paymentRepoMongodb';
import { paymentInterface } from '@src/app/repositories/paymentDbRepository';
const courseRouter = (redisClient: RedisClient) => {
  const router = express.Router();
  const controller = courseController(
    courseDbRepository,
    courseRepositoryMongodb,
    lessonDbRepository,
    lessonRepositoryMongodb,
    quizDbRepository,
    quizRepositoryMongodb,
    cloudServiceInterface,
    cloudinaryService,
    paymentInterface,
    paymentRepositoryMongodb,
    cacheRepositoryInterface,
    redisCacheRepository,
    redisClient
  );


  //* Add course
  router.post(
    '/instructors/add-course',
    jwtAuthMiddleware,
    roleCheckMiddleware('instructor'),
    upload.array('files'),
    controller.addCourse
  );


  //* Get all courses
  router.get(
    '/get-all-courses',
    cachingMiddleware(redisClient, 'all-courses'),
    controller.getAllCourses
  );

  //* Get courses by instructor
  router.get(
    '/get-course-by-instructor',
    jwtAuthMiddleware,
    roleCheckMiddleware('instructor'),
    controller.getCoursesByInstructor
  );

  router.get('/get-course/:courseId',
    controller.getIndividualCourse
  );

  router.post(
    '/instructors/add-lesson/:courseId',
    jwtAuthMiddleware,
    roleCheckMiddleware('instructor'),
    upload.array('media'),
    controller.addLesson
  );

  router.get(
    '/instructors/get-lessons-by-course/:courseId', ///instructors/get-lessons-by-course
    controller.getLessonsByCourse
  );

  router.delete(
    '/instructors/delete-course/:courseId',
    jwtAuthMiddleware,
    roleCheckMiddleware('instructor'),
    controller.deleteCourseByInstructor
  )

  router.post(
    '/enroll-student/:courseId',
    jwtAuthMiddleware,
    controller.enrollStudent
  );

  router.get(
    '/get-course-by-student',
    jwtAuthMiddleware,
    controller.getCourseByStudent
  );

  return router;
};
export default courseRouter;