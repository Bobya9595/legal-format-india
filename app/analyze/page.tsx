"use client";

import { useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";

export default function AnalyzePage() {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [riskScore, setRiskScore] = useState<number | null>(null);
  const [clauses, setClauses] = useState<
    { name: string; status: "valid" | "warning" | "missing" }[]
  >([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setRiskScore(null);
      setClauses([]);
    }
  };

  const handleAnalyze = () => {
    if (!fileName) return alert("Please upload a file first");

    setLoading(true);

    setTimeout(() => {
      const score = Math.floor(Math.random() * 40) + 60;
      setRiskScore(score);

      setClauses([
        { name: "Termination Clause", status: "warning" },
        { name: "Dispute Resolution", status: "valid" },
        { name: "Indemnity Clause", status: "missing" },
        { name: "Governing Law", status: "valid" },
        { name: "Payment Terms", status: "warning" },
      ]);

      setLoading(false);
    }, 2000);
  };

  const handleDownloadReport = () => {
    if (riskScore === null) return;

    const doc = new jsPDF("p", "mm", "a4");

    doc.setFont("Times", "Bold");
    doc.setFontSize(16);
    doc.text("LEGAL ANALYSIS REPORT", 105, 20, { align: "center" });

    doc.setFont("Times", "Normal");
    doc.setFontSize(12);

    let y = 40;

    doc.text(`File: ${fileName}`, 20, y);
    y += 10;

    doc.text(`Risk Score: ${riskScore}/100`, 20, y);
    y += 15;

    doc.text("Clause Analysis:", 20, y);
    y += 10;

    clauses.forEach((clause) => {
      const symbol =
        clause.status === "valid"
          ? "✓"
          : clause.status === "warning"
          ? "⚠"
          : "✖";

      doc.text(`${symbol} ${clause.name}`, 25, y);
      y += 8;
    });

    doc.save("LegalFormat-Analysis-Report.pdf");
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

        {/* Results */}
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

              {/* Clause Badges */}
              <div>
                <h3 className="font-semibold mb-4">
                  Clause Detection
                </h3>

                <div className="space-y-3">
                  {clauses.map((clause, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-[#1a1a23] p-3 rounded-lg border border-gray-800"
                    >
                      <span>{clause.name}</span>

                      <span
                        className={
                          clause.status === "valid"
                            ? "text-green-400"
                            : clause.status === "warning"
                            ? "text-yellow-400"
                            : "text-red-400"
                        }
                      >
                        {clause.status === "valid"
                          ? "✓"
                          : clause.status === "warning"
                          ? "⚠"
                          : "✖"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">

                <button
                  onClick={handleDownloadReport}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
                >
                  Download Report PDF
                </button>

                <button
                  className="border border-gray-600 px-6 py-3 rounded-xl hover:border-purple-500 transition"
                >
                  Improve My Document
                </button>

              </div>

            </div>
          )}

          {!loading && riskScore === null && (
            <p className="text-gray-500">
              Upload and analyze a document to see results.
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
