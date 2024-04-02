import { Carousel } from "flowbite-react";
import AnnouncementCard from "./components/AnnouncementCard";
import JobCard from "./components/JobCard";

const HomePage = () => {
  return (
    <div className="h-full w-full bg-inherit bg-slate-50 my-5">
      <div className=" sm:h-64 xl:h-80 2xl:h-96  w-full my-5 py-4 bg-white shadow-lg rounded-lg border-slate-100 border-2">
        <Carousel slideInterval={5000}>
          <div className="flex bg-blue-gray-50 h-100 p-5">
            <div>
              <img
                src="./img/boun-alumni.webp"
                alt="Alumni"
                width={"400px"}
                height={"auto"}
              />
            </div>
            <div className="flex justify-around items-center flex-col p-4">
              <span className="text-black text-3xl">
                Mezunlarımız ağırlıklı olarak x, y,z alanlarında çalışmaktadır
              </span>
              <div className="">
                <a className="text-indigo-700">Detayları incele</a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="flex gap-4 items-stretch mb-5  flex-col lg:flex-row">
        <JobCard />
        <AnnouncementCard />
      </div>
    </div>
  );
};

export default HomePage;
