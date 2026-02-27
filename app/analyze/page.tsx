"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnalyzePage() {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [riskScore, setRiskScore] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setRiskScore(null);
      setSuggestions([]);
    }
  };

  const handleAnalyze = () => {
    if (!fileName) return alert("Please upload a file first");

    setLoading(true);
    setRiskScore(null);
    setSuggestions([]);

    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 40) + 60;
      setRiskScore(randomScore);

      // Fake AI suggestions
      const fakeSuggestions = [
        "Add a clear termination clause.",
        "Include dispute resolution mechanism.",
        "Mention governing jurisdiction explicitly.",
        "Define payment timeline clearly.",
        "Add indemnity clause for risk protection.",
      ];

      setSuggestions(fakeSuggestions.slice(0, 3));
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0c12] text-white p-10">

      {/* Back Button */}
      <Link
        href="/dashboard"
        className="text-sm text-gray-400 hover:text-white mb-6 inline-block"
      >
        ← Back to Dashboard
      </Link>

      <h1 className="text-3xl font-bold mb-8">
        AI Legal Analyzer
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Upload Section */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800">

          <label className="block text-gray-400 mb-4">
            Upload Agreement (PDF or DOCX)
          </label>

          <div className="border-2 border-dashed border-gray-700 rounded-2xl p-10 text-center">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="fileUpload"
            />

            <label
              htmlFor="fileUpload"
              className="cursor-pointer text-purple-400 hover:text-purple-300"
            >
              Click to upload
            </label>

            <p className="text-gray-500 text-sm mt-4">
              {fileName ? `Selected: ${fileName}` : "No file selected"}
            </p>
          </div>

          <button
            onClick={handleAnalyze}
            className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl hover:scale-105 transition"
          >
            {loading ? "Analyzing..." : "Analyze Agreement with AI"}
          </button>

        </div>

        {/* Result Section */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800">

          <h2 className="text-lg font-semibold mb-6">
            Risk Analysis Result
          </h2>

          {loading && (
            <p className="text-purple-400">
              AI is scanning your document...
            </p>
          )}

          {!loading && riskScore !== null && (
            <div className="space-y-6">

              <div>
                <div className="text-4xl font-bold text-purple-500">
                  {riskScore}/100
                </div>
                <p className="text-gray-400">
                  {riskScore > 80
                    ? "Low Risk – Agreement looks strong."
                    : "Medium Risk – Improvements recommended."}
                </p>
              </div>

              <div>
                <h3 className="text-md font-semibold mb-3">
                  Suggested Improvements:
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm">
                  {suggestions.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#1a1a23] p-3 rounded-lg border border-gray-800"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}

          {!loading && riskScore === null && (
            <p className="text-gray-500">
              Upload and analyze a document to see risk score and suggestions.
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
