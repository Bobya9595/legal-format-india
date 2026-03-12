import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const prompt = `
You are a professional legal contract drafting assistant.

Create a RENT AGREEMENT for India using the following details.

Landlord: ${body.landlord}
Tenant: ${body.tenant}
Monthly Rent: ₹${body.rent}
Property Address: ${body.address}

The agreement must be structured like a real legal document.

Format:

RENT AGREEMENT

1. PARTIES  
Explain the landlord and tenant relationship.

2. PROPERTY DETAILS  
Describe the rented property.

3. RENT TERMS  
Mention monthly rent and payment rules.

4. SECURITY DEPOSIT

5. AGREEMENT DURATION

6. TENANT RESPONSIBILITIES

7. LANDLORD RESPONSIBILITIES

8. TERMINATION CLAUSE

9. GOVERNING LAW

10. SIGNATURES

Use clear legal language with numbered clauses.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ]
    });

    const document = completion.choices[0].message.content;

    return Response.json({
      document
    });

  } catch (error) {

    console.error("AI generation error:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to generate document"
      }),
      { status: 500 }
    );
  }
}
