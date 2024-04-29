import moment from "moment";
import { Job } from "../../../../../../models";

function JobRow({
  title,
  company,
  location,
  contactMail,
  contactPerson,
  jobDate,
}: Partial<Job>) {
  return (
    <div className="flex flex-col  p-4 hover:bg-slate-100">
      {/* use general job fields */}
      <div className="flex justify-between">
        <span className="text-black font-bold">{title}</span>
        <span className="text-gray-600">
          {moment(jobDate).format("DD MMM YYYY")}
        </span>
      </div>
      <div>
        <span className="text-slate-400">
          {company} - {location}
        </span>
      </div>
      <div>
        <span className="text-slate-400">
          {contactPerson} -{" "}
          <a href={contactMail} className="text-blue-500">
            {contactMail}
          </a>
        </span>
      </div>
    </div>
  );
}

export default JobRow;
