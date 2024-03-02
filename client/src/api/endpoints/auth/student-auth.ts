import END_POINTS from "../../../constants/endPoints";
import { login,register,googleLoginStudent,googleLoginInstructor,sendOtpStudent,verifyOtpStudent,changePasswordAfterForgotU} from "../../services/auth/student-authservices";

export const loginStudent = (studentData: any) => {
  console.log("kkkkkkk");
  return login(END_POINTS.LOGIN_STUDENT, studentData);

};

export const registerStudent = (studentData: any) => {
  return register(END_POINTS.REGISTER_STUDENT, studentData);

}

export const googleLogin = (credential:string) =>{
  return googleLoginStudent(END_POINTS.GOOGLE_LOGIN_STUDENT, credential);

}

export const googleLoginByInstructor = (credential: string) => {
  return googleLoginInstructor(END_POINTS.GOOGLE_LOGIN_INSTRUCTOR, credential);

}

export const sendOtp = (mobile:string) =>{
  return sendOtpStudent(END_POINTS.SEND_OTP, mobile);

}

export const verifyOtp = (otp:string,mobile:string) =>{
  return verifyOtpStudent(END_POINTS.VERIFY_OTP, otp, mobile);

}

export const changePasswordAfterForgot = (password:string,mobile:string) =>{
  return changePasswordAfterForgotU(END_POINTS.CHANGE_PASSWORD_FORGOT, password, mobile);
}
