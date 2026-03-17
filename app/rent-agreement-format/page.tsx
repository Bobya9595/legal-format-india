"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";

export default function Page() {
  const router = useRouter();

  const [form, setForm] = useState({
    landlord: "",
    tenant: "",
    rent: "",
    deposit: "",
    address: "",
    duration: "",
    rules: "",
  });

  const [agreement, setAgreement] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // generate doc
  const generateAgreement = async () => {
    setLoading(true);

    const res = await fetch("/api/generate-document", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setAgreement(data.document);

    localStorage.setItem("agreement", data.document);

    setLoading(false);
  };

  // payment
  const handlePayment = async () => {
    if (!auth.currentUser) {
      router.push("/login");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = async () => {
      const res = await fetch("/api/create-order", { method: "POST" });
      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        order_id: order.id,
        name: "LegalFormat",
        description: "Rent Agreement",
        handler: () => {
          window.location.href = "/success";
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    };

    document.body.appendChild(script);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white p-10">

      <h1 className="text-3xl font-bold mb-8">
        Legal<span className="text-purple-500">Format</span>
      </h1>

      <div className="grid grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white/5 p-6 rounded-xl space-y-4">

          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              placeholder={key.toUpperCase()}
              className="w-full p-3 bg-gray-800 rounded"
              onChange={handleChange}
            />
          ))}

          <button
            onClick={generateAgreement}
            className="w-full bg-purple-600 py-3 rounded"
          >
            {loading ? "Generating..." : "Generate Agreement"}
          </button>

        </div>

        {/* PREVIEW */}
        <div className="relative bg-[#0b1220] h-[600px] rounded-xl overflow-hidden">

          {agreement ? (
            <>
              <div className="h-full overflow-y-auto flex justify-center p-6">
                <div className="bg-white text-black w-[500px] p-6 rounded shadow-xl">
                  <pre className="whitespace-pre-wrap">{agreement}</pre>
                </div>
              </div>

              {/* PAYWALL */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

                <div className="bg-[#0f172a] p-6 rounded text-center w-[280px]">

                  <p className="mb-2 font-semibold">Unlock Document</p>
                  <p className="mb-4 text-sm text-gray-400">Pay ₹1</p>

                  <button
                    onClick={handlePayment}
                    className="bg-purple-600 px-6 py-2 rounded"
                  >
                    Pay & Download
                  </button>

                </div>

              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Generate to preview
            </div>
          )}

        </div>

      </div>
    </main>
  );
}
