import JobPostingList from "./components/JobPostingList";

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Acme Corporation",
    location: "New York, NY",
    description:
      "Join our team as a frontend developer and help us build amazing web applications!",
    contactPerson: "John Doe",
    contactMail: "johndoe@gmail.com",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Acme Corporation",
    location: "New York, NY",
    description:
      "Join our team as a frontend developer and help us build amazing web applications!",
    contactPerson: "John Doe",
    contactMail: "johndoe@gmail.com",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Acme Corporation",
    location: "New York, NY",
    description:
      "Join our team as a frontend developer and help us build amazing web applications!",
    contactPerson: "John Doe",
    contactMail: "johndoe@gmail.com",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Acme Corporation",
    location: "New York, NY",
    description:
      "Join our team as a frontend developer and help us build amazing web applications!",
    contactPerson: "John Doe",
    contactMail: "johndoe@gmail.com",
  },
  // Add more job objects as needed
];

const JobPostingPage = () => {
  return (
    <div className="my-5">
      <h1 className="  text-blue-500">Job Posting Page</h1>
      <JobPostingList jobs={jobData} />
    </div>
  );
};

export default JobPostingPage;
