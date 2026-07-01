import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ToastProvider } from "@/components/providers/ToastProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahriyar Tarnasi | Senior Python Backend Engineer",
  description:
    "Senior Python Backend Engineer with 7+ years of experience in Django, FastAPI, distributed systems, APIs, and data pipelines. Portfolio and resume of Shahriyar Tarnasi.",
  keywords: [
    "Python",
    "Django",
    "FastAPI",
    "Backend Engineer",
    "Shahriyar Tarnasi",
    "API Development",
    "Microservices",
  ],
  authors: [{ name: "Shahriyar Tarnasi" }],
  openGraph: {
    title: "Shahriyar Tarnasi | Senior Python Backend Engineer",
    description:
      "Senior Python Backend Engineer specializing in Django, FastAPI, and distributed systems.",
    url: "https://devdiaries.work",
    siteName: "Shahriyar Tarnasi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahriyar Tarnasi | Senior Python Backend Engineer",
    description:
      "Senior Python Backend Engineer specializing in Django, FastAPI, and distributed systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-navy text-off-white">
        <SmoothScroll>
          <CustomCursor />
          {children}
          <ToastProvider />
        </SmoothScroll>
      </body>
    </html>
  );
}
