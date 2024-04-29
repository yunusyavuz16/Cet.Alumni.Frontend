export interface ITerm {
  termId: number;
  termYear: number | string;
}

export interface IAlumni {
  alumniStudentNo: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  isVerified: boolean;
  createdDateTime: Date;
  lastSignedInDateTime: Date;
  departmentId: number;
  termId: number;
  profileDescription: string;
  sector: string;
  company: string;
  jobTitle: string;
  alumniPrivacySettingId: number;
  term: ITerm;
}
