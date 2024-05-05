import useTitle from "../../hooks/useTitle";
import JobPostingList from "./components/JobPostingList";
import useJobPostings from "./hooks/useJobPostings";

const JobPostingPage = () => {
  useTitle();
  const { jobPostings } = useJobPostings();
  console.log("useJobPostings", jobPostings);
  return (
    <div className="my-5">
      <JobPostingList jobs={jobPostings} />
    </div>
  );
};

export default JobPostingPage;
