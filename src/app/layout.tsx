"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { initializeBlogStorage } from "@/lib/blogManager";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Initialize blog storage when app loads
    initializeBlogStorage();
  }, []);

  return (
    <html
      lang="en"
      className={cn("h-full antialiased font-sans", poppins.variable)}
      suppressHydrationWarning
    >
      <Head>
        <title>VNB Group - Technology, Solar & Interactive Solutions</title>
        <meta
          name="description"
          content="VNB Group - A unified platform for IT consulting services, solar energy solutions, and interactive technology. Be at the forefront of innovation."
        />
      </Head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
