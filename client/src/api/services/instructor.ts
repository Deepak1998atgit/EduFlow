import api from "../middlewares/protected-interceptor";
import CONFIG_KEYS from "../../config";

export const getMyStudentsService = async (endpoint: string) => {
    const response = await api.get(
        `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`
    );
    return response.data;
};