import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setCookie } from "../../../shared/cookie";
import { loginSuccess, logout } from "../../../store/slices/authSlice";

export const loginUser = (token: string) => (dispatch: Dispatch<AnyAction>) => {
  setCookie("authToken", token, 7);

  dispatch(loginSuccess());
};

export const logoutUser = () => (dispatch: Dispatch<AnyAction>) => {
  setCookie("authToken", "", -1);

  dispatch(logout());
};
