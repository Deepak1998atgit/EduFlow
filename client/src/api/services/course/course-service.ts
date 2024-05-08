import api from "../../middlewares/interceptor";
import axiosInstance from "../../middlewares/interceptor";
import CONFIG_KEYS from "../../../config";

export const addCourseService = async (
  endpoint: string,
  courseInfo: FormData
) => {
  const response = await api.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
    courseInfo
  );
  return response;
};