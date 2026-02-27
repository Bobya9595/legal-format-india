"use client";

import Link from "next/link";
import { ReactNode } from "react";
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  Settings,
  LogOut
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0d0d0f] text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-white/10 p-6 hidden md:flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-500 mb-10">
            LegalFormat
          </h1>

          <nav className="space-y-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition"
            >
              <LayoutDashboard size={18} />
              Overview
            </Link>

            <Link
              href="/dashboard/documents"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition"
            >
              <FileText size={18} />
              Documents
            </Link>

            <Link
              href="/dashboard/billing"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition"
            >
              <CreditCard size={18} />
              Billing
            </Link>

            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition"
            >
              <Settings size={18} />
              Settings
            </Link>
          </nav>
        </div>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-400 transition">
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 bg-gradient-to-br from-[#0d0d0f] via-black to-[#111]">
        {children}
      </main>
    </div>
  );
}
