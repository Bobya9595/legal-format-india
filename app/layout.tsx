import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LegalFormat – AI Rent Agreement Compliance Auditor",
  description:
    "Analyze your rent agreement for legal risks and compliance gaps in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
