import AnnouncementRow from "./components/AnnouncementRow";
import useAnnouncement from "./hooks/useAnnouncment";

function AnnouncementCard({}) {
  //state
  const { announcements } = useAnnouncement();

  return (
    <div className="lg:w-1/2 bg-white shadow-lg rounded-xl border-slate-100 border-2">
      <div className="flex justify-between p-4 border-b-2 border-b-stone-100">
        <span className="text-black  font-bold">Duyurular</span>
      </div>
      {/* body iş ilanları tarih isim ve açıklama */}
      {announcements.map((announcement) => (
        <AnnouncementRow
          key={announcement.announcementId}
          anouncementDateTime={announcement.anouncementDateTime}
          content={announcement.content}
        />
      ))}
    </div>
  );
}

export default AnnouncementCard;
