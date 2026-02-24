import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-6 leading-tight">
          Create Professional Legal Documents in Minutes
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Free online legal document generator for India. Instantly create rent agreements, affidavits, salary certificates, resignation letters and more.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/rent-agreement-format"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Start Generating
          </Link>

          <Link
            href="/all-tools"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            View All Tools
          </Link>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-3">Instant PDF Download</h3>
            <p className="text-gray-600">
              Generate legally formatted documents and download them instantly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">100% Free</h3>
            <p className="text-gray-600">
              No signup required. No hidden fees. Completely free to use.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Made for India</h3>
            <p className="text-gray-600">
              Structured according to Indian legal document standards.
            </p>
          </div>
        </div>
      </section>

      {/* TOOL PREVIEW */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Legal Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Rent Agreement", "/rent-agreement-format"],
              ["Affidavit Format", "/affidavit-format"],
              ["Salary Certificate", "/salary-certificate-format"],
              ["Experience Letter", "/experience-letter-format"],
              ["Resignation Letter", "/resignation-letter-format"],
              ["Relieving Letter", "/relieving-letter-format"],
            ].map(([title, link]) => (
              <Link
                key={link}
                href={link}
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                  Generate professional {title.toLowerCase()} instantly.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT BLOCK */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold mb-6">
            Free Legal Document Generator in India
          </h2>

          <p className="mb-4">
            Legal Format India provides ready-to-use legal document formats for individuals, employees, landlords, tenants, and businesses. Our platform helps you create legally structured documents instantly without needing legal expertise.
          </p>

          <p>
            Whether you need a rent agreement format, affidavit format, salary certificate, experience letter, or resignation letter, our tools simplify the process and provide downloadable PDF documents within seconds.
          </p>
        </div>
      </section>

    </main>
  );
}
