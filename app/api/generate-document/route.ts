import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();

  const prompt = `
Create a professional Rent Agreement for India.

Landlord: ${body.landlord}
Tenant: ${body.tenant}
Monthly Rent: ₹${body.rent}
Property Address: ${body.address}

Include:
- Introduction
- Rent Terms
- Security Deposit
- Duration
- Responsibilities
- Termination
- Governing Law

Write it like a proper legal contract.
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return Response.json({
    document: completion.choices[0].message.content,
  });
}
