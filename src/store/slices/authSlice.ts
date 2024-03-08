import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  email: string;
  password: string;
}

interface IState {
  user: IUser | null;
}

const initialState: IState = { user: null };

export const authSlice = createSlice({
  initialState: initialState,
  name: "authReducer",
  reducers: {
    setUser(state: IState, action: { payload: IUser }) {
      state.user = action.payload;
    },
  },
});


export const {setUser} = authSlice.actions;
export const authReducer = authSlice.reducer;