
"use client";

import { useState } from "react";

export default function RentAgreementPage() {

  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");
  const [extraRules, setExtraRules] = useState("");

  const [agreement, setAgreement] = useState("");
  const [loading, setLoading] = useState(false);

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

    setLoading(false);

  };

  return (

    <main className="min-h-screen bg-gradient-to-b from-[#020617] to-[#020617] text-white">

      {/* HEADER */}

      <div className="max-w-5xl mx-auto px-6 pt-12">

        <h1 className="text-3xl font-bold">
          Legal<span className="text-purple-500">Format</span>
        </h1>

      </div>

      {/* PAGE TITLE */}

      <div className="text-center mt-10 mb-12">

        <h2 className="text-4xl font-bold mb-3">
          Rent Agreement Generator
        </h2>

        <p className="text-gray-400">
          Generate legally structured rent agreements in seconds using AI.
        </p>

      </div>

      {/* FORM */}

      <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur">

        <div className="flex flex-col gap-4">

          <input
            placeholder="Landlord Name"
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            onChange={(e)=>setLandlord(e.target.value)}
          />

          <input
            placeholder="Tenant Name"
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            onChange={(e)=>setTenant(e.target.value)}
          />

          <input
            placeholder="Monthly Rent (₹)"
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            onChange={(e)=>setRent(e.target.value)}
          />

          {/* OPTIONAL DESCRIPTION */}

          <textarea
            placeholder="Optional: Add special rules or clauses (example: no pets, 11 month agreement, etc)"
            className="p-3 rounded bg-gray-800 border border-gray-700 h-24 focus:outline-none"
            onChange={(e)=>setExtraRules(e.target.value)}
          />

          <button
            onClick={generateAgreement}
            className="bg-gradient-to-r from-purple-500 to-purple-700 py-3 rounded-lg font-semibold mt-2"
          >
            {loading ? "Generating..." : "Generate Agreement"}
          </button>

        </div>

      </div>

      {/* DOCUMENT PREVIEW */}

      {agreement && (

        <div className="max-w-3xl mx-auto mt-14 bg-white text-black p-8 rounded-xl shadow-lg">

          <h3 className="text-xl font-semibold mb-4">
            Agreement Preview
          </h3>

          <pre className="whitespace-pre-wrap text-sm leading-relaxed">
            {agreement}
          </pre>

        </div>

      )}

    </main>

  );

}

