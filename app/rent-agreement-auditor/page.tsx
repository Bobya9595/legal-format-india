"use client";

import { useState } from "react";

export default function Auditor() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const analyze = () => {
    if (!text) return alert("Paste agreement text");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 space-y-10">

      <div>
        <h1 className="text-3xl font-bold">
          Rent Agreement Compliance Scan
        </h1>
        <p className="text-gray-600">
          Paste agreement text to begin analysis.
        </p>
      </div>

      <textarea
        className="border w-full h-56 p-4 rounded-xl focus:ring-2 focus:ring-black transition"
        placeholder="Paste agreement text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={analyze}
        className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition duration-300"
      >
        {loading ? "Analyzing..." : "Analyze Agreement"}
      </button>

      {loading && (
        <div className="text-gray-600 animate-pulse">
          AI scanning compliance checklist...
        </div>
      )}

      {result && (
        <div className="bg-white p-6 rounded-2xl shadow border space-y-4 animate-fade-in">
          <h2 className="text-xl font-semibold">
            Risk Score: <span className="text-red-600">62 / 100</span>
          </h2>

          <ul className="list-disc ml-6 text-gray-600">
            <li>Missing Indemnity Clause</li>
            <li>No Lock-in Period</li>
            <li>Weak Termination Clause</li>
          </ul>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl mt-4 hover:scale-105 transition duration-300">
            Unlock Full Report – ₹149
          </button>
        </div>
      )}

    </div>
  );
}
