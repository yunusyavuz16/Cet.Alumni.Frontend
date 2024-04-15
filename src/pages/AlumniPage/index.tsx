import { useState } from "react";
import HorizontalScrollRadio from "./components/HorizontalScrollRadio";
import useTerm from "./hooks/useTerm";
import { ITerm } from "./models";
import AlumniContainer from "./components/AlumniContainer";

const AlumniPage = () => {
  const { terms } = useTerm();
  const [selectedOption, setSelectedOption] = useState<ITerm | undefined>(
    undefined
  );

  const handleOptionChange = (option: ITerm) => {
    if (selectedOption?.termId === option.termId) {
      setSelectedOption(undefined);
      return;
    }
    setSelectedOption(option);
    // Do something with the selected option
  };

  return (
    <div className="container mx-auto my-5 ">
      <HorizontalScrollRadio
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={terms}
        onChange={handleOptionChange}
      />
      <AlumniContainer termId={selectedOption?.termId} />
    </div>
  );
};

export default AlumniPage;
