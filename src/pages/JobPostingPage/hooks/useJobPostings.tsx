import { useEffect, useState } from "react";
import { API_URL } from "../../../shared/env";
import { Alumni } from "../../../models";

export interface JobPosting {
  jobPostId: number;
  title: string;
  description: string;
  companyName: string;
  location: string;
  publisherStudentNo: number;
  jobPostTypeId: number;
  datePosted: Date | string;
  deadline: Date | string;
  requirements: string;
  responsibilities: string;
  contactInfo: string;
  jobPostType: string;
  contactFullName: string;
  publisherStudentNoNavigation: Alumni;
}

const useJobPostings = () => {
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(API_URL.concat("api/getAllJobPostings"), {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        "Allow-Origin-Access-Control": "*",
      },
    });
    const data = await response.json();
    setJobPostings(data);
    setLoading(false);
  };
  return { jobPostings, loading };
};

export default useJobPostings;
