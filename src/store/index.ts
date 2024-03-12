import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigAuth = {
  key: "authReducer",
  storage,
};

const persistConfig = {
  storage,
  key: "my_app",
};

export const rootReducer = combineReducers({
  auth: persistReducer(persistConfigAuth, authReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
