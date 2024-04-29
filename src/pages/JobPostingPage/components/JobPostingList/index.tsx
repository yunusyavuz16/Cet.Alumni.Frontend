import moment from "moment";
import React, { useLayoutEffect } from "react";
import { Job } from "../../../../models";

interface JobListProps {
  jobs: Job[];
}

const JobPostingList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          company={job.company}
          description={job.description}
          id={job.id}
          location={job.location}
          title={job.title}
          key={job.id}
          contactPerson={job.contactPerson}
          jobDate={job.jobDate}
          contactMail={job.contactMail}
        />
      ))}
    </div>
  );
};

const JobCard: React.FC<Job> = ({
  id,
  title,
  company,
  location,
  description,
  contactMail,
  contactPerson,
  jobDate,
}) => {
  return (
    <div
      key={id}
      className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:bg-blue-50"
    >
      {/* convert header left title right date */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-blue-950 ">{title}</h2>
        <p className="text-gray-600">{moment(jobDate).format("DD MMM YYYY")}</p>
      </div>
      <hr className="my-2" />

      <p className="text-gray-600">{company}</p>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-600">
        {contactPerson} -{" "}
        <a href={`mailto:${contactMail}`} className="text-blue-500">
          {contactMail}
        </a>
      </p>

      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
};

export default JobPostingList;
