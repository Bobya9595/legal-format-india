"use client";

import Link from "next/link";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#0c0c12] text-white p-10">

      {/* Back Button */}
      <Link
        href="/dashboard"
        className="text-sm text-gray-400 hover:text-white mb-6 inline-block"
      >
        ← Back to Dashboard
      </Link>

      <h1 className="text-3xl font-bold mb-10">
        Reports & Analytics
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">

        <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
          <p className="text-gray-400 mb-2">Total Analyses</p>
          <h2 className="text-4xl font-bold text-purple-500">12</h2>
        </div>

        <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
          <p className="text-gray-400 mb-2">Documents Generated</p>
          <h2 className="text-4xl font-bold text-blue-500">28</h2>
        </div>

        <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
          <p className="text-gray-400 mb-2">Average Risk Score</p>
          <h2 className="text-4xl font-bold text-green-400">76</h2>
        </div>

      </div>

      {/* Activity Chart Placeholder */}
      <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800 mb-12">
        <h2 className="text-lg font-semibold mb-4">
          Monthly Activity
        </h2>

        <div className="h-40 bg-[#1a1a23] rounded-xl flex items-center justify-center text-gray-500">
          Chart coming soon...
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800">
        <h2 className="text-lg font-semibold mb-6">
          Recent Activity
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-400 border-b border-gray-700">
              <tr>
                <th className="py-3">Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Risk Score</th>
              </tr>
            </thead>

            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800">
                <td className="py-3">Rent Agreement</td>
                <td>12 Mar 2026</td>
                <td className="text-green-400">Completed</td>
                <td>82</td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="py-3">NDA</td>
                <td>10 Mar 2026</td>
                <td className="text-green-400">Completed</td>
                <td>74</td>
              </tr>

              <tr>
                <td className="py-3">Service Agreement</td>
                <td>08 Mar 2026</td>
                <td className="text-yellow-400">Processing</td>
                <td>—</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}
