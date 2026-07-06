import type { Metadata } from "next";
import "./globals.css";

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
      </head>
      <body>{children}</body>
    </html>
  );
}
