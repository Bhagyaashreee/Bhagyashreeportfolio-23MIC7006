import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";

export const metadata: Metadata = {
  title: "Bhagyashree Satpathy | Portfolio",
  description: "Machine Learning, Cybersecurity, and Full Stack Development portfolio of Bhagyashree Satpathy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4A0E1A" />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
