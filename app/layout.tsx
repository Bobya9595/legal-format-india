import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Format India",
  description:
    "Generate professional legal documents online in India. Rent agreement, affidavit, offer letter and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
