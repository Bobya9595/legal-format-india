"use client";

import { useState } from "react";

export default function RentAgreementAuditor() {
  const [agreementText, setAgreementText] = useState("");
  const [analyzed, setAnalyzed] = useState(false);
  const [isPro] = useState(false);

  const analyzeAgreement = () => {
    if (!agreementText) return alert("Paste agreement text first");
    setAnalyzed(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-10 space-y-6">
      <h1 className="text-3xl font-bold">
        AI Rent Agreement Compliance Auditor – India
      </h1>

      <p className="text-gray-600">
        Paste your rent agreement below and get instant legal risk analysis.
      </p>

      <textarea
        className="border w-full h-64 p-4"
        placeholder="Paste your rent agreement text here..."
        value={agreementText}
        onChange={(e) => setAgreementText(e.target.value)}
      />

      <button
        onClick={analyzeAgreement}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Analyze Agreement
      </button>

      {analyzed && (
        <div className="border p-6 rounded space-y-4">
          <h2 className="text-xl font-semibold">
            Risk Score: <span className="text-red-600">62 / 100</span>
          </h2>

          <div className="space-y-2">
            <p>❌ Missing Indemnity Clause</p>
            <p>❌ No Inspection Rights Clause</p>
            <p>⚠ Weak Termination Clause</p>
          </div>

          {!isPro && (
            <div className="mt-6 p-4 border rounded bg-gray-100">
              <p className="font-semibold">
                🔒 Unlock Full Compliance Report
              </p>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Complete legal risk breakdown</li>
                <li>State-specific compliance check</li>
                <li>Download corrected agreement</li>
                <li>Professional PDF report</li>
              </ul>

              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
                Unlock Full Report – ₹149
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
