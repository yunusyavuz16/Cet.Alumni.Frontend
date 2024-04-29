// // get terms

import { useEffect, useState } from "react";
import { ITerm } from "../../pages/AlumniPage/models";
import { API_URL } from "../../shared/env";
import { getCookie } from "../../shared/auth";

const useAlumniByStudentNo = (studentNo: number) => {
  const [alumni, setAlumni] = useState<{
    [key: string]: string | number | boolean | Date | ITerm | undefined;
  } | null>(null);

  useEffect(() => {
    getData();
  }, [studentNo]);

  const getData = async () => {
    console.log("data fetch");
    console.log("token", getCookie("authToken")?.trim());
    const response = await fetch(
      API_URL.concat(`api/alumni/getAlumniByAlumniStudentNo/${studentNo}`),
      {
        method: "Get",
        headers: {
          Authorization: `Bearer ${getCookie("authToken")?.trim()}`,
          "Content-Type": "application/json",
          "Allow-Origin-Access-Control": "*",
        },
      }
    );
    const data = await response.json();
    setAlumni(data);
  };
  return { alumni };
};

export default useAlumniByStudentNo;
