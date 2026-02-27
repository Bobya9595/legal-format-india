import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#0d0d0f",
          color: "white",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>LegalFormat</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard/documents">Documents</Link>
          <Link href="/dashboard/billing">Billing</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          background: "#111",
          color: "white",
        }}
      >
        {children}
      </div>
    </div>
  );
}
