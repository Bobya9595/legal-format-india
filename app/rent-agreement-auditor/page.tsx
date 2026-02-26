"use client";

import { useState } from "react";

export default function RentAgreementAuditor() {
  const [agreementText, setAgreementText] = useState("");
  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const analyzeAgreement = () => {
    if (!agreementText.trim()) {
      alert("Please paste your agreement text first.");
      return;
    }

    setLoading(true);

    // Mock analysis (replace with real AI call later)
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold">
            Rent Agreement Compliance Scan
          </h1>
          <p className="text-gray-600 mt-2">
            Paste your rent agreement below to analyze legal risks and compliance gaps.
          </p>
        </div>

        {/* Textarea */}
        <textarea
          className="border w-full h-56 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
          placeholder="Paste your rent agreement text here..."
          value={agreementText}
          onChange={(e) => setAgreementText(e.target.value)}
        />

        {/* Analyze Button */}
        <button
          onClick={analyzeAgreement}
          className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition duration-300"
        >
          {loading ? "Analyzing..." : "Analyze Agreement"}
        </button>

        {/* Loading State */}
        {loading && (
          <div className="text-gray-600 animate-pulse">
            AI scanning compliance checklist...
          </div>
        )}

        {/* Result */}
        {analyzed && !loading && (
          <div className="bg-white p-6 rounded-2xl shadow border space-y-4">

            <h2 className="text-xl font-semibold">
              Risk Score: <span className="text-red-600">62 / 100</span>
            </h2>

            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>Missing Indemnity Clause</li>
              <li>No Lock-in Period Defined</li>
              <li>Weak Termination Clause</li>
            </ul>

            {/* Locked Section */}
            <div className="mt-6 p-4 border rounded-xl bg-gray-100">
              <p className="font-semibold">
                🔒 Unlock Full Compliance Report
              </p>

              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Complete clause-by-clause breakdown</li>
                <li>State-specific compliance check</li>
                <li>Download corrected agreement</li>
                <li>Professional PDF report</li>
              </ul>

              <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition duration-300">
                Unlock Full Report – ₹149
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
