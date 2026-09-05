export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:bhavesh.suthar.contact@example.com",
    label: "bhavesh.suthar.contact@example.com"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/bhavesh-suthar",
    label: "linkedin.com/in/bhavesh-suthar"
  },
  {
    platform: "GitHub",
    url: "https://github.com/bhavesh-gff",
    label: "github.com/bhavesh-gff"
  }
];