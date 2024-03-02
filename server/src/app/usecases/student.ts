import { StudentsDbInterface } from '../repositories/studentDbRepository';
import AppError from '../../utils/appError';
import HttpStatusCodes from '../../constants/HttpStatusCodes';
import { AuthServiceInterface } from '../services/authServicesInterface';
import {
  StudentInterface,
} from '../../types/studentInterface';

export const changePasswordU = async (
  id: string | undefined,
  password: { currentPassword: string; newPassword: string },
  authService: ReturnType<AuthServiceInterface>,
  studentDbRepository: ReturnType<StudentsDbInterface>
) => {
  if (!id) {
    throw new AppError('Invalid student', HttpStatusCodes.BAD_REQUEST);
  }
  if (!password.currentPassword) {
    throw new AppError(
      'Please provide current password',
      HttpStatusCodes.BAD_REQUEST
    );
  }
  const student: StudentInterface | null = await studentDbRepository.getStudent(
    id
  );
  if (!student) {
    throw new AppError('Unauthorized user', HttpStatusCodes.NOT_FOUND);
  }
  const isPasswordCorrect = await authService.comparePassword(
    password.currentPassword,
    student?.password
  );
  if (!isPasswordCorrect) {
    throw new AppError(
      'Sorry, your current password is incorrect.',
      HttpStatusCodes.BAD_REQUEST
    );
  }
  if (!password.newPassword) {
    throw new AppError(
      'new password cannot be empty',
      HttpStatusCodes.UNAUTHORIZED
    );
  }
  const hashedPassword = await authService.hashPassword(password.newPassword);
  await studentDbRepository.changePassword(id, hashedPassword);
};


