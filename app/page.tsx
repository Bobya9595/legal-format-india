import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Legal Format India
        </h1>

        <p className="text-gray-700 mb-10">
          Generate professional legal documents online for free. Download
          instantly as PDF.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Rent Agreement */}
          <Link
            href="/rent-agreement-format"
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Rent Agreement Format
            </h2>
            <p className="text-gray-600">
              Create and download rent agreement instantly.
            </p>
          </Link>

          {/* Affidavit */}
          <Link
            href="/affidavit-format"
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">Affidavit Format</h2>
            <p className="text-gray-600">Generate affidavit document easily.</p>
          </Link>

          {/* Salary Certificate */}
          <Link
            href="/salary-certificate-format"
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Salary Certificate Format
            </h2>
            <p className="text-gray-600">
              Generate professional salary certificate.
            </p>
          </Link>

          {/* Experience Letter */}
          <Link
            href="/experience-letter-format"
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Experience Letter Format
            </h2>
            <p className="text-gray-600">Create experience letter instantly.</p>
          </Link>

          {/* NOC Letter */}
          <Link
            href="/noc-letter-format"
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">NOC Letter Format</h2>
            <p className="text-gray-600">
              Generate No Objection Certificate easily.
            </p>
          </Link>

          {/* Leave & License */}
          <Link
            href="/leave-license-agreement-format"
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Leave & License Agreement
            </h2>
            <p className="text-gray-600">
              Create Leave & License agreement online.
            </p>
          </Link>

          {/* Offer Letter */}
          <Link
            href="/offer-letter-format"
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">Offer Letter Format</h2>
            <p className="text-gray-600">Generate professional offer letter.</p>
          </Link>

          {/* Resignation Letter */}
          <Link
            href="/resignation-letter-format"
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Resignation Letter Format
            </h2>
            <p className="text-gray-600">
              Create resignation letter instantly.
            </p>
          </Link>

          <Link
            href="/relieving-letter-format"
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              Relieving Letter Format
            </h2>
            <p className="text-gray-600">
              Generate professional relieving letter instantly.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}

