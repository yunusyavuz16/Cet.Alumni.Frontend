import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobRow from "./components/JobRow";
import jobData from "../../../JobPostingPage/data";
import { useNavigate } from "react-router-dom";

function JobCard() {
  const navigate = useNavigate();
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
      {jobData.map((job) => (
        <JobRow
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
}

export default JobCard;
