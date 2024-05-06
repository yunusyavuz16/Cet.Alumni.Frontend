import { useEffect, useState } from "react";
import { JobPosting } from "../../JobPostingPage/hooks/useJobPostings";
import { API_URL } from "../../../shared/env";

export const useOwnJobPostings = (studentNo?: number) => {
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOwnJobPostings = async () => {
      if (!studentNo) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        // use fecth

        const response = await fetch(
          API_URL + `api/getJobPostingsByPublisherStudentNo/${studentNo}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Allow-Origin-Access-Control": "*",
            },
          }
        );
        const data = await response.json();
        console.log('getJobPostingsByPublisherStudentNo ',data);
        setJobPostings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOwnJobPostings();
  }, [studentNo]);

  return { jobPostings, isLoading };
};
