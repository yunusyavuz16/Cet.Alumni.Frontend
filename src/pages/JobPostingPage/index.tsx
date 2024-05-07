import useTitle from "../../hooks/useTitle";
import JobPostingList from "./components/JobPostingList";
import { NoJobFound } from "./components/NoJobFound";
import useJobPostings from "./hooks/useJobPostings";

const JobPostingPage = () => {
  useTitle();
  const { jobPostings } = useJobPostings();
  return (
    <div className="my-5 w-full flex items-center justify-center ">
      {jobPostings.length > 0 && <JobPostingList jobs={jobPostings} />}
      {jobPostings.length === 0 && (
        // search icon and text
        <NoJobFound />
      )}
    </div>
  );
};

export default JobPostingPage;
