"use client";

import Link from "next/link";

export default function PublicHeader() {
  return (
    <header className="w-full border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-white">Legal</span>
          <span className="text-purple-500">Format</span>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/login"
            className="hover:text-purple-400 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
