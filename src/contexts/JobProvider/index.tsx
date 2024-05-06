import React, { createContext, useContext, useState } from "react";
import { JobPosting } from "../../pages/JobPostingPage/hooks/useJobPostings";

const defaultContext = {
  hideJobPost: true,
  handleJobPostVisibility: (partialJob?: Partial<JobPosting>) => {},
  initialJobPost: {} as Partial<JobPosting>,
};

const JobVisibilityContext = createContext(defaultContext);

export const useJobVisibility = () => {
  return useContext(JobVisibilityContext);
};

export const JobVisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hideJobPost, setHideJobPost] = useState(true);
  const [initialJobPost, setInitialJobPost] = useState(
    {} as Partial<JobPosting>
  );

  const handleJobPostVisibility = (partialJob?: Partial<JobPosting>) => {
    setHideJobPost((prev) => !prev);
    if (partialJob) {
      setInitialJobPost(partialJob);
    }
  };

  return (
    <JobVisibilityContext.Provider
      value={{ hideJobPost, handleJobPostVisibility, initialJobPost }}
    >
      {children}
    </JobVisibilityContext.Provider>
  );
};
