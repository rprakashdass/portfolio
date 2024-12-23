import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';
import { SpeedInsights } from "@vercel/speed-insights/next";

// font
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R Prakash Dass | Student | Aspiring Software Developer & AI & ML Specialist",
  description: "Explore the professional portfolio of R Prakash Dass, a skilled software developer, AI/ML specialist, and community leader with expertise in web development, artificial intelligence, and innovative solutions.",
  keywords: [
    "Prakash Dass R",
    "Portfolio",
    "Software Developer",
    "AI Specialist",
    "Machine Learning",
    "Artificial Intelligence",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "JavaScript",
    "React",
    "Next.js",
    "AI/ML Projects",
    "Deep Learning",
    "Computer Vision",
    "Data Science",
    "Professional Portfolio",
    "Tech Enthusiast",
    "Community Leader",
    "Innovative Solutions",
    "Technology",
    "Software Engineering",
    "Coding",
    "Programming",
    "Tech Projects",
    "Project Showcase",
  ],
};


// Root layout for the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(dmSans.className, "antialiased")}>
      <head>
        <link rel="icon" href="favicon2.png"></link>
      </head>
      <body>
        <SpeedInsights/>
          {children}
      </body>
    </html>
  );
}
