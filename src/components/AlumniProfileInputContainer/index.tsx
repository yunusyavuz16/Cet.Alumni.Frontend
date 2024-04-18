import { IInputData } from "../../layout/Register/data";
import AlumniInput from "../AlumniInput";
import SubmitButton from "../SubmitButton";

interface IContainer {
  handleFormSubmit?: React.FormEventHandler<HTMLFormElement>;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  isLoading,
  inputContainerClassNames,
  disabled,
  inputData,
  showSubmitButton,
}: IContainer) {
  return (
    <form
      className="mt-8 space-y-6"
      onSubmit={showSubmitButton ? handleFormSubmit : undefined}
    >
      <div
        className={`rounded-md shadow-sm -space-y-px grid grid-cols-1 gap-4 md:grid-cols-2 ${inputContainerClassNames}`}
      >
        {/* Map over the array of input properties */}
        {inputData.map((input) => (
          <AlumniInput
            disabled={disabled}
            autoComplete={input.autoComplete}
            key={input.id}
            id={input.id}
            label={input.label}
            required={input.required}
            type={input.type}
            value={inputValues[input.id] || ""}
            handleInputChange={showSubmitButton ? handleInputChange : undefined}
          />
        ))}
      </div>
      {showSubmitButton && (
        <SubmitButton label="Giriş Yap" isLoading={isLoading} />
      )}
    </form>
  );
}

export default AlumniProfileInputContainer;
