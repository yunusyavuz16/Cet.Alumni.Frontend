import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AlumniInput from "../../components/AlumniInput";
import SubmitButton from "../../components/SubmitButton";
import { Job } from "../../models";
import CloseButton from "../../components/CloseButton";

export const JobPost = ({
  handleJobPostVisibility,
}: {
  handleJobPostVisibility: () => void;
}) => {
  const navigate = useNavigate();
  const [job, setJob] = useState<Job>({
    id: 0, // Assuming the id is not being entered in this form
    title: "",
    company: "", // Assuming the company is not being entered in this form
    location: "",
    description: "",
    contactPerson: "", // Assuming this is not collected in this form
    contactMail: "", // Assuming this is not collected in this form
    jobDate: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form validation logic can be added here
    // For simplicity, I'm assuming all fields are required
    if (
      job.title.trim() === "" ||
      job.location.trim() === "" ||
      job.description.trim() === ""
    ) {
      await Swal.fire({
        title: "Lütfen tüm alanları doldurun.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    // Perform submit logic
    // You can send the job object to your backend API here
    await Swal.fire({
      title: "İlan Oluşturuldu!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    handleJobPostVisibility();
    navigate("/job-postings");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="w-screen md:w-2/3 flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 rounded-lg relative flex-col gap-4 lg:py-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            İlan Oluştur
          </h2>
        </div>
        <form className="w-full flex gap-4 flex-col" onSubmit={handleSubmit}>
          <AlumniInput
            required
            autoComplete="off"
            type="text"
            id="jobTitle"
            label="İlan Başlığı"
            value={job.title}
            handleInputChange={(e) =>
              setJob((prevJob) => ({
                ...prevJob,
                title: e.target.value,
              }))
            }
          />
          <AlumniInput
            required
            autoComplete="off"
            type="text"
            id="jobDescription"
            label="İlan Açıklaması"
            value={job.description}
            handleInputChange={(e) =>
              setJob((prevJob) => ({
                ...prevJob,
                description: e.target.value,
              }))
            }
          />
          <AlumniInput
            autoComplete="off"
            type="text"
            id="jobLocation"
            label="İlan Lokasyonu"
            value={job.location}
            required
            handleInputChange={(e) =>
              setJob((prevJob) => ({
                ...prevJob,
                location: e.target.value,
              }))
            }
          />
          {/* Assuming the company, contact person, and contact mail are  part of this form */}
          <AlumniInput
            required={false}
            autoComplete="off"
            type="text"
            id="jobCompany"
            label="Şirket Adı"
            value={job.company}
            handleInputChange={(e) =>
              setJob((prevJob) => ({
                ...prevJob,
                company: e.target.value,
              }))
            }
          />
          <AlumniInput
            required={false}
            autoComplete="off"
            type="text"
            id="jobContactPerson"
            label="İletişim Kişisi"
            value={job.contactPerson}
            handleInputChange={(e) =>
              setJob((prevJob) => ({
                ...prevJob,
                contactPerson: e.target.value,
              }))
            }
          />
          <AlumniInput
            required={false}
            autoComplete="off"
            type="email"
            id="jobContactMail"
            label="İletişim Maili"
            value={job.contactMail}
            handleInputChange={(e) =>
              setJob((prevJob) => ({
                ...prevJob,
                contactMail: e.target.value,
              }))
            }
          />
          <AlumniInput
            autoComplete="off"
            type="date"
            id="jobDate"
            label="İlan Tarihi"
            value={job.jobDate.toString()}
            handleInputChange={(e) =>
              setJob((prevJob) => ({
                ...prevJob,
                jobDate: e.target.value,
              }))
            }
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
