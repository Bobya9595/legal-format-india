import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Legal Agreement Download",
            },
            unit_amount: 1000, // ₹10
          },
          quantity: 1,
        },
      ],

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    });

    return Response.json({ url: session.url });

  } catch (error: any) {
    console.error("Stripe Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
