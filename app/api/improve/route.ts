import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { agreementText } = body;

    if (!agreementText) {
      return NextResponse.json(
        { error: "Agreement text is required" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [
        {
          role: "system",
          content: `
You are an expert Indian real estate legal advisor.
Analyze Indian rent agreements and provide:

1. Risk Score (0–100)
2. Missing Clauses
3. Compliance Issues
4. Legal Risks
5. Suggested Corrections
6. Improved Version of Problematic Clauses

Focus on Maharashtra Leave & License rules if applicable.
Return response in structured format.
          `,
        },
        {
          role: "user",
          content: agreementText,
        },
      ],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({
      success: true,
      analysis: result,
    });

  } catch (error: any) {
    console.error("AI Error:", error);

    return NextResponse.json(
      { error: "Failed to analyze agreement" },
      { status: 500 }
    );
  }
}
