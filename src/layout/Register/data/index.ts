export const inputProps = {
  register: [
    {
      id: "alumniStudentNo",
      label: "Öğrenci Numarası",
      type: "number",
      autoComplete: "off",
      required: true,
    },
    {
      id: "firstName",
      label: "Ad",
      type: "text",
      autoComplete: "given-name",
      required: true,
    },
    {
      id: "lastName",
      label: "Soyad",
      type: "text",
      autoComplete: "family-name",
      required: true,
    },
    {
      id: "email",
      label: "E-posta",
      type: "email",
      autoComplete: "email",
      required: true,
    },
    {
      id: "password",
      label: "Şİfre",
      type: "password",
      autoComplete: "new-password",
      required: true,
    },
    {
      id: "company",
      label: "Şirket",
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
      label: "İş Başlığı",
      type: "text",
      autoComplete: "job-title",
      required: false,
    },
    {
      id: "sector",
      label: "Sektör",
      type: "text",
      autoComplete: "industry",
      required: false,
    },
    {
      id: "alumniProfileDescription",
      label: "Profil Açıklaması",
      type: "text",
      autoComplete: "off",
      required: false,
    },
    // Add more input properties as needed
  ],
  profile: [
    {
      id: "alumniStudentNo",
      label: "Öğrenci Numarası",
      type: "number",
      autoComplete: "off",
      required: true,
    },
    {
      id: "firstName",
      label: "Ad",
      type: "text",
      autoComplete: "given-name",
      required: true,
    },
    {
      id: "lastName",
      label: "Soyad",
      type: "text",
      autoComplete: "family-name",
      required: true,
    },
    {
      id: "email",
      label: "E-posta",
      type: "email",
      autoComplete: "email",
      required: true,
    },

    {
      id: "company",
      label: "Şirket",
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
      label: "İş Başlığı",
      type: "text",
      autoComplete: "job-title",
      required: false,
    },
    {
      id: "sector",
      label: "Sektör",
      type: "text",
      autoComplete: "industry",
      required: false,
    },
    {
      id: "alumniProfileDescription",
      label: "Profil Açıklaması",
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
