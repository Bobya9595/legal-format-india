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
  const [improvedDoc, setImprovedDoc] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setRiskScore(null);
      setClauses([]);
      setImprovedDoc("");
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

  const handleImprove = () => {
    const improvedText = `
IMPROVED AGREEMENT DRAFT

This agreement has been enhanced to include:

1. Clear termination clause with defined notice period.
2. Proper indemnity clause to reduce liability risk.
3. Explicit governing jurisdiction.
4. Structured payment terms.
5. Dispute resolution mechanism (Arbitration clause).

This draft provides improved legal protection and clarity.
    `;

    setImprovedDoc(improvedText);
  };

  const handleDownloadImproved = () => {
    if (!improvedDoc) return;

    const doc = new jsPDF("p", "mm", "a4");
    doc.setFont("Times", "Normal");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(improvedDoc, 170);
    doc.text(lines, 20, 30);

    doc.save("Improved-Agreement.pdf");
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
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800 space-y-6">

          <div className="border-2 border-dashed border-gray-700 rounded-2xl p-8 text-center bg-[#1a1a23] hover:border-purple-500 transition">

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="fileUpload"
            />

            <label
              htmlFor="fileUpload"
              className="cursor-pointer flex flex-col items-center gap-3"
            >
              <div className="text-purple-400 text-4xl">📄</div>

              <p className="text-gray-300 font-medium">
                Click to upload agreement
              </p>

              <p className="text-gray-500 text-sm">
                PDF or DOCX (Max 5MB)
              </p>
            </label>

            {fileName && (
              <div className="mt-4 text-sm text-green-400">
                ✓ {fileName} selected
              </div>
            )}
          </div>

          <button
            onClick={handleAnalyze}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl hover:scale-105 transition"
          >
            {loading ? "Analyzing..." : "Analyze Agreement"}
          </button>

        </div>

        {/* Results Section */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800">

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

              {/* Clause Detection */}
              <div className="space-y-3">
                {clauses.map((clause, index) => (
                  <div
                    key={index}
                    className="flex justify-between bg-[#1a1a23] p-3 rounded-lg border border-gray-800"
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

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 flex-wrap">

                <button
                  onClick={handleDownloadReport}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
                >
                  Download Report
                </button>

                <button
                  onClick={handleImprove}
                  className="border border-gray-600 px-6 py-3 rounded-xl hover:border-purple-500 transition"
                >
                  Improve My Document
                </button>

              </div>

              {/* Improved Draft */}
              {improvedDoc && (
                <div className="mt-6 space-y-4">

                  <textarea
                    value={improvedDoc}
                    onChange={(e) => setImprovedDoc(e.target.value)}
                    className="w-full bg-[#1a1a23] border border-gray-700 rounded-xl p-4 text-sm"
                    rows={8}
                  />

                  <button
                    onClick={handleDownloadImproved}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
                  >
                    Download Improved Draft
                  </button>

                </div>
              )}

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
