import CONFIG_KEYS from "../../../config";
import authInstanceAxios from "../../middlewares/interceptor";
import {
  StudentLoginData,
  StudentRegisterData,
} from "../../types/auth-interface";


export const login = async (endpoint: string, data: StudentLoginData) => {
  console.log(data, "jjjjj")
  const response = await authInstanceAxios.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
    data
  );
  console.log(data, "jjjjj")
  return response;
};

export const register = async (
  endpoint: string,
  studentData: StudentRegisterData
) => {
  const response = await authInstanceAxios.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
    studentData
  );
  console.log(studentData, "jjjjj")
  return response;
};

export const googleLoginStudent = async (
  endpoint: string,
  credential: string
) => {
  const data = {
    credential,
  };
  const response = await authInstanceAxios.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
    data
  );
  
  return response.data
};


export const googleLoginInstructor = async (
  endpoint: string,
  credential: string
) => {
  const data = {
    credential,
  };
  const response = await authInstanceAxios.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
    data
  );
  
  return response.data
};