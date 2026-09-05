export interface Credential {
  id: string;
  name: string;
  organization: string;
  year: string;
  verificationLink?: string;
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
    id: "sql-database-fundamentals",
    name: "SQL & Relational Database Management",
    organization: "Technical Training Program",
    year: "2024"
  }
];