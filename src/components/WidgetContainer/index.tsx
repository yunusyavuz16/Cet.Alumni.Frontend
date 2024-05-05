import React from "react";
import CloseButton from "../CloseButton";
import SubmitButton from "../SubmitButton";

interface IWidgetContainer {
  // Define the props for the component here
  headetText: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  closeWidget: () => void;
  submitButtonText: string;
  isLoadingSubmit: boolean;
  children?: React.ReactNode;
}

const WidgetContainer: React.FC<IWidgetContainer> = ({
  headetText,
  closeWidget,
  submitButtonText,
  isLoadingSubmit,
  handleSubmit,
  children,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div
        className={
          "w-screen h-screen flex items-center justify-start bg-gray-50 p-6 px-4 relative flex-col gap-4 overflow-x-auto " +
          "md:w-2/3 md:h-auto py-6  md:rounded-lg"
        }
      >
        <div className="w-full">
          <h3 className=" text-center text-3xl font-extrabold text-gray-900">
            {headetText}
          </h3>
          <hr className="my-3 border-1 border-gray-300" />
        </div>
        <form className="w-full flex gap-4 flex-col" onSubmit={handleSubmit}>
          <div
            className={`rounded-md shadow-sm -space-y-px grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 `}
          >
            {/* Add the input fields here */}
            {children}
          </div>
          <SubmitButton label={submitButtonText} isLoading={isLoadingSubmit} />
        </form>
        <CloseButton
          classNames=" absolute top-0 right-0 mt-4 mr-4 hover:text-indigo-700"
          onClick={closeWidget}
        />
      </div>
    </div>
  );
};

export default WidgetContainer;
