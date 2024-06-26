import { StudentRegisterInterface } from '../../../types/studentRegisterInterface';
import { StudentsDbInterface } from '../../repositories/studentDbRepository';
import { StudentInterface } from '../../../types/studentInterface';
import { AuthServiceInterface } from '../../services/authServicesInterface'
import AppError from '../../../utils/appError';
import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import { GoogleAuthServiceInterface } from '../../../app/services/googleAuthServicesInterface';
import { NodemailerServiceInterface } from '../../services/nodeMailerServiceInterface';


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
  if (student?.isBlocked) {
    throw new AppError(
      'Sorry, you blocked',
      HttpStatusCodes.FORBIDDEN
    );
  }
  if(student){
      const payload = {
        Id: student._id,
        email:student.email,
        name:student?.name,
        role: 'student',
      };
      let accessToken= authService.generateToken(payload);
      return { accessToken };
  }

};



//STUDENT GOOGLE LOGIN
export const signInWithGoogleByStudent = async (
  credential: string,
  googleAuthService: ReturnType<GoogleAuthServiceInterface>,
  studentRepository: ReturnType<StudentsDbInterface>,
  authService: ReturnType<AuthServiceInterface>,
  nodemailerService: ReturnType<NodemailerServiceInterface>
) => {
  const user = await googleAuthService.verify(credential);
  console.log(user, "user detail")
  let accessToken;
  const isUserExist = await studentRepository.getStudentByEmail(user.email);
  if (isUserExist) {
    const payload = {
      Id: isUserExist._id,
      email: isUserExist.email,
      name: user?.name,
      prifile: user?.profilePic?.url,
      role: 'student',

    };
    accessToken = authService.generateToken(payload);
    return { accessToken };

  } else {
    const generatedPassword = authService.generateRandomPassword();
    await nodemailerService.sendmailWithPassword(generatedPassword);
    const student = {
      name: user.name,
      email: user.email,
      number: null,
      password: ''
    }
    student.password = await authService.hashPassword(generatedPassword);
    await studentRepository.addStudent(student);
    const isUserExist = await studentRepository.getStudentByEmail(student?.email);
    if (isUserExist) {
      const payload = {
        Id: isUserExist._id,
        email: isUserExist.email,
        name: user?.name,
        prifile: user?.profilePic?.url,
        role: 'student',

      };
      accessToken = authService.generateToken(payload);
     
    }
  }
  return { accessToken };
};



//student OTP Send TWILIO
export const sendOTP = async (
  phoneNumber: string,
  studentRepository: ReturnType<StudentsDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  
  if (!phoneNumber) {
    throw new AppError(
      "Phone number field cannot be empty",
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const user: StudentInterface  | null =
    await studentRepository.getStudentByPhoneNumber(phoneNumber);
  if (!user) {
    throw new AppError(
      "Sorry, There is no Account linked with this phone number",
      HttpStatusCodes.UNAUTHORIZED
    );
  }
  return await authService.generateOTP(phoneNumber);
};



//student OTP Verification TWILIO
export const verifyOTP = async (
  phoneNumber: string,
  otp: string,
  studentRepository: ReturnType<StudentsDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  if (!otp) {
    throw new AppError("Please provide a valid OTP", HttpStatusCodes.UNAUTHORIZED);
  }
  const verification = await authService.verifyOTP(phoneNumber, otp);
  if ( verification !== "approved") {
    throw new AppError(
      "OTP does not match, Please provide a valid OTP",
      HttpStatusCodes.UNAUTHORIZED
    );
  }
  const user: StudentInterface | null =
  await studentRepository.getStudentByPhoneNumber(phoneNumber);
  const applicantId = user?._id;
  if (!user) {
    throw new AppError("this user doesn't exist", HttpStatusCodes.UNAUTHORIZED);
  }
};



export const changePasswordAfterForgotU= async (
  phoneNumber: string,
  password:string,
  studentRepository: ReturnType<StudentsDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  const user: StudentInterface | null =
  await studentRepository.getStudentByPhoneNumber(phoneNumber);
  if (!user) {
    throw new AppError("this user doesn't exist", HttpStatusCodes.UNAUTHORIZED);
  }
  const hashedPassword = await authService.hashPassword(password); 
  await studentRepository.changePassword(user._id, hashedPassword);
};





