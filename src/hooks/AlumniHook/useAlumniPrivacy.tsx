import { useEffect, useState } from "react";
import { API_URL } from "../../shared/env";
import { PrivacySetting } from "../../models";

export const useAlumniPrivacy = () => {
  const [privacySettings, setPrivacySettings] = useState<PrivacySetting[]>([]);
  const [privacyLoading, setPrivacyLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      API_URL.concat("api/getAlumniPrivacySettings"),
      {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          "Allow-Origin-Access-Control": "*",
        },
      }
    );
    const data = await response.json();
    setPrivacySettings(data);
    setPrivacyLoading(false);
  };
  return { privacySettings, privacyLoading };
};
