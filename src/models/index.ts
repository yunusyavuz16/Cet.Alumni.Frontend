export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  studentNo: number;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  contactPerson: string;
  contactMail: string;
  jobDate: string;
}

export interface Alumni {
  alumniPrivacySettingId: number;
  alumniStudentNo: number;
  company: string;
  createdDateTime: string;
  emailAddress: string;
  firstName: string;
  jobTitle: string;
  lastName: string;
  profileDescription: string;
  sector: string;
  termId: number;
}

export interface PrivacySetting {
  displayName: string;
  settingCode: string;
  alumniPrivacySettingId: number;
}
