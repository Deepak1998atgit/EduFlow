import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import decodeJwtToken from "../../utils/decodeJwt";
console.log('hhhhhhhhhhhhhhhhhhhhhhhaccessToken')
const accessToken = localStorage.getItem("accessToken");
console.log(accessToken, 'accessToken')
const decodedToken = decodeJwtToken(accessToken ?? "");
console.log(decodedToken, "jjjshssstokenssh")
const student = decodedToken?.payload;
console.log(student, "jjjshsssssssh")

const initialState = {
  data: {
    accessToken: accessToken,
  },
  isLoggedIn: accessToken ? true : false,
  userType: decodedToken?.payload?.role
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(
      state,
      action: PayloadAction<{ accessToken: string; userType: string }>
    ) {

      console.log(accessToken, 'accessToken reacllll')
      const decodedToken = decodeJwtToken(accessToken ?? "");
      console.log(decodedToken, "jjjshssstokenssh")
      const student = decodedToken?.payload;
      console.log(student, "jjjshsssssssh")
      localStorage.setItem(
        "accessToken",
        JSON.stringify({
          accessToken: action.payload.accessToken,
          student
        })
      );
      state.data = {
        accessToken: action.payload.accessToken,
      };
      state.isLoggedIn = true;
      state.userType = action.payload.userType
    },
    clearToken(state) {
      state.data = {
        accessToken: "",
      };
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      state.isLoggedIn = false;
      state.userType = "";
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.data;

export const selectAccessToken = (state: RootState) => {
  const accessTokenString: string | null = state.auth.data.accessToken;
  const accessToken = JSON.parse(accessTokenString ?? "")?.accessToken || "";
  return accessToken;
}
export const selectIsLoggedIn = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? true : false;
};

export const selectUserType = (state: RootState) => state.auth.userType

export const authReducer = authSlice.reducer;