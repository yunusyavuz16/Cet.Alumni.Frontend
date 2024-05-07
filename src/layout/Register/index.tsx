// Register.tsx

import React, { useLayoutEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import AlumniInput from "../../components/AlumniInput";
import WidgetContainer from "../../components/WidgetContainer";
import { API_URL } from "../../shared/env";
import { inputProps } from "./data";
import AlumniDropdown from "../../components/AlumniDropdown";
import useTerm from "../../pages/AlumniPage/hooks/useTerm";
import { useAlumniPrivacy } from "../../hooks/AlumniHook/useAlumniPrivacy";

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
  const { terms } = useTerm();
  const { privacySettings } = useAlumniPrivacy();

  const convertTerms = useMemo(() => {
    let data: any[] = [];
    data.push({ value: "", label: "Dönem Seçiniz" });
    const newTerms = terms.map((term) => ({
      value: term.termId,
      label: term.termYear,
    }));
    data = data.concat(newTerms);

    return data;
  }, [terms]);

  const convertPrivacySettings = useMemo(() => {
    let data: any[] = [{ value: "", label: "Gizlilik Seçiniz" }];

    const newData = privacySettings.map((privacySetting) => ({
      value: privacySetting.alumniPrivacySettingId,
      label: privacySetting.displayName,
    }));
    data = data.concat(newData);
    return data;
  }, [privacySettings]);

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

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleRegister: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      setLoadingRegister(true);
      if (!inputValues.alumniPrivacySettingId || !inputValues.termId) {
        await Swal.fire({
          title: "Hata!",
          text: "Gizlilik ve dönem seçimi yapmalısınız.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
        setLoadingRegister(false);
        return;
      }
      const copyData = {
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        email: inputValues.email,
        password: inputValues.password,
        alumniPrivacySettingId: inputValues.alumniPrivacySettingId,
        sector: inputValues.sector,
        company: inputValues.company,
        jobTitle: inputValues.jobTitle,
        alumniStudentNo: inputValues.alumniStudentNo,
        termId: inputValues.termId,
        alumniProfileDescription: inputValues.alumniProfileDescription,
      };

      const response = await fetch(`${API_URL}api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Allow-Origin-Access-Control": "*",
        },
        body: JSON.stringify(copyData),
      });

      if (!response.ok) {
        const errorMessage =
          `${response.status} ${response.statusText}` + (await response.text());
        // error alert
        await Swal.fire({
          title: "Hata!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Tamam",
        });
        setLoadingRegister(false);
        return;
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
    <WidgetContainer
      closeWidget={handleClose}
      handleSubmit={handleRegister}
      headetText="Hesap Oluştur"
      submitButtonText="Kayıt Ol"
      isLoadingSubmit={isLoadingRegister}
    >
      {inputProps.register.map((input) =>
        input.isDrowdown ? (
          <AlumniDropdown
            id={input.id}
            key={input.id}
            label={input.label}
            required={input.required}
            value={inputValues[input.id] || ""}
            options={
              input.id === "termId"
                ? convertTerms
                : (convertPrivacySettings as any)
            }
            handleInputChange={handleDropdownChange}
          />
        ) : (
          <AlumniInput
            disabled={false}
            autoComplete={input.autoComplete}
            key={input.id}
            id={input.id}
            label={input.label}
            required={input.required}
            type={input.type}
            value={inputValues[input.id] || ""}
            handleInputChange={handleInputChange}
          />
        )
      )}
    </WidgetContainer>
  );
};

export default Register;
