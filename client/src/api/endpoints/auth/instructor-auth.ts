import END_POINTS from "../../../constants/endPoints";
import { register,login } from "../../services/auth/instructor-auth-services";
import { InstructorLoginInfo } from "../../types/instructor/auth-interface";

export const registerInstructor = (instructorData:any)=>{
    console.log(instructorData,"registerInstructor");
  return register(END_POINTS.REGISTER_INSTRUCTOR,instructorData)
}

export const loginInstructor = (instructorData:InstructorLoginInfo)=>{
    console.log(instructorData,"jjjjj")
  return login(END_POINTS.LOGIN_INSTRUCTOR,instructorData)
}