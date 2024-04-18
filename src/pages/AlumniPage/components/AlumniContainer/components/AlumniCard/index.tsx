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
    profileDescription,
    sector,
    company,
    jobTitle,
    onClick: onclick,
    termYear,
  }) => {
    return (
      <div
        onClick={onclick}
        className="bg-white rounded-lg shadow-md p-6 w-full hover:bg-blue-100 cursor-pointer"
      >
        <div className="flex items-center">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-bold">
              {firstName[0]}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {firstName} {lastName}
            </h2>
            <p className="text-gray-600">{termYear}'</p>
            <p className="text-gray-600">{jobTitle}</p>
            <p className="text-gray-600">
              {company} - {sector}
            </p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{profileDescription}</p>
      </div>
    );
  }
);

export default AlumniCard;
