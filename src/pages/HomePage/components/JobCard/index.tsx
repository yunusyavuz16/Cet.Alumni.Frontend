import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobRow from "./components/JobRow";

function JobCard() {
  return (
    <div className="lg:w-1/2 bg-white shadow-lg rounded-xl border-slate-100 border-2">
      <div className="flex justify-between p-4 border-b-2 border-b-stone-100">
        <span className="text-black  font-bold">İş ve Staj İlanları</span>
        <a className="text-blue-500 hover:text-blue-700  cursor-pointer font-bold">
          {"Tümü "} <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      {/* body iş ilanları tarih isim ve açıklama */}
      <JobRow />
      <JobRow />
      <JobRow />
      <JobRow />
      <JobRow />
    </div>
  );
}

export default JobCard;
