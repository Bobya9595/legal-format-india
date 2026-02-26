"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function RentAgreement() {
  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [property, setProperty] = useState("");
  const [rent, setRent] = useState("");
  const [deposit, setDeposit] = useState("");
  const [duration, setDuration] = useState("");
  const [agreementText, setAgreementText] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAgreement = () => {
    const text = `
RENT AGREEMENT

This Rent Agreement is made between ${landlord} (Landlord) and ${tenant} (Tenant).

Property Address: ${property}

Monthly Rent: ₹${rent}

Security Deposit: ₹${deposit}

Duration: ${duration} months

The Tenant agrees to pay the monthly rent on time and maintain the property in good condition.
`;

    setAgreementText(text);
  };

  const enhanceWithAI = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/improve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: agreementText }),
      });

      const data = await res.json();

      if (data.result) {
        setAgreementText(data.result);
      } else {
        alert("AI failed to respond");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Times", "Normal");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(agreementText, 180);
    doc.text(lines, 15, 20);

    doc.save("Rent_Agreement.pdf");
  };

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">AI Rent Agreement Generator</h1>

      <input
        className="border p-2 w-full"
        placeholder="Landlord Name"
        value={landlord}
        onChange={(e) => setLandlord(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        placeholder="Tenant Name"
        value={tenant}
        onChange={(e) => setTenant(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        placeholder="Property Address"
        value={property}
        onChange={(e) => setProperty(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        placeholder="Monthly Rent"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        placeholder="Security Deposit"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        placeholder="Duration (in months)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <div className="flex gap-4">
        <button
          onClick={generateAgreement}
          className="bg-blue-600 text-white px-4 py-2"
        >
          Generate Agreement
        </button>

        <button
          onClick={enhanceWithAI}
          className="bg-green-600 text-white px-4 py-2"
        >
          {loading ? "Enhancing..." : "Enhance with AI"}
        </button>

        <button
          onClick={downloadPDF}
          className="bg-black text-white px-4 py-2"
        >
          Download PDF
        </button>
      </div>

      <textarea
        className="border p-4 w-full h-96"
        value={agreementText}
        onChange={(e) => setAgreementText(e.target.value)}
      />
    </div>
  );
}
