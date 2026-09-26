import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "수능시험 통합관리 시스템",
    template: "%s · 수능시험 통합관리 시스템",
  },
  description: "시험장·시험실·좌석·감독관 통합 관리",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className={`${geist.variable} flex min-h-full flex-col bg-slate-50 font-sans`}>
        {children}
      </body>
    </html>
  );
}
