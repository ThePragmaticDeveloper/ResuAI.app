import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    template: "%s | ResuAI.app",
    absolute: "AI-Powered Resume Builder"
  },
  description: "AI-Powered Resume Builder is the easiest way to create a professional resume that showcases your unique strengths. Get started for free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      {/* ✅ Import General Sans from CDN Fonts */}
      <head>
       <link
         href="https://fonts.cdnfonts.com/css/general-sans"
         rel="stylesheet"
       />
      </head>
      <body>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
