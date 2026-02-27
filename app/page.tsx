"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f14] text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-semibold tracking-wide">
          <span className="text-white">Legal</span>
          <span className="text-purple-500">Format</span>
        </h1>

        <div className="flex gap-6 items-center">
          <a className="text-gray-300 hover:text-white transition">
            Pricing
          </a>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition">
            Start Free
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-16 items-center px-10 py-20 max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            AI That Audits Your <br />
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Legal Agreements
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Detect missing clauses, compliance risks and legal gaps instantly.
            Built for Indian agreements.
          </p>

          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition">
              Analyze Agreement
            </button>

            <button className="border border-gray-600 px-8 py-3 rounded-xl hover:border-purple-500 transition">
              View Pricing
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - AI PREVIEW CARD */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-30 rounded-2xl"></div>

          <div className="relative bg-[#181820] border border-gray-800 rounded-2xl p-8 shadow-2xl">

            <h3 className="text-lg font-semibold mb-6 text-gray-300">
              Agreement Risk Analysis
            </h3>

            <div className="mb-6">
              <div className="text-4xl font-bold text-purple-500">
                82<span className="text-gray-400 text-xl">/100</span>
              </div>
              <p className="text-gray-400 text-sm">
                Risk Score (Medium Risk)
              </p>
            </div>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-green-400">✓ Rent Clause</span>
                <span className="text-gray-400">Valid</span>
              </div>

              <div className="flex justify-between">
                <span className="text-yellow-400">⚠ Termination Clause</span>
                <span className="text-gray-400">Missing</span>
              </div>

              <div className="flex justify-between">
                <span className="text-red-400">✖ Stamp Duty Clause</span>
                <span className="text-gray-400">Not Mentioned</span>
              </div>

              <div className="flex justify-between">
                <span className="text-green-400">✓ Dispute Resolution</span>
                <span className="text-gray-400">Present</span>
              </div>

            </div>

          </div>
        </div>

      </section>

    </main>
  );
}
