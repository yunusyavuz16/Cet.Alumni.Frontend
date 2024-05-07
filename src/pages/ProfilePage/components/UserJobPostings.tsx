import { useCallback } from "react";
import { useJobVisibility } from "../../../contexts/JobProvider";
import { useOwnJobPostings } from "../hooks/useOwnJobPostings";
import { getCookie } from "../../../shared/auth";
import { API_URL } from "../../../shared/env";
import { JobCard } from "../../JobPostingPage/components/JobPostingList";

function UserJobPostings({ studentNo }: any) {
  const { jobPostings } = useOwnJobPostings(studentNo);
  const { handleJobPostVisibility } = useJobVisibility();

  const handleClickJobCardEdit = useCallback(
    (jobPostingId: number) => () => {
      const findItem = jobPostings.find(
        (jobPosting) => jobPosting.jobPostId === jobPostingId
      );
      if (findItem) {
        handleJobPostVisibility(findItem);
      }
    },
    [jobPostings, handleJobPostVisibility]
  );

  const handleDeleteButton = useCallback(
    (jobPostId: number) => async () => {
      const response = await fetch(
        API_URL + `api/deleteJobPosting/${jobPostId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${getCookie("authToken")}`,
          },
        }
      );
      if (response.ok) {
        console.log("deleted");
        window.location.reload();
      }
    },
    [getCookie]
  );

  if (!jobPostings || jobPostings.length === 0) {
    return null;
  }

  return (
    <div className="my-3 w-full    md:rounded-lg z-10 border-b-2">
      <div className="bg-white flex justify-between p-4 border-b-2 border-b-stone-100 shadow-md  rounded-s rounded-e ">
        <span className="text-black  font-bold">Paylaştığım İlanlar</span>
      </div>
      <div className="flex space-y-3 flex-col mt-3">
        {jobPostings.map((jobPosting) => (
          <JobCard
            isDelete={true}
            handleDeleteButton={handleDeleteButton(jobPosting.jobPostId)}
            handleEditButton={handleClickJobCardEdit(jobPosting.jobPostId)}
            showEditButton={true}
            contactPersonName={jobPosting.contactFullName}
            deadline={jobPosting.deadline}
            companyName={jobPosting.companyName}
            requirements={jobPosting.requirements}
            responsibilities={jobPosting.responsibilities}
            key={jobPosting.jobPostId}
            contactInfo={jobPosting.contactInfo}
            contactFullName={jobPosting.contactFullName}
            description={jobPosting.description}
            datePosted={jobPosting.datePosted.toString()}
            location={jobPosting.location}
            title={jobPosting.title}
          />
        ))}
      </div>
    </div>
  );
}


export default UserJobPostings;