import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AlumniProfileInputContainer from "../../components/AlumniProfileInputContainer";
import useAlumniByStudentNo from "../../hooks/AlumniHook/useAlumniByStudentNo";
import useTitle from "../../hooks/useTitle";
import { inputProps } from "../../layout/Register/data";
import { RootState } from "../../store";
import UserJobPostings from "./components/UserJobPostings";

const ProfilePage = () => {
  useTitle();
  const { alumniStudentNo } = useParams();
  const studentNo = useSelector(
    (state: RootState) => state.auth.user?.studentNo
  );
  const { alumni } = useAlumniByStudentNo(
    alumniStudentNo ? Number(alumniStudentNo) : studentNo ?? -1
  );
  const isOwnProfile =
    alumniStudentNo === undefined || alumniStudentNo === studentNo?.toString();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

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

      {isOwnProfile && studentNo && (
        // paylaştığım ilanlar header
        <UserJobPostings studentNo={studentNo} />
      )}
    </div>
  );
};

export default ProfilePage;
