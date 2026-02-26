"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function RentAgreementFormat() {
  const [form, setForm] = useState({
    landlordName: "",
    landlordAddress: "",
    tenantName: "",
    tenantAddress: "",
    propertyAddress: "",
    city: "",
    rent: "",
    deposit: "",
    duration: "11",
    noticePeriod: "30",
    startDate: "",
  });

  const [agreementText, setAgreementText] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateAgreement = () => {
    const today = new Date().toLocaleDateString("en-IN");

    const text = `
RENT AGREEMENT

THIS RENT AGREEMENT is made and executed at ${form.city} on ${today}.

BETWEEN

Mr./Ms. ${form.landlordName}, residing at ${form.landlordAddress}, hereinafter referred to as the "LANDLORD";

AND

Mr./Ms. ${form.tenantName}, residing at ${form.tenantAddress}, hereinafter referred to as the "TENANT".

WHEREAS:

1. The Landlord is the absolute owner of the property situated at:
   ${form.propertyAddress} (hereinafter referred to as the "Demised Premises").

2. The Tenant has approached the Landlord to take the premises on rent for residential purposes.

NOW THIS AGREEMENT WITNESSETH AS FOLLOWS:

1. TERM:
   The tenancy shall commence from ${form.startDate} and shall remain valid for ${form.duration} months.

2. RENT:
   The Tenant agrees to pay a monthly rent of ₹${form.rent} payable on or before the 5th day of each month.

3. SECURITY DEPOSIT:
   The Tenant has paid a refundable security deposit of ₹${form.deposit}.

4. USE OF PREMISES:
   The premises shall be used strictly for residential purposes only.

5. MAINTENANCE:
   The Tenant shall maintain the premises in good and tenantable condition.

6. UTILITIES:
   Electricity, water, gas and other utility charges shall be borne by the Tenant.

7. TERMINATION:
   Either party may terminate this agreement by giving ${form.noticePeriod} days prior written notice.

8. SUB-LETTING:
   The Tenant shall not sub-let the premises without written consent of the Landlord.

9. JURISDICTION:
   This agreement shall be governed by the laws of India and subject to the jurisdiction of courts at ${form.city}.

IN WITNESS WHEREOF both parties have signed this Agreement on the date mentioned above.

-----------------------------
LANDLORD SIGNATURE

-----------------------------
TENANT SIGNATURE

-----------------------------
WITNESS 1

-----------------------------
WITNESS 2
`;

    setAgreementText(text);
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
    <div className="max-w-5xl mx-auto p-10 space-y-6">
      <h1 className="text-3xl font-bold">Rent Agreement Format</h1>

      <div className="grid grid-cols-2 gap-4">
        <input name="landlordName" placeholder="Landlord Name" className="border p-2" onChange={handleChange} />
        <input name="landlordAddress" placeholder="Landlord Address" className="border p-2" onChange={handleChange} />
        <input name="tenantName" placeholder="Tenant Name" className="border p-2" onChange={handleChange} />
        <input name="tenantAddress" placeholder="Tenant Address" className="border p-2" onChange={handleChange} />
        <input name="propertyAddress" placeholder="Property Full Address" className="border p-2 col-span-2" onChange={handleChange} />
        <input name="city" placeholder="City" className="border p-2" onChange={handleChange} />
        <input name="rent" placeholder="Monthly Rent (₹)" className="border p-2" onChange={handleChange} />
        <input name="deposit" placeholder="Security Deposit (₹)" className="border p-2" onChange={handleChange} />
        <input name="duration" placeholder="Duration (Months)" className="border p-2" defaultValue="11" onChange={handleChange} />
        <input name="noticePeriod" placeholder="Notice Period (Days)" className="border p-2" defaultValue="30" onChange={handleChange} />
        <input type="date" name="startDate" className="border p-2 col-span-2" onChange={handleChange} />
      </div>

      <div className="flex gap-4">
        <button onClick={generateAgreement} className="bg-blue-600 text-white px-6 py-2">
          Generate Agreement
        </button>

        <button onClick={downloadPDF} className="bg-green-600 text-white px-6 py-2">
          Download PDF
        </button>
      </div>

      <textarea
        className="border w-full h-96 p-4"
        value={agreementText}
        onChange={(e) => setAgreementText(e.target.value)}
      />
    </div>
  );
}
