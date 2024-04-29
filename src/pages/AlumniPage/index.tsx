import { useState } from "react";
import AlumniContainer from "./components/AlumniContainer";
import HorizontalScrollRadio from "./components/HorizontalScrollRadio";
import useTerm from "./hooks/useTerm";
import { ITerm } from "./models";
import useTitle from "../../hooks/useTitle";

const AlumniPage = () => {
  useTitle();
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
