import moment from "moment";
import React from "react";
import { JobPosting } from "../../hooks/useJobPostings";

interface JobListProps {
  jobs: JobPosting[];
}

const JobPostingList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          companyName={job.companyName}
          description={job.description}
          location={job.location}
          title={job.title}
          key={job.jobPostId}
          contactPersonName={
            job.publisherStudentNoNavigation.firstName +
            " " +
            job.publisherStudentNoNavigation.lastName
          }
          datePosted={job?.datePosted}
          contactInfo={
            job.contactInfo ?? job.publisherStudentNoNavigation.emailAddress
          }
          responsibilities={job.responsibilities}
          requirements={job.requirements}
        />
      ))}
    </div>
  );
};

const JobCard: React.FC<
  Partial<JobPosting> & { contactPersonName: string }
> = ({
  title,
  companyName,
  location,
  description,
  contactInfo,
  contactPersonName,
  datePosted,
  responsibilities,
  requirements,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:bg-blue-50">
      {/* convert header left title right date */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-blue-950 ">{title}</h2>
        <p className="text-gray-600">
          {moment(datePosted).format("DD MMM YYYY")}
        </p>
      </div>
      <hr className="my-2" />

      <p className="text-gray-600">{companyName}</p>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-600">
        {contactPersonName} -{" "}
        <a href={`mailto:${contactInfo}`} className="text-blue-500">
          {contactInfo}
        </a>
      </p>

      <p className="mt-2 text-gray-500">
        <span className="font-bold text-black">Tanım: </span>
        {description}
      </p>
      <p className="mt-2 text-gray-500">
        <span className="font-bold text-black">Sorumluluklar: </span>
        {responsibilities}
      </p>
      <p className="mt-2 text-gray-500">
        <span className="font-bold text-black">Gereksinimler: </span>
        {requirements}
      </p>
    </div>
  );
};

export default JobPostingList;
