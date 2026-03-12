import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const prompt = `
Create a professional rent agreement in India.

Landlord: ${body.landlord}
Tenant: ${body.tenant}
Monthly Rent: ₹${body.rent}
Property Address: ${body.address}

Write a legal contract with clauses.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ]
    });

    return Response.json({
      document: completion.choices[0].message.content
    });

  } catch (error) {

    console.error(error);

    return new Response(
      JSON.stringify({ error: "Failed to generate document" }),
      { status: 500 }
    );
  }
}
