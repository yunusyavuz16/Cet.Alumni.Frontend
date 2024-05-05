import React from "react";

interface UserCardProps {
  firstName: string;
  lastName: string;
  profileDescription: string;
  sector: string;
  company: string;
  jobTitle: string;
  termYear: number;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const AlumniCard: React.FC<UserCardProps> = React.memo(
  ({
    firstName,
    lastName,
    sector,
    company,
    jobTitle,
    onClick: onclick,
    termYear,
  }) => {
    return (
      <div
        onClick={onclick}
        className="relative bg-white rounded-lg shadow-md p-6 w-full hover:bg-blue-100 cursor-pointer flex flex-col justify-center"
        style={{ minHeight: "250px" }} // Adjust the minHeight as needed
      >
        {/* Half circle */}
        <div
          className="absolute top-0 left-0 right-0 w-full bg-white rounded-b-full w-100 shadow-md -z-0 flex items-center justify-center"
          style={{ aspectRatio: 2 }}
        >
          <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-bold">
            {firstName[0]}
          </div>
        </div>

        <div className="flex  mb-4 justify-center">
          <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-bold">
            {firstName[0]}
          </div>
        </div>
        <div className="flex items-center  flex-col mt-12">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            {firstName} {lastName}
          </h2>
          <p className="text-gray-600 text-center">{termYear}'</p>
          <p className="text-gray-600 text-center">{jobTitle}</p>
          <p className="text-gray-600 text-center">
            {company} - {sector}
          </p>
        </div>
        <p className=" text-gray-700 text-center flex-grow w-100"></p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-3 w-100 max-w-48"
          onClick={onclick as any}
        >
          Görüntüle
        </button>
      </div>
    );
  }
);

export default AlumniCard;
