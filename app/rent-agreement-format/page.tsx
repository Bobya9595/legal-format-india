"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function RentAgreement() {
  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [deposit, setDeposit] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const formatDate = (inputDate: string) => {
    if (!inputDate) return "____";
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(inputDate).toLocaleDateString("en-IN", options);
  };

  const agreementText = `
                                RENT AGREEMENT

This Rent Agreement is made and executed on this ${formatDate(
    date
  )} at ___________.

BETWEEN

Mr./Ms. ${landlord || "Landlord Name"}, hereinafter referred to as the
"LANDLORD" (which expression shall mean and include his/her heirs, successors,
legal representatives and assigns)

AND

Mr./Ms. ${tenant || "Tenant Name"}, hereinafter referred to as the
"TENANT" (which expression shall mean and include his/her heirs, successors,
legal representatives and assigns).

WHEREAS the Landlord is the absolute owner of the property situated at:

${propertyAddress || "Full Property Address Here"}

NOW THIS AGREEMENT WITNESSETH AS FOLLOWS:

1. TERM:
The tenancy shall commence from ${formatDate(
    date
  )} for a period of ${duration || "11"} months.

2. RENT:
The Tenant agrees to pay a monthly rent of ₹${
    rentAmount || "________"
  } (Rupees __________________ only) payable on or before the 5th day of every month.

3. SECURITY DEPOSIT:
The Tenant has paid a refundable security deposit of ₹${
    deposit || "________"
  } (Rupees __________________ only).

4. USE OF PROPERTY:
The property shall be used for residential purposes only.

5. MAINTENANCE:
The Tenant shall maintain the premises in good condition and shall not cause damage.

6. UTILITIES:
Electricity, water, gas and other charges shall be borne by the Tenant.

7. TERMINATION:
Either party may terminate this agreement by giving one month's prior written notice.

8. GOVERNING LAW:
This Agreement shall be governed under the laws of India.

IN WITNESS WHEREOF the parties have signed this agreement on the day,
month and year first above written.

----------------------------                ----------------------------
LANDLORD SIGNATURE                          TENANT SIGNATURE

Name: _____________________                  Name: _____________________


WITNESSES:

1. __________________________
2. __________________________
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(agreementText);
    alert("Copied to clipboard!");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(agreementText, 180);
    doc.text(lines, 10, 10);
    doc.save("Rent-Agreement-India-2026.pdf");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Rent Agreement Format (India 2026)
        </h1>

        <div className="grid gap-4 mb-8">
          <input
            type="text"
            placeholder="Landlord Name"
            className="border p-3 rounded"
            value={landlord}
            onChange={(e) => setLandlord(e.target.value)}
          />

          <input
            type="text"
            placeholder="Tenant Name"
            className="border p-3 rounded"
            value={tenant}
            onChange={(e) => setTenant(e.target.value)}
          />

          <input
            type="text"
            placeholder="Full Property Address"
            className="border p-3 rounded"
            value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
          />

          <input
            type="number"
            placeholder="Monthly Rent Amount (₹)"
            className="border p-3 rounded"
            value={rentAmount}
            onChange={(e) => setRentAmount(e.target.value)}
          />

          <input
            type="number"
            placeholder="Security Deposit (₹)"
            className="border p-3 rounded"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />

          <input
            type="number"
            placeholder="Agreement Duration (Months)"
            className="border p-3 rounded"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          <input
            type="date"
            className="border p-3 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="border p-6 rounded bg-gray-50 text-gray-800 whitespace-pre-line mb-6">
          {agreementText}
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Copy Agreement
          </button>

          <button
            onClick={downloadPDF}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Download PDF
          </button>
        </div>
      </div>
    </main>
  );
}
