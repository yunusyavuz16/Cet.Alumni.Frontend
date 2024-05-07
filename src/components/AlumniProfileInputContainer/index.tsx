import { useMemo } from "react";
import { useAlumniPrivacy } from "../../hooks/AlumniHook/useAlumniPrivacy";
import { IInputData } from "../../layout/Register/data";
import useTerm from "../../pages/AlumniPage/hooks/useTerm";
import AlumniDropdown from "../AlumniDropdown";
import AlumniInput from "../AlumniInput";
import SubmitButton from "../SubmitButton";

interface IContainer {
  handleFormSubmit?: React.FormEventHandler<HTMLFormElement>;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDropdownChange?: ((e: React.ChangeEvent<HTMLSelectElement>) => void) | undefined 
  isLoading: boolean;
  inputValues: {
    [key: string]: string | number | undefined;
  };
  inputData: IInputData[];
  inputContainerClassNames?: string;
  disabled?: boolean;
  showSubmitButton?: boolean;
}

function AlumniProfileInputContainer({
  handleFormSubmit,
  handleInputChange,
  inputValues,
  handleDropdownChange,
  isLoading,
  inputContainerClassNames,
  disabled,
  inputData,
  showSubmitButton,
}: IContainer) {
  const { terms } = useTerm();
  const { privacySettings } = useAlumniPrivacy();

  const convertTerms = useMemo(
    () =>
      terms.map((term) => ({
        value: term.termId,
        label: term.termYear,
      })),
    [terms]
  );

  const convertPrivacySettings = useMemo(
    () =>
      privacySettings.map((privacySetting) => ({
        value: privacySetting.alumniPrivacySettingId,
        label: privacySetting.displayName,
      })),
    [privacySettings]
  );

  return (
    <form
      className="mt-8 space-y-6"
      onSubmit={showSubmitButton ? handleFormSubmit : undefined}
    >
      <div
        className={`rounded-md shadow-sm -space-y-px grid grid-cols-1 gap-4 md:grid-cols-2 ${inputContainerClassNames}`}
      >
        {/* Map over the array of input properties */}
        {inputData?.map((input) =>
          input.isDropdown ? (
            <AlumniDropdown
              id={input.id}
              key={input.id}
              disabled={disabled}
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
              disabled={disabled}
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
      </div>
      {showSubmitButton && (
        <SubmitButton label="Giriş Yap" isLoading={isLoading} />
      )}
    </form>
  );
}

export default AlumniProfileInputContainer;
