import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';
import { SpeedInsights } from "@vercel/speed-insights/next";

// font
const dmSans = DM_Sans({ subsets: ["latin"] });

// Page metadata
export const metadata: Metadata = {
  title: "rprakashdass",
  description: "A professional portfolio webpage",
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
        <link rel="icon" href="/favicon.ico"></link>
      </head>
      <body>
        <SpeedInsights/>
          {children}
      </body>
    </html>
  );
}
