import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AlumniProfileInputContainer from "../../components/AlumniProfileInputContainer";
import useAlumniByStudentNo from "../../hooks/AlumniHook/useAlumniByStudentNo";
import useTitle from "../../hooks/useTitle";
import { inputProps } from "../../layout/Register/data";
import { RootState } from "../../store";
import { JobCard } from "../JobPostingPage/components/JobPostingList";
import { useOwnJobPostings } from "./hooks/useOwnJobPostings";
import { useJobVisibility } from "../../contexts/JobProvider";
import { useCallback } from "react";
import { getCookie } from "../../shared/auth";
import { API_URL } from "../../shared/env";

const ProfilePage = () => {
  useTitle();
  const { alumniStudentNo } = useParams();
  const studentNo = useSelector(
    (state: RootState) => state.auth.user?.studentNo
  );
  const { alumni } = useAlumniByStudentNo(
    alumniStudentNo ? Number(alumniStudentNo) : studentNo ?? -1
  );
  const { jobPostings } = useOwnJobPostings(studentNo);
  const isOwnProfile =
    alumniStudentNo === undefined || alumniStudentNo === studentNo?.toString();
  const { handleJobPostVisibility } = useJobVisibility();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

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

  return (
    <div className="flex flex-col w-full">
      <div className="my-3 w-full bg-white p-5 md:shadow-lg md:rounded-lg">
        {/* profile photo edit */}
        <div className="flex justify-start">
          <div className="relative">
            {/* firstName first letter*/}
            <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center md:border-gray-200 md:border">
              {"Y"}
            </div>
            <div className="absolute -bottom-4 right-0">
              <button className="bg-white text-blue-500 rounded-full p-2">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </div>
          <div className=" flex items-center px-4 font-bold text-blue-500 text-xl">
            {alumni && alumni["firstName" as any]?.toString()}{" "}
            {alumni && alumni["lastName" as any]?.toString()}
          </div>
        </div>
        {alumni && (
          <AlumniProfileInputContainer
            handleDropdownChange={handleDropdownChange}
            handleInputChange={handleInputChange}
            inputData={inputProps.profile}
            disabled={true}
            inputContainerClassNames="md:grid-cols-3 "
            //@ts-ignore
            inputValues={alumni}
            isLoading={false}
          />
        )}
      </div>

      {isOwnProfile && jobPostings.length > 0 && (
        // paylaştığım ilanlar header
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
      )}
    </div>
  );
};

export default ProfilePage;
