import { refreshTokenService } from "../../services/auth/token-refresh-service";
import END_POINTS from "../../../constants/endPoints";

export const refreshTokenApi = (refreshToken:string) => {
    return refreshTokenService(END_POINTS.REFRESH_TOKEN, refreshToken);
};
