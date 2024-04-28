import AlumniInput from "../../components/AlumniInput";
import CloseButton from "../../components/CloseButton";
import SubmitButton from "../../components/SubmitButton";

export const JobPost = ({
  handleJobPostVisibility,
}: {
  handleJobPostVisibility: () => void;
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="w-screen  md:w-2/3 flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 rounded-lg relative flex-col gap-4 lg:py-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            İlan Oluştur
          </h2>
        </div>
        <form className="  w-full flex gap-4 flex-col">
          <AlumniInput
            required
            autoComplete=""
            type="text"
            id="jobTitle"
            label="İlan Başlığı"
            value={""}
          />
          <AlumniInput
            required
            autoComplete=""
            type="text"
            id="jobDescription"
            label="İlan Açıklaması"
            value={""}
          />

          <AlumniInput
            autoComplete=""
            type="text"
            id="jobLocation"
            label="İlan Lokasyonu"
            value={""}
            required
          />
          <SubmitButton label="İlan Oluştur" />
        </form>
        <CloseButton
          classNames=" absolute top-0 right-0 mt-4 mr-4 hover:text-indigo-700"
          onClick={handleJobPostVisibility}
        />
      </div>
    </div>
  );
};
