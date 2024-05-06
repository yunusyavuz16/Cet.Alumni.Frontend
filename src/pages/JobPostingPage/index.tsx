import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTitle from "../../hooks/useTitle";
import JobPostingList from "./components/JobPostingList";
import useJobPostings from "./hooks/useJobPostings";
import { faSearchMinus } from "@fortawesome/free-solid-svg-icons";

const JobPostingPage = () => {
  useTitle();
  const { jobPostings } = useJobPostings();
  console.log("useJobPostings", jobPostings);
  return (
    <div className="my-5 w-full flex items-center justify-center ">
      {jobPostings.length > 0 && <JobPostingList jobs={jobPostings} />}
      {jobPostings.length === 0 && (
        // search icon and text
        <div className="flex flex-col items-center justify-center w-full">
          <FontAwesomeIcon
            icon={faSearchMinus}
            className="text-5xl text-blue-500 mx-auto"
          />
          <div className="text-center text-blue-500  text-xl text-bold mt-6">
            Henüz ilan paylaşılmamış.
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPostingPage;
