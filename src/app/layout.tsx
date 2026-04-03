import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "VNB Group | Solar, Technologies & Interactive Solutions",
  description: "VNB Group - Leading provider of Solar Energy, IT Consulting, and Interactive Technology solutions across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
