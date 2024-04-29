import React from "react";

interface PageHeaderProps {
  pageTitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageTitle }) => {
  return (
    <div className="bg-white py-6 px-4 sm:px-6 lg:px-8 rounded-md shadow-md mb-3 border border-gray-100   absolute top-28 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold leading-tight text-blue-500 ">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
