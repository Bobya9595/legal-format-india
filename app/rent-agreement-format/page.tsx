"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import Navbar from "../../components/Navbar";

export default function RentAgreementPage() {
  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");
  const [address, setAddress] = useState("");

  const generatePDF = () => {
    const doc = new jsPDF();

    const text = `
RENT AGREEMENT

This Rent Agreement is made between:

Landlord: ${landlord}
Tenant: ${tenant}

Property Address:
${address}

Monthly Rent: ₹${rent}

Generated using LegalFormat.
`;

    doc.text(text, 10, 20);
    doc.save("rent-agreement.pdf");
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="flex flex-col items-center py-20 px-6">

        <h1 className="text-4xl font-bold mb-10">
          Rent Agreement Generator
        </h1>

        <div className="w-full max-w-lg space-y-4">

          <input
            placeholder="Landlord Name"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            onChange={(e) => setLandlord(e.target.value)}
          />

          <input
            placeholder="Tenant Name"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            onChange={(e) => setTenant(e.target.value)}
          />

          <input
            placeholder="Monthly Rent"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            onChange={(e) => setRent(e.target.value)}
          />

          <textarea
            placeholder="Property Address"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            onClick={generatePDF}
            className="w-full bg-purple-600 py-3 rounded-lg"
          >
            Generate PDF
          </button>

        </div>

      </div>

    </main>
  );
}
