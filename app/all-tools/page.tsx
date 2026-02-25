import Link from "next/link";

export const metadata = {
  title: "All Legal Tools | Legal Format India",
  description:
    "Browse all professional legal document generators including rent agreement, affidavit, salary certificate, experience letter and more.",
};

const tools = [
  {
    title: "Rent Agreement Format",
    desc: "Create and download rent agreement instantly.",
    link: "/rent-agreement-format",
  },
  {
    title: "Affidavit Format",
    desc: "Generate affidavit document easily.",
    link: "/affidavit-format",
  },
  {
    title: "Salary Certificate Format",
    desc: "Generate professional salary certificate.",
    link: "/salary-certificate-format",
  },
  {
    title: "Experience Letter Format",
    desc: "Create experience letter instantly.",
    link: "/experience-letter-format",
  },
  {
    title: "NOC Letter Format",
    desc: "Generate No Objection Certificate easily.",
    link: "/noc-letter-format",
  },
  {
    title: "Leave & License Agreement",
    desc: "Create Leave & License agreement online.",
    link: "/leave-license-agreement-format",
  },
  {
    title: "Offer Letter Format",
    desc: "Generate professional offer letter.",
    link: "/offer-letter-format",
  },
  {
    title: "Resignation Letter Format",
    desc: "Create resignation letter instantly.",
    link: "/resignation-letter-format",
  },
  {
    title: "Relieving Letter Format",
    desc: "Generate professional relieving letter instantly.",
    link: "/relieving-letter-format",
  },
];

export default function AllToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Legal Document Tools
          </h1>
          <p className="text-lg text-gray-600">
            Professional legal document generators. Fast, secure and free.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.link}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {tool.title}
              </h2>
              <p className="text-gray-600 text-sm">{tool.desc}</p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
