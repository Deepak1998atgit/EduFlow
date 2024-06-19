import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { CourseRepositoryMongoDbInterface } from '../../frameworks/database/mongodb/repositories/courseReposMongoDb';
import { CourseDbRepositoryInterface } from '../../app/repositories/courseDbRepository';
import { addCourses } from '../../app/usecases/course/addCourse';
import {
  AddCourseInfoInterface,
} from '../../types/courseInterface';
import { CustomRequest } from '../../types/customRequest';



const courseController = (
  courseDbRepository: CourseDbRepositoryInterface,
  courseDbRepositoryImpl: CourseRepositoryMongoDbInterface,
) => {
  const dbRepositoryCourse = courseDbRepository(courseDbRepositoryImpl());
 

  const addCourse = asyncHandler(
    async (req: CustomRequest, res: Response, next: NextFunction) => {
        console.log("ok get")
      const course: AddCourseInfoInterface = req.body;
      const files: Express.Multer.File[] = req.files as Express.Multer.File[];
      const instructorId = req.user?.Id;
      const response = await addCourses(
        course,
        files,
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

    

  return {
    addCourse,
  };
};

export default courseController;
