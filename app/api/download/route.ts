import { jsPDF } from "jspdf";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");
  const type = searchParams.get("type");

  if (!text) {
    return new Response("No content", { status: 400 });
  }

  // ✅ WORD FILE
  if (type === "word") {
    return new Response(text, {
      headers: {
        "Content-Type": "application/msword",
        "Content-Disposition": "attachment; filename=agreement.doc",
      },
    });
  }

  // ✅ REAL PDF GENERATION
  const doc = new jsPDF();

  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 10, 10);

  const pdfBuffer = doc.output("arraybuffer");

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=agreement.pdf",
    },
  });
}
