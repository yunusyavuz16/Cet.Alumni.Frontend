export const inputProps = {
  register: [
    {
      id: "alumniStudentNo",
      label: "Alumni Student No",
      type: "number",
      autoComplete: "off",
      required: true,
    },
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      autoComplete: "given-name",
      required: true,
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      autoComplete: "family-name",
      required: true,
    },
    {
      id: "email",
      label: "Email address",
      type: "email",
      autoComplete: "email",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      autoComplete: "new-password",
      required: true,
    },
    {
      id: "company",
      label: "Company",
      type: "text",
      autoComplete: "organization",
      required: false,
    },
    {
      id: "alumniPrivacySettingId",
      label: "Gizlilik",
      type: "number",
      autoComplete: "off",
      isDrowdown: true,
      required: true,
    },
    {
      id: "termId",
      label: "Dönem Yılı",
      type: "number",
      isDrowdown: true,
      autoComplete: "off",
      required: true,
    },
    {
      id: "jobTitle",
      label: "Job Title",
      type: "text",
      autoComplete: "job-title",
      required: true,
    },
    {
      id: "sector",
      label: "Sector",
      type: "text",
      autoComplete: "industry",
      required: false,
    },
    {
      id: "alumniProfileDescription",
      label: "Alumni Profile Description",
      type: "text",
      autoComplete: "off",
      required: false,
    },
    // Add more input properties as needed
  ],
  profile: [
    {
      id: "alumniStudentNo",
      label: "Alumni Student No",
      type: "number",
      autoComplete: "off",
      required: true,
    },
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      autoComplete: "given-name",
      required: true,
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      autoComplete: "family-name",
      required: true,
    },
    {
      id: "email",
      label: "Email address",
      type: "email",
      autoComplete: "email",
      required: true,
    },

    {
      id: "company",
      label: "Company",
      type: "text",
      autoComplete: "organization",
      required: false,
    },
    {
      id: "alumniPrivacySettingId",
      label: "Gizlilik",
      type: "number",
      isDropdown: true,
      autoComplete: "off",
      required: true,
    },
    {
      id: "termId",
      label: "Dönem Yılı",
      type: "number",
      autoComplete: "off",
      isDropdown: true,
      required: true,
    },
    {
      id: "jobTitle",
      label: "Job Title",
      type: "text",
      autoComplete: "job-title",
      required: true,
    },
    {
      id: "sector",
      label: "Sector",
      type: "text",
      autoComplete: "industry",
      required: false,
    },
    {
      id: "alumniProfileDescription",
      label: "Alumni Profile Description",
      type: "text",
      autoComplete: "off",
      required: false,
    },
    // Add more input properties as needed
  ],
};

export interface IInputData {
  id: string;
  label: string;
  type: string;
  autoComplete: string;
  required: boolean;
  isDropdown?: boolean;
}
