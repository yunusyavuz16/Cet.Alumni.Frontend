const AlumniTextArea = ({
  handleInputChange,
  id,
  label,
  value,
  required,
  disabled,
}: {
  handleInputChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  label: string;
  value: string | number | undefined;
  required: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="text-blue-500">
        {label}
        {/* if required add red * */}
        {required ? <span className="text-red-500">*</span> : null}
      </label>
      <textarea
        id={id}
        name={id}
        disabled={disabled}
        required={required}
        className={
          "appearance-none  relative block w-full md:w-56 xl:w-full px-3 py-2 border border-gray-300 h-12 rounded-md " +
          "placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm disabled:bg-gray-200 "
        }
        placeholder={label}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default AlumniTextArea;
