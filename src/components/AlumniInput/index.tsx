function AlumniInput({
  handleInputChange,
  id,
  label,
  type,
  autoComplete,
  required,
  value,
  disabled,
}: {
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  type: React.HTMLInputTypeAttribute | undefined;
  autoComplete: string;
  required: boolean;
  value: string | number;
  disabled?: boolean;
}) {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="text-blue-500">
        {label}
        {/* if required add red * */}
        {required ? <span className="text-red-500">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        disabled={disabled}
        autoComplete={autoComplete}
        required={required}
        className={
          "appearance-none  relative block w-full px-3 py-2 border border-gray-300 h-12 rounded-md " +
          "placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm disabled:bg-gray-200 "
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

export default AlumniInput;
