import PublicHeader from "@/components/PublicHeader";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <PublicHeader />

      <section className="relative min-h-screen flex items-center justify-center text-center px-6">

        {/* Background Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 blur-3xl opacity-40" />

        <div className="relative max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            AI Legal Intelligence
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              for Indian Agreements
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            Generate rent agreements, affidavits, contracts and more
            in minutes using AI-powered automation.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/signup"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition text-lg"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition text-lg"
            >
              Login
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
