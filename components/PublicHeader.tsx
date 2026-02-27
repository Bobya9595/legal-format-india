"use client";

import Link from "next/link";

export default function PublicHeader() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-xl font-bold tracking-tight">
          LegalFormat
        </h1>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="px-5 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
