import api from "../../middlewares/protected-interceptor";
import axiosInstance from "../../middlewares/interceptor";
import CONFIG_KEYS from "../../../config";

export const addCourseService = async (
  endpoint: string,
  courseInfo: FormData
) => {
  console.log(courseInfo,"course")
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