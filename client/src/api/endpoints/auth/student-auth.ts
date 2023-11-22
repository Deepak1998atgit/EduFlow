import END_POINTS from "../../../constants/endPoints";
import { login,register,googleLoginStudent,googleLoginInstructor } from "../../services/auth/student-authservices";

export const loginStudent = (studentData: any) => {
  console.log("kkkkkkk");
  return login(END_POINTS.LOGIN_STUDENT, studentData);
};

export const registerStudent = (studentData: any) => {
  console.log(studentData,"student data")
  return register(END_POINTS.REGISTER_STUDENT, studentData)
}


export const googleLogin = (credential:string) =>{
  console.log(credential,"shshshhcred");
  return googleLoginStudent(END_POINTS.GOOGLE_LOGIN_STUDENT,credential)

}

export const googleLoginByInstructor = (credential:string) =>{
  console.log(credential,"shshshhcred");
  return googleLoginInstructor(END_POINTS.GOOGLE_LOGIN_INSTRUCTOR,credential)

}
