import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { draft } = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional Indian legal document drafting assistant. Improve grammar, clarity, formatting and professionalism while keeping original meaning.",
        },
        {
          role: "user",
          content: draft,
        },
      ],
      temperature: 0.4,
    }),
  });

  const data = await response.json();

  return NextResponse.json({
    improved: data.choices?.[0]?.message?.content || "AI failed",
  });
}
