import express from 'express';
import courseController from '../../../adapters/controllers/courseController';
import { courseRepositoryMongodb } from '../../../frameworks/database/mongodb/repositories/courseReposMongoDb';
import { courseDbRepository } from '../../../app/repositories/courseDbRepository';
import upload from '../middlewares/multer';
import { cloudServiceInterface } from '../../../app/services/cloudServiceInterface'
import { cloudinaryService } from '../../../frameworks/services/cloudinaryService';
import roleCheckMiddleware from '../middlewares/roleCheckMiddleware';
import jwtAuthMiddleware from '../middlewares/userAuth';


const courseRouter = () => {
  const router = express.Router();
  const controller = courseController(
    courseDbRepository,
    courseRepositoryMongodb,
    cloudServiceInterface,
    cloudinaryService
  );

    

  //* Add course
  router.post(
    '/instructors/add-course',
    jwtAuthMiddleware,
    roleCheckMiddleware('instructor'),
    upload.array('files'),
    controller.addCourse
  );



  return router;
};
export default courseRouter;