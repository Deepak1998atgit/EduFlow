import END_POINTS from "../../../constants/endPoints";
import { login } from "../../services/auth/administration-auth-services";
import { AdminLoginInfo } from "@/api/types/admin/admin-auth-interface";

export const loginAdmin = (adminInfo:AdminLoginInfo)=>{
    return login(END_POINTS.LOGIN_ADMIN,adminInfo)
}