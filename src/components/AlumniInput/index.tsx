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
  type: React.HTMLInputTypeAttribute | undefined;
  autoComplete: string;
  required: boolean;
  value: string | number;
}) {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="text-blue-500">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={
          "appearance-none  relative block w-full px-3 py-2 border border-gray-300 h-12 rounded-md " +
          "placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
