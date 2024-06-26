import useTitle from "../../hooks/useTitle";
import AnnouncementCard from "./components/AnnouncementCard";
import JobCard from "./components/JobCard";

const HomePage = () => {
  useTitle();
  return (
    <div className="h-full w-full bg-inherit bg-slate-50 ">
      {/* <div className=" sm:h-64 xl:h-80 2xl:h-96  w-full my-5 py-4 bg-white shadow-lg rounded-lg border-slate-100 border-2">
        <div className="flex bg-blue-gray-50 h-100 p-5">
          <div className="w-96 min-w-32 min-h-32 h-full flex justify-center">
            <img
              className=" h-auto max-w-72"
              src="./img/boun-alumni.webp"∏
              alt="Alumni"
            />
          </div>
          <div className="flex justify-around items-center flex-col p-4">
            <span className="text-black text-3xl text-center">
              Mezunlarımız ağırlıklı olarak x,y,z alanlarında çalışmaktadır
            </span>
            <div className="">
              <a className="text-blue-500 hover:text-blue-700">
                Detayları incele <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex gap-4 items-stretch mb-5  flex-col lg:flex-row">
        <JobCard />
        <AnnouncementCard />
      </div>
    </div>
  );
};

export default HomePage;
