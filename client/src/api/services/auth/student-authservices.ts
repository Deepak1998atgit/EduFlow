import CONFIG_KEYS from "../../../config";
import authInstanceAxios from "../../middlewares/interceptor";
import {
  StudentLoginData,
  StudentRegisterData,
} from "../../types/auth-interface";


export const login = async (endpoint: string, data: StudentLoginData) => {
  const response = await authInstanceAxios.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
    data
  );
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


export const sendOtpStudent = async (
  endpoint: string,
  mobile: string
) => {
  const data = {
    mobile,
  };
  const response = await authInstanceAxios.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
    data
  );
  return response.data
};


export const verifyOtpStudent = async (
  endpoint: string,
  otp: string,
  mobile:string
) => {
  const data = {
    mobile,
    otp,
  };
  const response = await authInstanceAxios.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
    data
  );
  return response.data
};


export const changePasswordAfterForgotU = async (
  endpoint: string,
  password: string,
  mobile: string
) => {
  const data = {
    password,
    mobile,
  };
  const response = await authInstanceAxios.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
    data
  );
  return response.data
};


