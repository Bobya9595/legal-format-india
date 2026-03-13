
const startPayment = async () => {

  try {

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    console.log("Stripe response:", data);

    if (data.url) {

      // Redirect user to Stripe checkout
      window.location.href = data.url;

    } else {

      alert(data.error || "Stripe checkout failed");

    }

  } catch (error) {

    console.error("Payment error:", error);
    alert("Payment error");

  }

};

