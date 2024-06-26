import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import useJobPostings from "../../../JobPostingPage/hooks/useJobPostings";
import JobRow from "./components/JobRow";
import { NoJobFound } from "../../../JobPostingPage/components/NoJobFound";

function JobCard() {
  const navigate = useNavigate();
  const { jobPostings } = useJobPostings();
  const top5 = jobPostings.slice(0, 5);
  return (
    <div className="lg:w-1/2 bg-white shadow-lg rounded-xl border-slate-100 border-2">
      <div className="flex justify-between p-4 border-b-2 border-b-stone-100">
        <span className="text-black  font-bold">İş ve Staj İlanları</span>
        <a
          className="text-blue-500 hover:text-blue-700  cursor-pointer font-bold"
          onClick={() => {
            navigate("/job-postings");
          }}
        >
          {"Tümü "} <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      {/* body iş ilanları tarih isim ve açıklama */}
      {top5.map((job) => (
        <JobRow
          company={job.companyName}
          description={job.description}
          id={job.jobPostId}
          location={job.location}
          title={job.title}
          key={job.jobPostId}
          contactPerson={
            job.publisherStudentNoNavigation.firstName +
            " " +
            job.publisherStudentNoNavigation.lastName
          }
          jobDate={job?.datePosted?.toString()}
          contactMail={job.contactInfo}
        />
      ))}
      <div className="flex items-center justify-center h-full">{top5.length === 0 && <NoJobFound />}</div>
    </div>
  );
}

export default JobCard;
