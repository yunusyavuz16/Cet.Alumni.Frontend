import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AlumniProfileInputContainer from "../../components/AlumniProfileInputContainer";
import useAlumniByStudentNo from "../../hooks/AlumniHook/useAlumniByStudentNo";
import { inputProps } from "../../layout/Register/data";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ProfilePage = () => {
  const { alumniStudentNo } = useParams();
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  const { alumni } = useAlumniByStudentNo(
    alumniStudentNo ? Number(alumniStudentNo) : user?.studentNo ?? -1
  );

  return (
    <div className="my-0 md:my-10 w-full bg-white p-5 md:shadow-lg md:rounded-lg">
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
      </div>
      {alumni && (
        <AlumniProfileInputContainer
          inputData={inputProps.profile}
          disabled={true}
          inputContainerClassNames="md:grid-cols-3 "
          //@ts-ignore
          inputValues={alumni}
          isLoading={false}
        />
      )}
    </div>
  );
};

export default ProfilePage;
