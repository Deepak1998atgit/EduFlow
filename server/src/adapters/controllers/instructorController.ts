import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import {
  getAllInstructorRequests,
  acceptInstructorRequest,
  rejectInstructorRequest,
  getAllInstructors,
  blockInstructors,
  unblockInstructors,
  getBlockedInstructors,
  getInstructorByIdUseCase,
  getStudentsForInstructorsU
} from '../../app/usecases/management/instructorManagement';
import { NodeMailService } from '../../frameworks/services/nodeMailservice';
import { NodemailerServiceInterface } from '../../app/services/nodeMailerServiceInterface';
import { InstructorDbInterface } from '../../app/repositories/instructorDbRepository';
import { InstructorRepositoryMongoDb } from '../../frameworks/database/mongodb/repositories/instructorRepoMongoDb';
import { CustomRequest } from '../../types/customRequest';
import { CloudServiceInterface } from '../../app/services/cloudServiceInterface';
import { CloudServiceImpl } from '../../frameworks/services/cloudinaryService';
import { AuthServiceInterface } from '../../app/services/authServicesInterface';
import { AuthService } from '../../frameworks/services/authService';
import { CourseRepositoryMongoDbInterface } from '@src/frameworks/database/mongodb/repositories/courseReposMongoDb';
import { CourseDbRepositoryInterface } from '@src/app/repositories/courseDbRepository';
const instructorController = (
  authServiceInterface: AuthServiceInterface,
  authServiceImpl: AuthService,
  instructorDbRepository: InstructorDbInterface,
  instructorDbRepositoryImpl: InstructorRepositoryMongoDb,
  courseDbRepository: CourseDbRepositoryInterface,
  courseDbRepositoryImpl: CourseRepositoryMongoDbInterface,
  emailServiceInterface: NodemailerServiceInterface,
  emailServiceImpl: NodeMailService,
  cloudServiceInterface: CloudServiceInterface,
  cloudServiceImpl: CloudServiceImpl
) => {
  const authService = authServiceInterface(authServiceImpl());
  const dbRepositoryInstructor = instructorDbRepository(instructorDbRepositoryImpl());
  const emailService = emailServiceInterface(emailServiceImpl());
  const cloudService = cloudServiceInterface(cloudServiceImpl());
  const dbRepositoryCourse = courseDbRepository(courseDbRepositoryImpl());

  //? INSTRUCTOR MANAGEMENT
  const getInstructorRequests = asyncHandler(
    async (req: Request, res: Response) => {
      const response = await getAllInstructorRequests(dbRepositoryInstructor);
      res.json({
        status: 'success',
        message: 'Successfully retrieved all instructor requests',
        data: response
      });
    }
  );

  const verifyInstructor = asyncHandler(async (req: Request, res: Response) => {
    const instructorId: string = req.params.instructorId;
    const response = await acceptInstructorRequest(
      instructorId,
      dbRepositoryInstructor,
      emailService
    );
    res.json({
      status: 'success',
      message: 'Successfully accepted instructor request',
      data: response
    });
  });

  const rejectRequest = asyncHandler(async (req: Request, res: Response) => {
    const { instructorId, reason }: { instructorId: string; reason: string } =
      req.body;
    const response = await rejectInstructorRequest(
      instructorId,
      reason,
      dbRepositoryInstructor,
      emailService
    );
    res.json({
      status: 'success',
      message: 'Successfully rejected instructor request',
      data: response
    });
  });

  const getAllInstructor = asyncHandler(async (req: Request, res: Response) => {
    const instructors = await getAllInstructors(
      cloudService,
      dbRepositoryInstructor
    );
    res.json({
      status: 'success',
      message: 'Successfully fetched all instructor information',
      data: instructors
    });
  });

  const blockInstructor = asyncHandler(async (req: Request, res: Response) => {
    const { instructorId, reason }: { instructorId: string; reason: string } =
      req.body;
    const response = await blockInstructors(
      instructorId,
      reason,
      dbRepositoryInstructor
    );
    res.json({
      status: 'success',
      message: 'Successfully blocked the instructor',
      data: response
    });
  });

  const unblockInstructor = asyncHandler(
    async (req: Request, res: Response) => {
      const instructorId: string = req.params.instructorId;
      const response = await unblockInstructors(
        instructorId,
        dbRepositoryInstructor
      );
      res.json({
        status: 'success',
        message: 'Successfully unblocked the instructor',
        data: response
      });
    }
  );

  const getBlockedInstructor = asyncHandler(
    async (req: Request, res: Response) => {
      const response = await getBlockedInstructors(
        cloudService,
        dbRepositoryInstructor
      );
      res.json({
        status: 'success',
        message: 'Successfully fetched blocked instructors',
        data: response
      });
    }
  );



  const getInstructorById = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      let instructorId = req.params.instructorId;
      console.log(instructorId)
      const response = await getInstructorByIdUseCase(
        instructorId,
        cloudService,
        dbRepositoryInstructor
      );
      console.log(response)
      res.json({
        status: 'success',
        message: 'Successfully fetched instructor info',
        data: response
      });
    }
  );



  const getStudentsForInstructors = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      const instructorId: string | undefined = req.user?.Id;
      const students = await getStudentsForInstructorsU(
        instructorId,
        cloudService,
        dbRepositoryCourse
      );
      res.status(200).json({
        status: 'success',
        message: 'Successfully retrieved all students',
        data: students
      });
    }
  );


  const getInstructorDetails = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      const instructorId = req.user?.Id;
      const instructor = await getInstructorByIdUseCase(
        instructorId ?? '',
        cloudService,
        dbRepositoryInstructor
      );
      res.status(200).json({
        status: 'success',
        message: 'Successfully retrieved instructor details...',
        data: instructor
      });
    }
  );


  return {
    getInstructorRequests,
    verifyInstructor,
    rejectRequest,
    getAllInstructor,
    blockInstructor,
    unblockInstructor,
    getBlockedInstructor,
    getInstructorById,
    getStudentsForInstructors,
    getInstructorDetails
  };
};

export default instructorController;