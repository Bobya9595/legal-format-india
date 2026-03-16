
"use client";

import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

export default function RentAgreementPage() {

  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");
  const [extraRules, setExtraRules] = useState("");

  const [agreement, setAgreement] = useState("");
  const [displayText, setDisplayText] = useState("");

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);

  /* AI GENERATION */

  const generateAgreement = async () => {

    setLoading(true);

    const res = await fetch("/api/generate-document", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        landlord,
        tenant,
        rent,
        extraRules
      })
    });

    const data = await res.json();

    setAgreement(data.document);
    setDisplayText("");
    setStep(2);
    setLoading(false);

  };

  /* AI TYPING EFFECT */

  useEffect(() => {

    if (!agreement) return;

    let i = 0;

    const interval = setInterval(() => {

      setDisplayText((prev) => prev + agreement[i]);

      i++;

      if (i >= agreement.length) {
        clearInterval(interval);
      }

    }, 10);

    return () => clearInterval(interval);

  }, [agreement]);

  /* PAYMENT */

  const startPayment = async () => {

    const res = await fetch("/api/create-checkout-session", {
      method: "POST"
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }

  };

  /* DOWNLOAD */

  const downloadPDF = () => {

    const pdf = new jsPDF();
    pdf.text(agreement, 10, 10);
    pdf.save("rent-agreement.pdf");

  };

  const downloadDOCX = async () => {

    const doc = new Document({
      sections: [
        {
          children: agreement.split("\n").map(
            (line) => new Paragraph(line)
          )
        }
      ]
    });

    const blob = await Packer.toBlob(doc);

    saveAs(blob, "rent-agreement.docx");

  };

  return (

    <main className="min-h-screen bg-[#020617] text-white flex">

      {/* SIDEBAR */}

      <div className="w-64 border-r border-gray-800 p-6 hidden md:block">

        <h2 className="text-xl font-bold mb-6">
          Templates
        </h2>

        <div className="flex flex-col gap-4 text-gray-300">

          <div className="hover:text-purple-400 cursor-pointer">
            Rent Agreement
          </div>

          <div className="hover:text-purple-400 cursor-pointer">
            NDA Agreement
          </div>

          <div className="hover:text-purple-400 cursor-pointer">
            Freelance Contract
          </div>

          <div className="hover:text-purple-400 cursor-pointer">
            Experience Letter
          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="flex-1 px-10 py-10">

        {/* BRAND */}

        <h1 className="text-3xl font-bold mb-6">
          Legal<span className="text-purple-500">Format</span>
        </h1>

        {/* STEPS */}

        <div className="flex gap-6 mb-10 text-sm">

          <div className={step >= 1 ? "text-purple-400" : "text-gray-500"}>
            1. Fill Details
          </div>

          <div className={step >= 2 ? "text-purple-400" : "text-gray-500"}>
            2. Preview
          </div>

          <div className={step >= 3 ? "text-purple-400" : "text-gray-500"}>
            3. Download
          </div>

        </div>

        {/* FORM STEP */}

        {step === 1 && (

          <div className="max-w-lg bg-white/5 border border-white/10 p-8 rounded-xl">

            <div className="flex flex-col gap-4">

              <input
                placeholder="Landlord Name"
                className="p-3 rounded bg-gray-800 border border-gray-700"
                onChange={(e)=>setLandlord(e.target.value)}
              />

              <input
                placeholder="Tenant Name"
                className="p-3 rounded bg-gray-800 border border-gray-700"
                onChange={(e)=>setTenant(e.target.value)}
              />

              <input
                placeholder="Monthly Rent (₹)"
                className="p-3 rounded bg-gray-800 border border-gray-700"
                onChange={(e)=>setRent(e.target.value)}
              />

              <textarea
                placeholder="Optional rules (example: no pets, 11 months agreement)"
                className="p-3 rounded bg-gray-800 border border-gray-700 h-24"
                onChange={(e)=>setExtraRules(e.target.value)}
              />

              <button
                onClick={generateAgreement}
                className="bg-gradient-to-r from-purple-500 to-purple-700 py-3 rounded-lg"
              >
                {loading ? "Generating..." : "Generate Agreement"}
              </button>

            </div>

          </div>

        )}

        {/* PREVIEW STEP */}

        {step === 2 && (

          <div className="relative bg-white text-black p-8 rounded-xl max-w-3xl shadow-xl">

            <h2 className="text-lg font-bold mb-4">
              Agreement Preview
            </h2>

            <div className={paid ? "" : "blur-md"}>

              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                {displayText}
              </pre>

            </div>

            {!paid && (

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-xl">

                <p className="text-white mb-4">
                  Unlock full agreement for ₹10
                </p>

                <button
                  onClick={startPayment}
                  className="bg-purple-600 px-6 py-3 rounded-lg text-white"
                >
                  Pay ₹10
                </button>

              </div>

            )}

            {paid && (

              <div className="flex gap-4 mt-6">

                <button
                  onClick={downloadPDF}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Download PDF
                </button>

                <button
                  onClick={downloadDOCX}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Download Word
                </button>

              </div>

            )}

          </div>

        )}

      </div>

    </main>

  );

}

