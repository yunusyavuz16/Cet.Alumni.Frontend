import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'authReducer',
  storage,
}


export const rootReducer = combineReducers({
  
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
