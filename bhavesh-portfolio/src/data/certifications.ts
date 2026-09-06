export interface Credential {
  id: string;
  name: string;
  organization: string;
  year: string;
  verificationLink?: string;
  description?: string;
}

export const certificationsData: Credential[] = [
  {
    id: "ibm-big-data",
    name: "IBM SkillsBuild Big Data & Business Management Internship",
    organization: "AICTE / BharatCares",
    year: "2025"
  },
  {
    id: "python-data-structures",
    name: "Python for Data Analytics & Data Structures",
    organization: "Academic Certification",
    year: "2025"
  },
  {
    id: "lenovo-leap-nextgen-scholar",
    name: "Lenovo LEAP NextGen Scholar Program",
    organization: "Lenovo and BharatCares",
    year: "",
    description: "60+ hours of learning in data analytics."
  }
];