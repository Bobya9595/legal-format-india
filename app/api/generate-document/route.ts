import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const prompt = `
You are a professional legal contract drafting assistant.

Write a professional RENT AGREEMENT for India using the details below.

Landlord Name: ${body.landlord}
Tenant Name: ${body.tenant}
Monthly Rent: ₹${body.rent}
Property Address: ${body.address}

Use this format exactly:

# RENT AGREEMENT

## 1. PARTIES
Describe the landlord and tenant.

## 2. PROPERTY DETAILS
Describe the property being rented.

## 3. RENT TERMS
Explain rent amount, due date, and payment method.

## 4. SECURITY DEPOSIT
Explain deposit amount and refund rules.

## 5. AGREEMENT DURATION
Mention start date and duration.

## 6. TENANT RESPONSIBILITIES
List tenant duties.

## 7. LANDLORD RESPONSIBILITIES
List landlord duties.

## 8. TERMINATION
Explain notice period and termination rules.

## 9. GOVERNING LAW
Mention Indian jurisdiction.

## 10. SIGNATURES
Provide landlord and tenant signature sections.

Use professional legal language suitable for India.
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
      JSON.stringify({ error: "Failed to generate document" }),
      { status: 500 }
    );
  }
}
