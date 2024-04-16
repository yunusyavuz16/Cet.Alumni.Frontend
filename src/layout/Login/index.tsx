// Login.tsx

import React, { useLayoutEffect, useState } from "react";
import { API_URL, isDev } from "../../shared/env";
import { useDispatch } from "react-redux";
import { loginUser } from "./utils";
import Swal from "sweetalert2";
import CloseButton from "../../components/CloseButton";
import AlumniInput from "../../components/AlumniInput";
import SubmitButton from "../../components/SubmitButton";
import { setUser } from "../../store/slices/authSlice";
interface ILoginResponse {
  token: string;
  userId: number;
  firstName: string;
  lastName: string;
}
interface ILogin {
  onClose: () => void;
  handleShowRegister: () => void;
}

const Login: React.FC<ILogin> = ({ onClose, handleShowRegister }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(isDev ? "yunus.yavuz2@boun.edu.tr" : "");
  const [password, setPassword] = useState(isDev ? "123456" : "");
  const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false);

  useLayoutEffect(() => {
    // first scrolling to top and prevent scrolling on body when modal is open
    document.documentElement.scrollTop = 0;
    document.body.classList.add("overflow-hidden");
  }, []);

  const handleClose = () => {
    document.body.classList.remove("overflow-hidden");
    onClose();
  };

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      setIsLoadingLogin(true);

      const response = await fetch(API_URL.concat("api/auth/login"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Allow-Origin-Access-Control": "*",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        await Swal.fire({
          title: "Hata!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Tamam",
        });
        setIsLoadingLogin(false);

        return;
      }

      const { token, firstName, lastName }: ILoginResponse =
        await response.json();
      console.log("data", token);
      console.log("lastName", lastName);
      console.log("firstName", firstName);
      console.log("email", email);
      loginUser(token)(dispatch);
      dispatch(setUser({ email, firstName, lastName }));
      const { isConfirmed } = await Swal.fire({
        title: "Başarılı!",
        text: "Başarıyla giriş yaptınız.",
        icon: "success",
        confirmButtonText: "Tamam",
      });
      if (isConfirmed) {
        handleClose();
        setIsLoadingLogin(false);
      }
    } catch (error) {
      setIsLoadingLogin(false);
      await Swal.fire({
        title: "Hata!",
        text: error as any,
        icon: "error",
        confirmButtonText: "Tamam",
      });
    }
  };

  return (
    <div className="w-screen h-full absolute flex md:p-24 justify-center items-center bg-opacity-50 bg-gray-500 z-50">
      <div className=" w-screen h-screen md:w-2/3 md:h-auto flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 lg:pb-16 rounded-lg relative ">
        <div className="max-w-md w-full space-y-8">
          <CloseButton
            onClick={handleClose}
            classNames=" absolute top-0 right-0 mt-4 mr-4 hover:text-indigo-700"
          />
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <AlumniInput
                autoComplete="email"
                handleInputChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email address"
                required
                type="email"
                value={email}
              />
              <AlumniInput
                autoComplete="current-password"
                handleInputChange={(e) => setPassword(e.target.value)}
                id="password"
                label="Password"
                required
                type="password"
                value={password}
              />
            </div>

            <div onClick={handleShowRegister}>
              <h4 className="mt-6 text-start text-base cursor-pointer font-bold text-indigo-500 hover:text-indigo-700">
                Henüz bir hesabınız yok mu? Kayıt olun.
              </h4>
            </div>

            <SubmitButton label="Giriş Yap" isLoading={isLoadingLogin} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
