import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { IUser } from "../../models";

interface IState {
  user: IUser | null;

  isAuthenticated: boolean;
}

const initialState: IState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  initialState: initialState,
  name: "authReducer",
  reducers: {
    setUser(state: IState, action: { payload: IUser }) {
      state.user = action.payload;
    },
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectUser = (state: RootState) => state.auth.user;

export const mapStateToPropsAuth = (state: RootState) => ({
  isAuthenticated: selectIsAuthenticated(state),
});

export const mapStateToPropsAuthWithUser = (state: RootState) => ({
  isAuthenticated: selectIsAuthenticated(state),
  user: selectUser(state),
});

export const { setUser, loginSuccess, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
