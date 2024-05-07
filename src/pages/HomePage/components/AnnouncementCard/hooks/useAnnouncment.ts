import { useEffect, useState } from "react";
import { IAnnouncement } from "../models";
import { API_URL } from "../../../../../shared/env";

const useAnnouncement = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    getData();
  }, []);

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
    setAnnouncements(data);
  };
  return { announcements };
};

export default useAnnouncement;
