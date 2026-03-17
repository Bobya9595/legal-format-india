"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";

export default function RentAgreementPage() {
  const router = useRouter();

  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");
  const [rules, setRules] = useState("");
  const [agreement, setAgreement] = useState("");
  const [loading, setLoading] = useState(false);

  // Load Razorpay
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Generate Agreement
  const generateAgreement = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate-document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ landlord, tenant, rent, rules }),
      });

      const data = await res.json();
      setAgreement(data.document);
      localStorage.setItem("agreement", data.document);
    } catch {
      alert("Error generating agreement");
    }
    setLoading(false);
  };

  // Payment
  const handlePayment = async () => {
    if (!auth.currentUser) {
      router.push("/login");
      return;
    }

    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Razorpay failed to load");
      return;
    }

    const res = await fetch("/api/create-order", {
      method: "POST",
    });

    const order = await res.json();

    if (!order.id) {
      alert("Order failed");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "LegalFormat",
      description: "Download Agreement",
      order_id: order.id,
      handler: function () {
        window.location.href = "/success";
      },
      theme: { color: "#7c3aed" },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white px-10 py-12">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-10">
        Legal<span className="text-purple-500">Format</span>
      </h1>

      <div className="grid grid-cols-2 gap-10">

        {/* LEFT FORM */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6">
            Rent Agreement Details
          </h2>

          <div className="flex flex-col gap-4">

            <input
              placeholder="Landlord Name"
              className="p-3 rounded bg-gray-800 border border-gray-700"
              onChange={(e) => setLandlord(e.target.value)}
            />

            <input
              placeholder="Tenant Name"
              className="p-3 rounded bg-gray-800 border border-gray-700"
              onChange={(e) => setTenant(e.target.value)}
            />

            <input
              placeholder="Monthly Rent (₹)"
              className="p-3 rounded bg-gray-800 border border-gray-700"
              onChange={(e) => setRent(e.target.value)}
            />

            <textarea
              placeholder="Rules (optional)"
              className="p-3 rounded bg-gray-800 border border-gray-700 h-24"
              onChange={(e) => setRules(e.target.value)}
            />

            <button
              onClick={generateAgreement}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 py-3 rounded-lg font-semibold"
            >
              {loading ? "Generating..." : "Generate Agreement"}
            </button>

          </div>
        </div>

        {/* RIGHT PREVIEW */}
        <div className="relative bg-[#0b1220] border border-white/10 rounded-xl h-[600px] overflow-hidden flex flex-col">

          <div className="p-4 border-b border-white/10 text-gray-400">
            Agreement Preview
          </div>

          {agreement ? (
            <div className="relative flex-1">

              {/* SCROLL AREA */}
              <div className="h-full overflow-y-auto flex justify-center p-6">

                <div className="w-[500px] bg-white text-black rounded-lg p-6 text-sm leading-6 font-serif">

                  <pre className="whitespace-pre-wrap">
                    {agreement}
                  </pre>

                </div>

              </div>

              {/* PAYWALL */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-50">

                <div className="bg-[#0f172a] p-6 rounded-xl text-center w-[300px]">

                  <p className="text-lg font-semibold mb-2">
                    Unlock full agreement
                  </p>

                  <p className="text-sm text-gray-400 mb-4">
                    Pay ₹1 to download
                  </p>

                  <button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 py-3 rounded-lg font-semibold"
                  >
                    Pay ₹1 & Download
                  </button>

                </div>

              </div>

            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Generate agreement to preview
            </div>
          )}

        </div>

      </div>
    </main>
  );
}
