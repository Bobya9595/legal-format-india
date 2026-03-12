import "./globals.css";

export const metadata = {
  title: "LegalFormat",
  description: "AI Legal Intelligence for Indian Agreements"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
