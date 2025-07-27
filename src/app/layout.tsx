import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Belloit - Full-Stack Developer | React, Node.js, Data Analytics",
  description: "Experienced Full-Stack Developer specializing in React, Next.js, Node.js, and data analytics. 4+ years professional experience building scalable web applications. Available for hire.",
  keywords: "full-stack developer, react developer, next.js, node.js, javascript, typescript, web development, data analytics, pennsylvania developer",
  authors: [{ name: "Jonathan Belloit" }],
  creator: "Jonathan Belloit",
  openGraph: {
    title: "Jonathan Belloit - Full-Stack Developer",
    description: "Experienced Full-Stack Developer specializing in React, Next.js, Node.js, and data analytics.",
    url: "https://jonathanbelloit.com",
    siteName: "Jonathan Belloit Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Belloit - Full-Stack Developer",
    description: "Experienced Full-Stack Developer specializing in React, Next.js, Node.js, and data analytics.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
