// Register.tsx

import React, { useState } from "react";
import { API_URL } from "../../shared/env";
import { inputProps } from "./data";
import CloseButton from "../../components/CloseButton";

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

  const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false);

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
      setIsLoadingLogin(true);

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
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setIsLoadingLogin(false);
      return data;
    } catch (error) {
      setIsLoadingLogin(false);
    }
  };

  return (
    <div className="w-screen h-screen absolute flex md:p-24 justify-center items-center bg-opacity-50 bg-gray-500 z-10">
      <div className=" w-screen  md:w-2/3 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg relative">
        <div className="max-w-md w-full space-y-8">
          <CloseButton
            onClick={onClose}
            classNames="absolute top-0 right-0 mt-4 mr-4"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Hesap Oluştur
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <div className="rounded-md shadow-sm -space-y-px">
              {/* Map over the array of input properties */}
              {inputProps.map((input) => (
                <AlumniInput
                  autoComplete={input.autoComplete}
                  key={input.id}
                  id={input.id}
                  label={input.label}
                  required={input.required}
                  type={input.type}
                  value={inputValues[input.id] || ""}
                  handleInputChange={handleInputChange}
                />
              ))}
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoadingLogin}
                className={
                  "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm" +
                  " font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" +
                  " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " +
                  (isLoadingLogin
                    ? "disabled bg-indigo-300 hover:bg-indigo-300"
                    : "")
                }
              >
                {isLoadingLogin ? "Yükleniyor..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

function AlumniInput({
  handleInputChange,
  id,
  label,
  type,
  autoComplete,
  required,
  value,
}: {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  type: string;
  autoComplete: string;
  required: boolean;
  value: string | number;
}) {
  return (
    <div key={id}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={
          "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 " +
          "placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        }
        placeholder={label}
        value={
          value
          //  inputValues[input.id] || ""
        }
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Register;
