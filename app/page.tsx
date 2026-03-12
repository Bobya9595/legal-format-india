import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <section className="text-center py-24 px-6">

        <h1 className="text-5xl font-bold">
          AI Legal Document Generator
        </h1>

        <p className="text-gray-400 mt-4">
          Create legal documents instantly using AI.
        </p>

      </section>

      {/* Tools Section */}

      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">

        <ToolCard
          title="Rent Agreement Generator"
          link="/rent-agreement"
        />

        <ToolCard
          title="Experience Letter Generator"
          link="/experience-letter"
        />

        <ToolCard
          title="Freelance Contract Generator"
          link="/freelance-contract"
        />

      </section>

    </main>
  );
}

function ToolCard({ title, link }: { title: string; link: string }) {
  return (
    <Link
      href={link}
      className="p-6 border border-gray-800 rounded-xl hover:border-purple-500 transition"
    >
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-400 mt-2">
        Generate this document using AI.
      </p>

      <span className="text-purple-400 mt-4 inline-block">
        Open Tool →
      </span>
    </Link>
  );
}
