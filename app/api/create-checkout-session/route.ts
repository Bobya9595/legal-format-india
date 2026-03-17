import Stripe from "stripe";

export async function POST() {
  try {
    // ✅ SAFE INIT
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Legal Agreement",
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    });

    return Response.json({ url: session.url });

  } catch (error: any) {
    console.error("STRIPE FULL ERROR:", error);

    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
