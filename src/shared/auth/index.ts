import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { loginUser } from "../../layout/Login/utils";

export const useAuth = (dispatch: Dispatch<AnyAction>) => {
  useEffect(() => {
    const token = getCookie("authToken"); // Get token from cookie
    console.log("token", token);
    if (token) {
      // If token is present in the cookie, update Redux store and set isAuthenticated to true
      loginUser(token)(dispatch);
      // Fetch user info using the token
    }
  }, [dispatch]);
};

// Function to get cookie value
export const getCookie = (name: string) => {
  const cookieValue = document.cookie.match(
    "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : "";
};
