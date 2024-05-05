import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AlumniInput from "../../components/AlumniInput";
import WidgetContainer from "../../components/WidgetContainer";
import { JobPosting } from "../../pages/JobPostingPage/hooks/useJobPostings";
import AlumniTextArea from "../../components/AlumniTextArea";
import { API_URL } from "../../shared/env";
import { getCookie } from "../../shared/auth";

export const JobPost = ({
  handleJobPostVisibility,
}: {
  handleJobPostVisibility: () => void;
}) => {
  const navigate = useNavigate();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [job, setJob] = useState<Partial<JobPosting>>({
    title: "",
    location: "",
    description: "",
    companyName: "",
    contactInfo: "",
    contactFullName: "",
    datePosted: "",
    deadline: "",
    requirements: "",
    responsibilities: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonLoading(true);
    // Your form validation logic can be added here
    // For simplicity, I'm assuming all fields are required
    if (
      job.title === "" ||
      job.location === "" ||
      job.description === "" ||
      job.requirements === "" ||
      job.responsibilities === "" ||
      job?.datePosted?.toString() === "" ||
      job?.deadline?.toString() === ""
    ) {
      await Swal.fire({
        title: "Lütfen tüm alanları doldurun.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
      setButtonLoading(false);
      return;
    }
    const copyJob = {
      title: job.title,
      location: job.location,
      description: job.description,
      companyName: job.companyName,
      contactInfo: job.contactInfo,
      contactFullName: job.contactFullName,
      datePosted: job.datePosted,
      deadline: job.deadline,
      requirements: job.requirements,
      responsibilities: job.responsibilities,
    };

    // Perform submit logic
    // You can send the job object to your backend API here
    const res = await fetch(API_URL + "api/createJobPosting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Allow-Origin-Access-Control": "*",
        Authorization: `Bearer ${getCookie("authToken")?.trim()}`,
      },
      body: JSON.stringify(copyJob),
    });
    
    const data = await res.json();
    // response handling
    if (!res.ok) {
      await Swal.fire({
        title: "Hata",
        text: "Bir hata oluştu. Lütfen tekrar deneyin. " + res.statusText,
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      setButtonLoading(false);
      return;
    }

    await Swal.fire({
      title: "İlan Oluşturuldu!",
      text: "İlanınız başarıyla oluşturuldu. İlan No: " + data.jobPostId,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    handleJobPostVisibility();
    setButtonLoading(false);
    navigate("/job-postings");
  };

  return (
    <WidgetContainer
      closeWidget={handleJobPostVisibility}
      handleSubmit={handleSubmit}
      headetText="İlan Oluştur"
      isLoadingSubmit={buttonLoading}
      submitButtonText="Oluştur"
    >
      <AlumniInput
        required
        autoComplete="off"
        type="text"
        id="jobTitle"
        label="İlan Başlığı"
        value={job.title ?? ""}
        handleInputChange={(e) =>
          setJob((prevJob) => ({
            ...prevJob,
            title: e.target.value,
          }))
        }
      />

      <AlumniInput
        autoComplete="off"
        type="text"
        id="jobLocation"
        label="İlan Lokasyonu"
        value={job.location ?? ""}
        required
        handleInputChange={(e) =>
          setJob((prevJob) => ({
            ...prevJob,
            location: e.target.value,
          }))
        }
      />
      <AlumniInput
        required={false}
        autoComplete="off"
        type="text"
        id="jobCompanyName"
        label="Şirket Adı"
        value={job.companyName ?? ""}
        handleInputChange={(e) =>
          setJob((prevJob) => ({
            ...prevJob,
            companyName: e.target.value,
          }))
        }
      />
      <AlumniInput
        required={false}
        autoComplete="off"
        type="text"
        id="jobContactPerson"
        label="İletişim Kişisi"
        value={job.contactFullName ?? ""}
        handleInputChange={(e) =>
          setJob((prevJob) => ({
            ...prevJob,
            contactFullName: e.target.value,
          }))
        }
      />
      <AlumniInput
        required={false}
        autoComplete="off"
        type="email"
        id="jobContactMail"
        label="İletişim Maili"
        value={job.contactInfo ?? ""}
        handleInputChange={(e) =>
          setJob((prevJob) => ({
            ...prevJob,
            contactInfo: e.target.value,
          }))
        }
      />
      <AlumniInput
        autoComplete="off"
        type="date"
        id="jobDatePosted"
        label="İlan Tarihi"
        value={job.datePosted?.toString()}
        handleInputChange={(e) =>
          setJob((prevJob) => ({
            ...prevJob,
            datePosted: e.target.value,
          }))
        }
        required
      />
      <AlumniInput
        autoComplete="off"
        type="date"
        id="jobDeadline"
        label="Son Başvuru Tarihi"
        value={job.deadline?.toString()}
        handleInputChange={(e) =>
          setJob((prevJob) => ({
            ...prevJob,
            deadline: e.target.value,
          }))
        }
        required
      />

      <AlumniTextArea
        required
        id="jobDescription"
        label="İlan Açıklaması"
        value={job.description ?? ""}
        handleInputChange={(e) =>
          setJob((prevJob) => ({
            ...prevJob,
            description: e.target.value,
          }))
        }
      />
      <AlumniTextArea
        required
        id="jobResponsibilities"
        label="Sorumluluklar"
        value={job.responsibilities}
        handleInputChange={(e) =>
          setJob((prevJob) => ({
            ...prevJob,
            responsibilities: e.target.value,
          }))
        }
      />
      <AlumniTextArea
        required
        id="jobRequirements"
        label="Gereksinimler"
        value={job.requirements}
        handleInputChange={(e) =>
          setJob((prevJob) => ({
            ...prevJob,
            requirements: e.target.value,
          }))
        }
      />
    </WidgetContainer>
  );
};
