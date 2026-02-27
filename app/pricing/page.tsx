"use client";

import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0c0c12] text-white p-10">

      {/* BACK BUTTON */}
      <Link
        href="/dashboard"
        className="text-sm text-gray-400 hover:text-white mb-10 inline-block"
      >
        ← Back to Dashboard
      </Link>

      <h1 className="text-4xl font-bold mb-12 text-center">
        Choose Your Plan
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* FREE */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Free</h2>
          <p className="text-3xl font-bold mb-6">₹0</p>

          <ul className="text-gray-400 space-y-2 text-sm mb-8">
            <li>✔ 5 AI Analyses</li>
            <li>✔ Basic Generator</li>
          </ul>

          <Link
            href="/dashboard"
            className="block text-center border border-gray-600 py-3 rounded-xl hover:border-purple-500 transition"
          >
            Current Plan
          </Link>
        </div>

        {/* PRO */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-2xl">
          <div className="bg-[#16161d] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Pro</h2>
            <p className="text-3xl font-bold mb-6">₹399/month</p>

            <ul className="text-gray-300 space-y-2 text-sm mb-8">
              <li>✔ Unlimited Generation</li>
              <li>✔ 20 AI Analyses</li>
              <li>✔ No Watermark</li>
            </ul>

            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl hover:scale-105 transition">
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* BUSINESS */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Business</h2>
          <p className="text-3xl font-bold mb-6">₹999/month</p>

          <ul className="text-gray-400 space-y-2 text-sm mb-8">
            <li>✔ Unlimited Everything</li>
            <li>✔ Priority Support</li>
          </ul>

          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl hover:scale-105 transition">
            Upgrade to Business
          </button>
        </div>

      </div>
    </div>
  );
}
