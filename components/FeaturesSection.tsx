"use client";

const features = [
  {
    title: "AI Legal Drafting",
    description:
      "Generate rent agreements, affidavits, NDAs & contracts instantly with AI precision."
  },
  {
    title: "Legally Verified Formats",
    description:
      "Drafts aligned with Indian legal structure & formatting standards."
  },
  {
    title: "Instant PDF Export",
    description:
      "One-click premium PDF generation with proper alignment and spacing."
  },
  {
    title: "India-Compliant",
    description:
      "Built specifically for Indian documentation and compliance."
  },
  {
    title: "Secure & Private",
    description:
      "Your legal data stays encrypted and secure."
  },
  {
    title: "Dashboard Analytics",
    description:
      "Track generated documents, usage & subscription insights."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-black via-[#0d0d0f] to-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Premium Legal Automation Platform
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Designed for professionals, startups & legal consultants across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
