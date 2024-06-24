
import { InstructorDbInterface} from '../../../app/repositories/instructorDbRepository';
import { AuthServiceInterface } from '../../../app/services/authServicesInterface';
import { InstructorInterface} from '../../../types/instructorInterface';
import AppError from '../../../utils/appError';
import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import { GoogleAuthServiceInterface } from '../../../app/services/googleAuthServicesInterface';
import { CloudServiceInterface } from '@src/app/services/cloudServiceInterface';


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

export const instructorLogin = async (
    email: string,
    password: string,
    instructorRepository: ReturnType<InstructorDbInterface>,
    authService: ReturnType<AuthServiceInterface>
  ) => {
    const instructor: InstructorInterface | null =
      await instructorRepository.getInstructorByEmail(email);
      // if(instructor?.isBlocked=== true){
      //   throw new AppError(
      //     'Sorry, your blocked',
      //     HttpStatusCodes.UNAUTHORIZED
      //   );
      // }
    if (!instructor) {
      throw new AppError(
        "Instructor doesn't exist, please register",
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


  