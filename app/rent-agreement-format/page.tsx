```tsx
"use client";

import { useState } from "react";

export default function RentAgreementPage() {

  const [loading, setLoading] = useState(false);

  const startPayment = async () => {

    try {

      setLoading(true);

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
      });

      const data = await res.json();

      console.log("Stripe response:", data);

      if (data.url) {

        window.location.href = data.url;

      } else {

        alert(data.error || "Stripe checkout failed");

      }

    } catch (error) {

      console.error("Payment error:", error);
      alert("Payment error");

    }

    setLoading(false);

  };

  return (

    <main style={{ padding: "40px" }}>

      <h1>Rent Agreement Generator</h1>

      <button
        onClick={startPayment}
        style={{
          padding: "12px 20px",
          background: "purple",
          color: "white",
          borderRadius: "6px",
          marginTop: "20px"
        }}
      >
        {loading ? "Processing..." : "Pay ₹10 & Download"}
      </button>

    </main>

  );

}
```
