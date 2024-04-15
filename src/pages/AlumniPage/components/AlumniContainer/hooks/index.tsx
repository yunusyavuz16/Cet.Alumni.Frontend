import { useEffect, useState } from "react";
import { API_URL } from "../../../../../shared/env";
import { IAlumni } from "../../../models";

// get alumni by term id

const useAlumniByTermId = (termId?: number) => {
  const [alumni, setAlumni] = useState<IAlumni[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getAlumniByTermId = async () => {
    if (!termId) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        API_URL.concat(`api/alumni/getAlumniByTerm/${termId}`),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Allow-Origin-Access-Control": "*",
          },
        }
      );
      const data = await response.json();
      setAlumni(data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAlumniByTermId();
  }, [termId]);

  return { alumni, loading, error };
};

const useAlumni = () => {
  const [allAlumni, setAllAlumni] = useState<IAlumni[]>([]);
  const [loadingInitialAlumni, setLoadingInitialAlumni] =
    useState<boolean>(false);
  const [errorInitialAlumni, setErrorInitialAlumni] = useState<string | null>(
    null
  );

  const getAlumni = async () => {
    setLoadingInitialAlumni(true);
    try {
      const response = await fetch(API_URL.concat("api/alumni/getAllAlumni"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Allow-Origin-Access-Control": "*",
        },
      });
      const data = await response.json();
      setAllAlumni(data);
      setLoadingInitialAlumni(false);
    } catch (error: any) {
      setErrorInitialAlumni(error);
      setLoadingInitialAlumni(false);
    }
  };

  useEffect(() => {
    getAlumni();
  }, []);

  return { allAlumni, loadingInitialAlumni, errorInitialAlumni };
};

export { useAlumniByTermId, useAlumni };
