"use client";

import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-6 space-y-8 hidden md:block">
        <h2 className="text-xl font-bold"></h2>

        <nav className="space-y-4 text-gray-600">
          <Link href="/dashboard" className="block hover:text-black">
            Dashboard
          </Link>
          <Link href="/rent-agreement-auditor" className="block hover:text-black">
            New Analysis
          </Link>
          <Link href="#" className="block hover:text-black">
            Reports
          </Link>
          <Link href="#" className="block hover:text-black">
            Billing
          </Link>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}
