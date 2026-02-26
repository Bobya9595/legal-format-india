export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-10 space-y-16">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Is Your Rent Agreement Legally Safe?
        </h1>

        <p className="text-lg text-gray-600">
          Get an AI-powered legal compliance score for your rent agreement in India.
          Detect missing clauses, legal risks and compliance gaps instantly.
        </p>

        <a
          href="/rent-agreement-auditor"
          className="bg-black text-white px-8 py-3 rounded text-lg"
        >
          Analyze My Agreement
        </a>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold">1. Paste Agreement</h3>
            <p className="text-gray-600">
              Paste your rent agreement text securely.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. AI Analysis</h3>
            <p className="text-gray-600">
              We scan for missing clauses and compliance risks.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Get Report</h3>
            <p className="text-gray-600">
              Receive risk score and upgrade recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE CHECK */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          What We Check
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <p>✔ Indemnity Clause</p>
          <p>✔ Lock-in Period</p>
          <p>✔ Jurisdiction Clause</p>
          <p>✔ Termination Conditions</p>
          <p>✔ Inspection Rights</p>
          <p>✔ Maintenance Responsibility</p>
          <p>✔ Stamp Duty Mention</p>
          <p>✔ State-Specific Compliance</p>
        </div>
      </section>

      {/* SAMPLE RESULT */}
      <section className="bg-gray-100 p-8 rounded space-y-4">
        <h2 className="text-xl font-semibold">
          Sample Risk Score
        </h2>

        <p className="text-red-600 font-bold">
          Risk Score: 58 / 100
        </p>

        <ul className="list-disc ml-6 text-gray-700">
          <li>Missing Indemnity Clause</li>
          <li>No Lock-in Period Defined</li>
          <li>Termination Clause Too Vague</li>
        </ul>
      </section>

      {/* PRICING */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl font-semibold">
          Pricing
        </h2>

        <p className="text-gray-600">
          Basic Risk Score – Free  
        </p>

        <p className="font-semibold text-lg">
          Full Compliance Report – ₹149
        </p>

        <a
          href="/rent-agreement-auditor"
          className="bg-black text-white px-8 py-3 rounded"
        >
          Start Free Analysis
        </a>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          Frequently Asked Questions
        </h2>

        <div>
          <p className="font-semibold">
            Is this valid for all Indian states?
          </p>
          <p className="text-gray-600">
            Yes. Our AI checks general Indian compliance and highlights
            state-specific concerns where applicable.
          </p>
        </div>

        <div>
          <p className="font-semibold">
            Is my agreement data stored?
          </p>
          <p className="text-gray-600">
            No. Agreements are processed securely and not stored permanently.
          </p>
        </div>
      </section>

    </main>
  );
}
