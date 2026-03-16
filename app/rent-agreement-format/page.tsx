
"use client";

import { useState } from "react";

export default function RentAgreementPage() {

  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");

  const [agreement, setAgreement] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAgreement = async () => {

    if (!landlord || !tenant || !rent) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {

      const res = await fetch("/api/generate-document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          landlord,
          tenant,
          rent
        })
      });

      const data = await res.json();

      setAgreement(data.document);

    } catch (error) {

      console.error(error);
      alert("Error generating agreement");

    }

    setLoading(false);

  };

  return (

    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center pt-20">

      <h1 className="text-4xl font-bold mb-10">
        Rent Agreement Generator
      </h1>

      {/* FORM */}

      <div className="flex flex-col gap-4 w-[420px]">

        <input
          placeholder="Landlord Name"
          className="p-3 rounded bg-gray-800"
          onChange={(e) => setLandlord(e.target.value)}
        />

        <input
          placeholder="Tenant Name"
          className="p-3 rounded bg-gray-800"
          onChange={(e) => setTenant(e.target.value)}
        />

        <input
          placeholder="Monthly Rent (₹)"
          className="p-3 rounded bg-gray-800"
          onChange={(e) => setRent(e.target.value)}
        />

        <button
          onClick={generateAgreement}
          className="bg-purple-600 py-3 rounded-lg"
        >
          {loading ? "Generating..." : "Generate Agreement"}
        </button>

      </div>

      {/* DOCUMENT PREVIEW */}

      {agreement && (

        <div className="mt-12 bg-gray-900 p-6 rounded-lg w-[750px]">

          <h2 className="text-xl font-semibold mb-4">
            Generated Agreement
          </h2>

          <pre className="whitespace-pre-wrap text-gray-300">
            {agreement}
          </pre>

        </div>

      )}

    </main>

  );

}

