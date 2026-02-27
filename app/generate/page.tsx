"use client";

import { useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";

export default function GeneratePage() {
  const [docType, setDocType] = useState("Rent Agreement");
  const [partyOne, setPartyOne] = useState("");
  const [partyTwo, setPartyTwo] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedDoc, setGeneratedDoc] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!partyOne || !partyTwo) {
      return alert("Please fill required fields");
    }

    setLoading(true);
    setGeneratedDoc(null);

    setTimeout(() => {
      setGeneratedDoc(`
${docType.toUpperCase()}

This agreement is made between ${partyOne} and ${partyTwo}.

${details || "Standard terms and conditions apply."}

1. TERM
The agreement shall remain valid as mutually agreed between the parties.

2. OBLIGATIONS
Both parties agree to comply with the terms stated herein.

3. GOVERNING LAW
This agreement shall be governed by the laws of India.

IN WITNESS WHEREOF, the parties have signed this agreement.
      `);
      setLoading(false);
    }, 1500);
  };

  const handleDownloadPDF = () => {
    if (!generatedDoc) return;

    const doc = new jsPDF("p", "mm", "a4");

    const marginLeft = 20;
    let yPosition = 30;

    // Title
    doc.setFont("Times", "Bold");
    doc.setFontSize(16);
    doc.text(docType.toUpperCase(), 105, 20, { align: "center" });

    // Body
    doc.setFont("Times", "Normal");
    doc.setFontSize(12);

    const bodyText = `
This agreement is made between ${partyOne} and ${partyTwo}.

${details || "Standard terms and conditions apply."}

1. TERM
The agreement shall remain valid as mutually agreed between the parties.

2. OBLIGATIONS
Both parties agree to comply with the terms stated herein.

3. GOVERNING LAW
This agreement shall be governed by the laws of India.

IN WITNESS WHEREOF, the parties have signed this agreement.
    `;

    const lines = doc.splitTextToSize(bodyText, 170);

    lines.forEach((line: string) => {
      if (yPosition > 260) {
        doc.addPage();
        yPosition = 20;
      }

      doc.text(line, marginLeft, yPosition);
      yPosition += 7;
    });

    // Signature Section
    yPosition += 20;

    doc.text("__________________________", marginLeft, yPosition);
    doc.text("Signature of Party 1", marginLeft, yPosition + 6);

    doc.text("__________________________", 110, yPosition);
    doc.text("Signature of Party 2", 110, yPosition + 6);

    doc.save("LegalFormat-Document.pdf");
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
        AI Document Generator
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Form Section */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800 space-y-6">

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Document Type
            </label>
            <select
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              className="w-full bg-[#1a1a23] border border-gray-700 rounded-xl p-3 focus:outline-none focus:border-purple-500"
            >
              <option>Rent Agreement</option>
              <option>Offer Letter</option>
              <option>NDA</option>
              <option>Service Agreement</option>
            </select>
          </div>

          <input
            value={partyOne}
            onChange={(e) => setPartyOne(e.target.value)}
            className="w-full bg-[#1a1a23] border border-gray-700 rounded-xl p-3 focus:outline-none focus:border-purple-500"
            placeholder="Party 1"
          />

          <input
            value={partyTwo}
            onChange={(e) => setPartyTwo(e.target.value)}
            className="w-full bg-[#1a1a23] border border-gray-700 rounded-xl p-3 focus:outline-none focus:border-purple-500"
            placeholder="Party 2"
          />

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full bg-[#1a1a23] border border-gray-700 rounded-xl p-3 focus:outline-none focus:border-purple-500"
            rows={4}
            placeholder="Additional details..."
          />

          <button
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl hover:scale-105 transition"
          >
            {loading ? "Generating..." : "Generate with AI"}
          </button>

        </div>

        {/* Result Section */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800">

          <h2 className="text-lg font-semibold mb-4">
            Generated Document
          </h2>

          {loading && (
            <p className="text-purple-400">
              AI is drafting your document...
            </p>
          )}

          {!loading && generatedDoc && (
            <div className="space-y-6">

              <pre className="whitespace-pre-wrap text-sm text-gray-300 bg-[#1a1a23] p-4 rounded-xl">
                {generatedDoc}
              </pre>

              <button
                onClick={handleDownloadPDF}
                className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                Download PDF
              </button>

            </div>
          )}

          {!loading && !generatedDoc && (
            <p className="text-gray-500">
              Fill the form and generate document.
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
