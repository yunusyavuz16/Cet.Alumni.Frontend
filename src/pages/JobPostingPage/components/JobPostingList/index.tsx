import React from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  contactPerson: string;
  contactMail: string;
}

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
          contactMail={job.contactMail}
        />
      ))}
    </div>
  );
};

const JobCard: React.FC<{
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  contactPerson?: string;
  contactMail?: string;
}> = ({
  id,
  title,
  company,
  location,
  description,
  contactMail,
  contactPerson,
}) => {
  return (
    <div key={id} className="bg-white shadow-md rounded-lg p-4 pb-2">
      <h2 className="text-xl font-bold text-blue-900 mb-3">{title}</h2>
      <p className="text-gray-600">{company}</p>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-600">
        {contactPerson} -{" "}
        <a href={`mailto:${contactMail}`} className="text-blue-500">
          {contactMail}
        </a>
      </p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default JobPostingList;
