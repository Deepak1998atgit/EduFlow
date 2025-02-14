import api from "../../middlewares/protected-interceptor";
import axiosInstance from "../../middlewares/interceptor";
import CONFIG_KEYS from "../../../config";
import { PaymentIntent } from "@stripe/stripe-js";

export const addCourseService = async (
  endpoint: string,
  courseInfo: FormData
) => {
  console.log(courseInfo, "course")
  const response = await api.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
    courseInfo
  );
  return response;
};


export const getAllCoursesService = async (endpoint: string) => {
  const response = await axiosInstance.get(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`
  );
  return response;
};


export const getCoursesByInstructorService = async (endpoint: string) => {
  const response = await api.get(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`
  );
  return response.data;
};

export const getIndividualCourseService = async (
  endpoint: string,
  courseId: string
) => {
  const response = await axiosInstance.get(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}/${courseId}`
  );
  return response;
};


export const deleteCourseByIdService = async (
  endpoint: string,
  courseId: string
) => {
  const response = await api.delete(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}/${courseId}`
  );
  return response;
};



export const enrollStudentService = async (
  endpoint: string,
  courseId: string,
  paymentInfo?: PaymentIntent
) => {
  const response = await api.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}/${courseId}`,
    paymentInfo
  );
  return response.data;
};


export const getCourseByStudentService = async (endpoint: string) => {
  const response = await api.get(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`
  );
  return response.data;
};
