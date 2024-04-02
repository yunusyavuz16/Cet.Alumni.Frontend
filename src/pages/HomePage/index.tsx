import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { API_URL } from "../../shared/env";
import moment from "moment";
interface IAnnouncement {
  anouncementDateTime: string;
  content: string;
  id: number;
}

const HomePage = () => {
  return (
    <div className="h-full w-full bg-inherit bg-slate-50 my-5">
      <div className=" sm:h-64 xl:h-80 2xl:h-96  w-full my-5 py-4 shadow-gray-50">
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
                Mezunlarımız ağırlıklı olarak x, y,z alanlarında çalışmaktaıdır
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

function JobRow({}) {
  return (
    <div className="flex flex-col  p-4 hover:bg-slate-100">
      <div className="flex justify-between">
        <span className="text-black font-bold">A Firması, tekniker</span>
        <span className="text-gray-600">10 Şub 2024</span>
      </div>
      <div>
        <span className="text-slate-400">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
        </span>
      </div>
    </div>
  );
}

function JobCard({}) {
  return (
    <div className="lg:w-1/2 bg-white shadow-lg rounded-xl ">
      <div className="flex justify-between p-4 border-b-2 border-b-stone-100">
        <span className="text-black  font-bold">İş ve Staj İlanları</span>
        <a className="text-indigo-700  cursor-pointer font-bold">
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

function AnnouncementCard({}) {
  //state
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        API_URL.concat("api/announcement/getByLength/8"),
        {
          method: "Get",
          headers: {
            "Content-Type": "application/json",
            "Allow-Origin-Access-Control": "*",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setAnnouncements(data);
    };
    getData();
  }, []);
  return (
    <div className="lg:w-1/2 bg-white shadow-lg rounded-xl ">
      <div className="flex justify-between p-4 border-b-2 border-b-stone-100">
        <span className="text-black  font-bold">Duyurular</span>
        <a className="text-indigo-700  cursor-pointer font-bold">
          {"Tümü "} <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      {/* body iş ilanları tarih isim ve açıklama */}
      {announcements.map((announcement) => (
        <AnnouncementRow
          key={announcement.id}
          anouncementDateTime={announcement.anouncementDateTime}
          content={announcement.content}
        />
      ))}
    </div>
  );
}

const AnnouncementRow: React.FC<{
  anouncementDateTime: string;
  content: string;
}> = ({ anouncementDateTime, content }) => {
  return (
    <div className="flex flex-col  p-4 hover:bg-slate-100">
      <div className="flex gap-4 justify-start">
        <span className="text-white p-1 bg-gray-500 text-sm rounded-sm">
          {moment(anouncementDateTime).format("DD MMM YYYY")}
        </span>
        <span className="text-slate-400">{content}</span>
      </div>
    </div>
  );
};

export default HomePage;
