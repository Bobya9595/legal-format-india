import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a legal expert in Indian rental agreements. Improve the legal language, make it professional, structured, and more legally sound while keeping original meaning.",
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.7,
    });

    return NextResponse.json({
      result: completion.choices[0].message.content,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "AI enhancement failed" },
      { status: 500 }
    );
  }
}
