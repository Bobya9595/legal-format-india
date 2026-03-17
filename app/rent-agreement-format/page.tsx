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

  // 🔥 Load Razorpay
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // ✅ Generate Agreement + Save
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

      // ✅ SAVE AGREEMENT FOR DOWNLOAD
      localStorage.setItem("agreement", data.document);

    } catch {
      alert("Error generating agreement");
    }

    setLoading(false);
  };

  // 💰 Payment
  const handlePayment = async () => {
    if (!auth.currentUser) {
      router.push("/login");
      return;
    }

    const loaded = await loadRazorpay();

    if (!loaded) {
      alert("Razorpay failed");
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

      theme: {
        color: "#7c3aed",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white px-10 py-12">
      <h1 className="text-3xl font-bold mb-10">
        Legal<span className="text-purple-500">Format</span>
      </h1>

      <div className="grid grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white/5 p-8 rounded-xl">
          <h2 className="text-xl mb-6">Rent Agreement Details</h2>

          <input
            placeholder="Landlord"
            className="p-3 mb-4 w-full bg-gray-800"
            onChange={(e) => setLandlord(e.target.value)}
          />

          <input
            placeholder="Tenant"
            className="p-3 mb-4 w-full bg-gray-800"
            onChange={(e) => setTenant(e.target.value)}
          />

          <input
            placeholder="Rent"
            className="p-3 mb-4 w-full bg-gray-800"
            onChange={(e) => setRent(e.target.value)}
          />

          <textarea
            placeholder="Rules"
            className="p-3 mb-4 w-full bg-gray-800"
            onChange={(e) => setRules(e.target.value)}
          />

          <button
            onClick={generateAgreement}
            className="bg-purple-600 px-6 py-3 rounded-lg"
          >
            {loading ? "Generating..." : "Generate Agreement"}
          </button>
        </div>

        {/* PREVIEW */}
        <div className="relative bg-white text-black rounded-xl p-6">

          {agreement ? (
            <>
              <pre className="blur-sm">{agreement}</pre>

              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <button
                  onClick={handlePayment}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg"
                >
                  Pay ₹1 & Download
                </button>
              </div>
            </>
          ) : (
            <p>Generate agreement to preview</p>
          )}
        </div>

      </div>
    </main>
  );
}
