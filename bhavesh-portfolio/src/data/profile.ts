export interface ProfileData {
  name: string;
  label: string;
  headline: string;
  tagline: string;
  bio: string;
  education: string;
  currentFocus: string[];
  interests: string[];
}

export const profileData: ProfileData = {
  name: "Bhavesh Suthar",
  label: "DATA ANALYST → ASPIRING DATA SCIENTIST",
  headline: "I TURN DATA INTO DECISIONS.",
  tagline: "BCA Computer Science student focused on Data Analytics and the path toward Data Science.",
  bio: "I'm a BCA Computer Science student focused on Data Analytics and the path toward Data Science. I enjoy working with data, discovering patterns, building visualisations and turning analysis into useful insights.",
  education: "BCA Computer Science",
  currentFocus: ["Statistics", "Exploratory Data Analysis", "Machine Learning Fundamentals"],
  interests: ["Data Cleaning & Transformation", "Predictive Modelling", "Business Intelligence", "Analytical Systems"],
};