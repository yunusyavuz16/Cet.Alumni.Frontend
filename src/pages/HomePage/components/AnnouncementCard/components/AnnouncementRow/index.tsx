import moment from "moment";

const AnnouncementRow: React.FC<{
  anouncementDateTime: string;
  content: string;
}> = ({ anouncementDateTime, content }) => {
  return (
    <div className="flex flex-col  p-4 hover:bg-slate-100 ">
      <div className="flex gap-4 justify-start items-center">
        <span
          className="text-white p-1 bg-gray-500 text-sm rounded-sm whitespace-nowrap"
          style={{ whiteSpace: "nowrap !important" }}
        >
          {moment(anouncementDateTime).format("DD MMM YYYY")}
        </span>
        <span className="text-slate-400">{content}</span>
      </div>
    </div>
  );
};

export default AnnouncementRow;
