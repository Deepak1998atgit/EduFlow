import asyncHandler from 'express-async-handler';
import { CustomRequest } from '../../types/customRequest';
import { Request, Response } from 'express';
import { AuthServiceInterface } from '../../app/services/authServicesInterface';
import { AuthService } from '../../frameworks/services/authService';
import { StudentsDbInterface } from '../../app/repositories/studentDbRepository';
import { StudentRepositoryMongoDB } from '../../frameworks/database/mongodb/repositories/studentsRepoMongoDb';
import {
  changePasswordU
} from '../../app/usecases/student';




const studentController = (
  authServiceInterface: AuthServiceInterface,
  authServiceImpl: AuthService,
  studentDbRepository: StudentsDbInterface,
  studentDbRepositoryImpl: StudentRepositoryMongoDB
) => {
  const dbRepositoryStudent = studentDbRepository(studentDbRepositoryImpl());
  const authService = authServiceInterface(authServiceImpl());
 
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
  return {
    changePassword
  };
};

export default studentController;
