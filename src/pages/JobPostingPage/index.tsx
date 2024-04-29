import useTitle from "../../hooks/useTitle";
import JobPostingList from "./components/JobPostingList";
import jobData from "./data";

const JobPostingPage = () => {
  useTitle();
  return (
    <div className="my-5">
      <JobPostingList jobs={jobData} />
    </div>
  );
};

export default JobPostingPage;
