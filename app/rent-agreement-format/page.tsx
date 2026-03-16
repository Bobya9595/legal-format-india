
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";

export default function RentAgreementPage() {

  const router = useRouter();

  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");
  const [extraRules, setExtraRules] = useState("");

  const [agreement, setAgreement] = useState("");
  const [loading, setLoading] = useState(false);

  /* GENERATE AGREEMENT */

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

  /* PAYMENT FLOW */

  const handlePayment = async () => {

    if (!auth.currentUser) {

      router.push("/login");
      return;

    }

    const res = await fetch("/api/create-checkout-session", {
      method: "POST"
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }

  };

  return (

    <main className="min-h-screen bg-[#020617] text-white px-10 py-12">

      {/* HEADER */}

      <h1 className="text-3xl font-bold mb-10">
        Legal<span className="text-purple-500">Format</span>
      </h1>

      {/* MAIN GRID */}

      <div className="grid grid-cols-2 gap-12">

        {/* LEFT SIDE FORM */}

        <div className="bg-white/5 border border-white/10 rounded-xl p-8">

          <h2 className="text-xl font-semibold mb-6">
            Rent Agreement Details
          </h2>

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

        {/* RIGHT SIDE PREVIEW */}

        <div className="bg-white text-black rounded-xl p-8 shadow-xl relative">

          <h2 className="text-lg font-semibold mb-4">
            Agreement Preview
          </h2>

          {agreement ? (

            <>
              <div className="blur-sm select-none">

                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                  {agreement}
                </pre>

              </div>

              {/* PAY BUTTON */}

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-xl">

                <p className="text-white mb-4">
                  Unlock full agreement for ₹10
                </p>

                <button
                  onClick={handlePayment}
                  className="bg-purple-600 px-6 py-3 rounded-lg text-white"
                >
                  Pay ₹10 & Download
                </button>

              </div>

            </>

          ) : (

            <p className="text-gray-500">
              Generate the agreement to preview the document.
            </p>

          )}

        </div>

      </div>

    </main>

  );

}

