import api from "../../middlewares/protected-interceptor";
import CONFIG_KEYS from "../../../config";
import axiosInstance from "../../middlewares/interceptor";

export const getLessonsByCourseService = async (
  endpoint: string,
  courseId: string
) => {
  const response = await axiosInstance.get(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}/${courseId}`
  );
  console.log("ok")
  return response.data;
};

export const addLessonsService = async (
  endpoint: string,
  courseId: string,
  lesson: FormData
) => {
  const response = await api.post(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}/${courseId}`,
    lesson
  );
  return response.data;
};

export const editLessonsService = async (
  endpoint: string,
  lessonId: string,
  lesson: FormData
) => {
  const response = await api.put(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}/${lessonId}`,
    lesson
  );
  return response.data;
};

export const getLessonsByIdService = async (
  endpoint: string,
  lessonId: string
) => {
  const response = await api.get(
    `${CONFIG_KEYS.API_BASE_URL}/${endpoint}/${lessonId}`
  );
  return response.data;
};