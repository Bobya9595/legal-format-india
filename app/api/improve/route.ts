import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { draft } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional Indian legal document drafting assistant. Improve the grammar, clarity, formatting, and professionalism of the following legal draft while keeping all details intact.",
        },
        {
          role: "user",
          content: draft,
        },
      ],
      temperature: 0.4,
    });

    return NextResponse.json({
      improved: completion.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
  }
}
