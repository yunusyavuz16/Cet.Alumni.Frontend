import React, { useState } from "react";
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
    <div className="flex items-center overflow-x-auto space-x-4">
      {options.map((option) => (
        <button
          key={option.termId}
          className={`cursor-pointer flex items-center  justify-center rounded px-4 py-2 text-sm font-medium ${
            selectedOption?.termId === option?.termId
              ? "bg-blue-500 text-white border-blue-500 active:bg-blue-500"
              : "bg-gray-200 text-gray-700 border-gray-200 active:bg-gray-200"
          }`}
          onClick={() => handleOptionChange(option)}
        >
          {option.termYear}
        </button>
      ))}
    </div>
  );
};

export default HorizontalScrollRadio;
