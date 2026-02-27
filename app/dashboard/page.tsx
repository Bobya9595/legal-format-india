"use client";

export default function DashboardPage() {
  return (
    <div>

      {/* Page Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold">Dashboard Overview</h2>
        <p className="text-gray-400 mt-2">
          Welcome back. Here’s your LegalFormat analytics.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-[1.02] transition">
          <p className="text-gray-400 text-sm">Documents Generated</p>
          <h3 className="text-2xl font-semibold mt-2">128</h3>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-[1.02] transition">
          <p className="text-gray-400 text-sm">Active Plan</p>
          <h3 className="text-2xl font-semibold mt-2 text-purple-400">
            Pro Plan
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-[1.02] transition">
          <p className="text-gray-400 text-sm">AI Enhancements Used</p>
          <h3 className="text-2xl font-semibold mt-2">342</h3>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold mb-6">
          Recent Documents
        </h3>

        <div className="space-y-4 text-sm text-gray-300">
          <div className="flex justify-between border-b border-white/10 pb-3">
            <span>Rent Agreement - Mumbai</span>
            <span className="text-gray-500">2 hours ago</span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-3">
            <span>Affidavit Draft</span>
            <span className="text-gray-500">Yesterday</span>
          </div>

          <div className="flex justify-between">
            <span>Employment Contract</span>
            <span className="text-gray-500">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
