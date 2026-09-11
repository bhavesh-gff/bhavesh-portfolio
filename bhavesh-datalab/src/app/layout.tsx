import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhavesh Suthar — Data Analyst & Aspiring Data Scientist",
  description: "BCA Computer Science student turning data into decisions through Python, SQL, Pandas, and data visualization.",
  keywords: ["Data Analyst", "Data Science", "Bhavesh Suthar", "Python", "SQL", "Pandas", "BCA Student Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FFFCF2] text-[#242323]">
        {children}
      </body>
    </html>
  );
}