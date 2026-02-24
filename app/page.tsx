import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Free Legal Document Generator for India
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Create professional legal documents instantly. Download ready-to-use PDFs for rent agreements, affidavits, salary certificates, resignation letters and more.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/rent-agreement" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </Link>

          <Link href="/all-tools" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
            View All Tools
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Instant PDF Download</h3>
            <p className="text-gray-600">Generate and download documents in seconds.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">100% Free</h3>
            <p className="text-gray-600">No signup required. No hidden charges.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Made for India</h3>
            <p className="text-gray-600">Documents formatted according to Indian standards.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
