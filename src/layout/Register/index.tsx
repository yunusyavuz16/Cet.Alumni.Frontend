// Register.tsx

import React, { useLayoutEffect, useState } from "react";
import Swal from "sweetalert2";
import AlumniProfileInputContainer from "../../components/AlumniProfileInputContainer";
import CloseButton from "../../components/CloseButton";
import { API_URL } from "../../shared/env";
import { inputProps } from "./data";

interface Props {
  onClose: () => void;
}

const Register: React.FC<Props> = ({ onClose }) => {
  // State variables for input values
  const [inputValues, setInputValues] = useState<{
    [key: string]: string | number | undefined;
  }>({
    alumniStudentNo: undefined,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
    alumniPrivacySettingId: undefined,
    termId: undefined,
    jobTitle: "",
    sector: "",
    alumniProfileDescription: "",
  });

  const [isLoadingRegister, setLoadingRegister] = useState<boolean>(false);

  useLayoutEffect(() => {
    // first scrolling to top and prevent scrolling on body when modal is open
    document.documentElement.scrollTop = 0;
    document.body.classList.add("overflow-hidden");
  }, []);

  const handleClose = () => {
    document.body.classList.remove("overflow-hidden");
    onClose();
  };

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if it is numeric then parse
    if (e.target.type === "number") {
      setInputValues({
        ...inputValues,
        [e.target.name]: parseInt(e.target.value),
      });
      return;
    }
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleRegister: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      setLoadingRegister(true);

      const response = await fetch(`${API_URL}api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Allow-Origin-Access-Control": "*",
        },
        body: JSON.stringify(inputValues),
      });

      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        // error alert
        await Swal.fire({
          title: "Hata!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Tamam",
        });
      }

      const data = await response.json();
      // if error show alert not show success alert
      const { isConfirmed } = await Swal.fire({
        title: "Başarılı!",
        text: "Başarıyla kayıt oldunuz. Ancak lütfen example@gmail.com e-posta gönderek hesabınızı doğrulatınız.",
        icon: "success",
        confirmButtonText: "Tamam",
      });
      if (isConfirmed) {
        handleClose();
        setLoadingRegister(false);
      }
      return data;
    } catch (error) {
      setLoadingRegister(false);
    }
  };

  return (
    <div className="w-screen h-screen absolute flex md:p-24 justify-center items-center bg-opacity-50 bg-gray-500 z-10">
      <div className=" w-screen  md:w-2/3 flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 rounded-lg relative">
        <div className=" w-full space-y-8">
          <CloseButton
            onClick={handleClose}
            classNames="absolute top-0 right-0 mt-4 mr-4"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Hesap Oluştur
          </h2>
          <AlumniProfileInputContainer
            handleFormSubmit={handleRegister}
            handleInputChange={handleInputChange}
            isLoading={isLoadingRegister}
            inputValues={inputValues}
            inputData={inputProps.register}
            showSubmitButton={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
