import { StudentRegisterInterface } from '../../../types/studentRegisterInterface';
import { StudentsDbInterface } from '../../repositories/studentDbRepository';
import { StudentInterface } from '../../../types/studentInterface';
import { AuthServiceInterface } from '../../services/authServicesInterface'
import AppError from '../../../utils/appError';
import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import { GoogleAuthServiceInterface } from '../../../app/services/googleAuthServicesInterface';

//STUDENT REGISTRATION
export const studentRegister = async (
    student: StudentRegisterInterface,
    studentRepository: ReturnType<StudentsDbInterface>,
    authService: ReturnType<AuthServiceInterface>
  ) => {
    student.email = student?.email?.toLowerCase();
    const isEmailAlreadyRegistered = await studentRepository.getStudentByEmail(
      student.email
    );
    if (isEmailAlreadyRegistered) {
      throw new AppError(
        'User with same email already exists...!',
        HttpStatusCodes.CONFLICT
      );
    }
    if (student.password) {
      student.password = await authService.hashPassword(student.password);
    }
    const { _id: studentId, email } = await studentRepository.addStudent(student);
    
};

//STUDENT LOGIN
export const studentLogin = async (
  email: string,
  password: string,
  studentRepository: ReturnType<StudentsDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  const student: StudentInterface | null =
    await studentRepository.getStudentByEmail(email);
  if (!student) {
    throw new AppError("this user doesn't exist", HttpStatusCodes.NOT_FOUND);
  }
  const isPasswordCorrect = await authService.comparePassword(
    password,
    student.password
  );
  if (!isPasswordCorrect) {
    throw new AppError(
      'Sorry, your password is incorrect. Please try again',
      HttpStatusCodes.UNAUTHORIZED
    );
  }
  if(student?.isBlocked){
    throw new AppError(
      'Sorry, you blocked',
      HttpStatusCodes.FORBIDDEN
    );
  }
   
};

//STUDENT GOOGLE LOGIN
export const signInWithGoogleByStudent = async (
  credential: string,
  googleAuthService: ReturnType<GoogleAuthServiceInterface>,
  studentRepository: ReturnType<StudentsDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  const user = await googleAuthService.verify(credential);
  console.log(user,"user detail")
  let accessToken;
  const isUserExist = await studentRepository.getStudentByEmail(user.email);
  if (isUserExist) {
    const payload = {
      Id: isUserExist._id,
      email: isUserExist.email,
      name:user?.name,
      prifile:user?.profilePic?.url,
      role: 'student',

    };
    accessToken = authService.generateToken(payload);
    return {accessToken};
    
  }else{
    throw new AppError(
      'Sorry, your email is not fount for login',
      HttpStatusCodes.UNAUTHORIZED
    );
  }
};

  