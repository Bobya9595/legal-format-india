"use client";

import { useState } from "react";

export default function AuditorPage() {
  const [agreementText, setAgreementText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeAgreement = async () => {
    if (!agreementText) return;

    setLoading(true);
    setResult("");

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ agreementText }),
    });

    const data = await res.json();
    setResult(data.analysis);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold">
          Rent Agreement Auditor
        </h1>

        <textarea
          className="w-full h-60 p-4 border rounded-lg"
          placeholder="Paste your rent agreement text here..."
          value={agreementText}
          onChange={(e) => setAgreementText(e.target.value)}
        />

        <button
          onClick={analyzeAgreement}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <div className="bg-white p-6 rounded-lg border whitespace-pre-wrap">
            {result}
          </div>
        )}

      </div>
    </main>
  );
}
