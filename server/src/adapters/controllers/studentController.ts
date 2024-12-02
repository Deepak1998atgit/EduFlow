import asyncHandler from 'express-async-handler';
import { CustomRequest } from '../../types/customRequest';
import { Request, Response } from 'express';
import { AuthServiceInterface } from '../../app/services/authServicesInterface';
import { AuthService } from '../../frameworks/services/authService';
import { StudentsDbInterface } from '../../app/repositories/studentDbRepository';
import { StudentRepositoryMongoDB } from '../../frameworks/database/mongodb/repositories/studentsRepoMongoDb';
import {
  changePasswordU,
  getStudentDetailsU,
  updateProfileU
} from '../../app/usecases/student';
import { CloudServiceInterface } from '../../app/services/cloudServiceInterface';
import { CloudServiceImpl } from '../../frameworks/services/cloudinaryService';
import { CacheRepositoryInterface } from '../../app/repositories/cachedRepoInterface';
import { RedisRepositoryImpl } from '../../frameworks/database/redis/redisCacheRepository';
import { RedisClient } from 'server';
import { StudentUpdateInfo } from '../../types/studentInterface';

const studentController = (
  authServiceInterface: AuthServiceInterface,
  authServiceImpl: AuthService,
  studentDbRepository: StudentsDbInterface,
  studentDbRepositoryImpl: StudentRepositoryMongoDB,
  cloudServiceInterface: CloudServiceInterface,
  cloudServiceImpl: CloudServiceImpl,
  cacheDbRepository: CacheRepositoryInterface,
  cacheDbRepositoryImpl: RedisRepositoryImpl,
  redisClient:RedisClient
) => {
  const dbRepositoryStudent = studentDbRepository(studentDbRepositoryImpl());
  const authService = authServiceInterface(authServiceImpl());
  const cloudService = cloudServiceInterface(cloudServiceImpl());
  const dbRepositoryCache=cacheDbRepository(cacheDbRepositoryImpl(redisClient));
 
  //student password change
  const changePassword = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      const passwordInfo: { currentPassword: string; newPassword: string } =
        req.body;
      const studentId: string | undefined = req.user?.Id;
      await changePasswordU(
        studentId,
        passwordInfo,
        authService,
        dbRepositoryStudent
      );
      res.status(200).json({
        status: 'success',
        message: 'Successfully reset password',
        data: null
      });
    }
  );


  const getStudentDetails = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      const studentId: string | undefined = req.user?.Id;
      const studentDetails = await getStudentDetailsU(
        studentId,
        cloudService,
        dbRepositoryStudent
      );
      const cacheOptions = {
        key: `${studentId}`,
        expireTimeSec: 600,
        data: JSON.stringify(studentDetails)
      };
      // await dbRepositoryCache.setCache(cacheOptions);
      res.status(200).json({
        status: 'success',
        message: 'Successfully retrieved student details',
        data: studentDetails
      });
    }
  );


  const updateProfile = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      console.log("ok")
      const studentInfo: StudentUpdateInfo = req.body;
      const studentId: string | undefined = req.user?.Id;
      const profilePic: Express.Multer.File = req.file as Express.Multer.File;
      await updateProfileU(
        studentId,
        studentInfo,
        profilePic,
        cloudService,
        dbRepositoryStudent
      );
      await dbRepositoryCache.clearCache(studentId ?? '');
      res.status(200).json({
        status: 'success',
        message: 'Successfully updated your profile',
        data: null
      });
    }
  );

  return {
    changePassword,
    getStudentDetails,
    updateProfile
  };
};

export default studentController;
