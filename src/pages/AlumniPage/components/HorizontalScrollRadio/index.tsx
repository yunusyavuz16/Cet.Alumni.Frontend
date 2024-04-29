import React from "react";
import { ITerm } from "../../models";

const HorizontalScrollRadio = ({
  options,
  selectedOption,
  setSelectedOption,
  onChange,
}: {
  options: ITerm[];
  onChange: (option: ITerm) => void;
  setSelectedOption: React.Dispatch<React.SetStateAction<ITerm | undefined>>;
  selectedOption: ITerm | undefined;
}) => {
  const handleOptionChange = (option: ITerm) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="flex items-center overflow-x-auto space-x-3">
      {
        <YearButton
          selectedOption={
            !selectedOption ? ({ termId: -1, termYear: "Tümü" } as ITerm) : undefined
          }
          option={{ termId: -1, termYear: "Tümü" } as ITerm}
          handleOptionChange={() => setSelectedOption(undefined) as any}
        />
      }
      {options.map((option) => (
        <YearButton
          selectedOption={selectedOption}
          option={option}
          handleOptionChange={handleOptionChange}
        />
      ))}
    </div>
  );
};

function YearButton({
  selectedOption,
  option,
  handleOptionChange,
}: {
  selectedOption: ITerm | undefined;
  option: ITerm;
  handleOptionChange: (option: ITerm) => void;
}) {
  return (
    <div
      key={option.termId}
      className={`cursor-pointer flex items-center justify-center rounded px-4 py-2 text-sm font-medium  ${
        selectedOption?.termId === option?.termId
          ? "bg-blue-500 text-white border-blue-500 active:bg-blue-500 hover:border-blue-500 hover:bg-blue-700"
          : "bg-gray-200 text-gray-700 border-gray-200 active:bg-gray-200 hover:border-gray-200 hover:bg-blue-100"
      }`}
      onClick={() => handleOptionChange(option)}
    >
      {option.termYear}
    </div>
  );
}

export default HorizontalScrollRadio;
