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
        className="relative bg-white rounded-lg shadow-md md:p-6 px-3 py-6 w-auto md:w-full hover:bg-blue-100 cursor-pointer flex flex-col justify-center items-center"
        style={{ minHeight: "250px", maxHeight: "350px" }} // Adjust the minHeight as needed
      >
        {/* Half circle */}

        <div className="flex  mb-4 justify-center">
          <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-bold">
            {firstName[0]}
          </div>
        </div>
        <div className="flex items-center  flex-col mt-3">
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-3 w-100"
          onClick={onclick as any}
        >
          Görüntüle
        </button>
      </div>
    );
  }
);

export default AlumniCard;
