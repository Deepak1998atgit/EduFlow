
import { InstructorDbInterface } from '../../../app/repositories/instructorDbRepository';
import { AuthServiceInterface  } from '../../../app/services/authServicesInterface';
import { InstructorInterface ,SavedInstructorInterface} from '../../../types/instructorInterface';
import AppError from '../../../utils/appError';
import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import { GoogleAuthServiceInterface } from '../../../app/services/googleAuthServicesInterface';
import { CloudServiceInterface } from '@src/app/services/cloudServiceInterface';
import { RefreshTokenDbInterface } from '../../../app/repositories/refreshTokenDBRepository';

//INSTRUCTOR REGISTER
export const instructorRegister = async (
  instructor: InstructorInterface,
  files: Express.Multer.File[],
  instructorRepository: ReturnType<InstructorDbInterface>,
  authService: ReturnType<AuthServiceInterface>,
  cloudService: ReturnType<CloudServiceInterface>
) => {
  console.log("ok",files,instructor, "ok");
  instructor.certificates = []
  // Use object destructuring and default value
  const { password = '', email = '' }: InstructorInterface = instructor;
  instructor.email = email.toLowerCase();

  // Check if the email is already registered
  const isEmailAlreadyRegistered = await instructorRepository.getInstructorByEmail(
    instructor.email
  );

  if (isEmailAlreadyRegistered) {
    throw new AppError(
      'Instructor with the same email already exists..!',
      HttpStatusCodes.CONFLICT
    );
  } 


  for (const file of files) {
    let uploadedFile;

    if (file.originalname === 'profilePic') {
      uploadedFile = await cloudService.upload(file);
      instructor.profilePic = uploadedFile;
    } else {
      uploadedFile = await cloudService.upload(file);
      instructor.certificates.push(uploadedFile);
    }
  }

  // Hash the password if provided
  if (password) {
    instructor.password = await authService.hashPassword(password);
  }
  console.log(instructor)

  // Add instructor to the repository
  const response = await instructorRepository.addInstructor(instructor);

  return response
    ? { status: true, message: 'Successfully registered!' }
    : { status: false, message: 'Failed to register!' };

}


//INSTRUCTOR LOGIN 
export const instructorLogin = async (
  email: string,
  password: string,
  instructorRepository: ReturnType<InstructorDbInterface>,
  refreshTokenRepository: ReturnType<RefreshTokenDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  const instructor: SavedInstructorInterface | null =
    await instructorRepository.getInstructorByEmail(email);
  if (!instructor) {
    throw new AppError(
      "Instructor doesn't exist, please register",
      HttpStatusCodes.UNAUTHORIZED
    );
  }
  if (!instructor.isVerified) {
    throw new AppError(
      'Your details is under verification please try again later',
      HttpStatusCodes.UNAUTHORIZED
    );
  }
  const isPasswordCorrect = await authService.comparePassword(
    password,
    instructor.password
  );
  if (!isPasswordCorrect) {
    throw new AppError(
      'Sorry, your password is incorrect. Please try again',
      HttpStatusCodes.UNAUTHORIZED
    );
  }
  const payload = {
    Id: instructor._id,
    email: instructor.email,
    role: 'instructor'
  };
  await refreshTokenRepository.deleteRefreshToken(instructor._id);
  const accessToken = authService.generateToken(payload);
  const refreshToken = authService.generateRefreshToken(payload);
  const expirationDate =
    authService.decodedTokenAndReturnExpireDate(refreshToken);
  await refreshTokenRepository.saveRefreshToken(
    instructor._id,
    refreshToken,
    expirationDate
  );
  console.log(accessToken,refreshToken)
  return {
    accessToken,
    refreshToken
  };
};



//INSTRUCTOR GOOGLE LOGIN
export const signInWithGoogleByInstructor = async (
  credential: string,
  googleAuthService: ReturnType<GoogleAuthServiceInterface>,
  instructorRepository: ReturnType<InstructorDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  const user = await googleAuthService.verify(credential);
  console.log(user,"user detail ccccc")
  let accessToken;
  const isUserExist = await instructorRepository.getInstructorByEmail(user.email);
  // if(isUserExist?.isBlocked=== true){
  //   throw new AppError(
  //     'Sorry, your blocked',
  //     HttpStatusCodes.UNAUTHORIZED
  //   );
  // }
  if (isUserExist) {
    // const payload = {
    //   Id: isUserExist._id,
    //   email: isUserExist.email,
    //   name:user.name,
    //   prifile:user.profilePic.url,
    //   role: 'Instructor',

    // };
    // accessToken = authService.generateToken(payload);
    // return {accessToken};
    
  }else{
    throw new AppError(
      'Sorry, your email is not fount for login',
      HttpStatusCodes.UNAUTHORIZED
    );
  }
};



  