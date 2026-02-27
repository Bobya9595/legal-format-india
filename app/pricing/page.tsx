export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0c0c12] text-white p-10">
      <h1 className="text-4xl font-bold mb-10">Pricing</h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Free</h2>
          <p className="text-3xl font-bold mb-6">₹0</p>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✔ 5 AI Analyses</li>
            <li>✔ Basic Generator</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-2xl">
          <div className="bg-[#16161d] p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Pro</h2>
            <p className="text-3xl font-bold mb-6">₹399/month</p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>✔ Unlimited Generation</li>
              <li>✔ 20 AI Analyses</li>
              <li>✔ No Watermark</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Business</h2>
          <p className="text-3xl font-bold mb-6">₹999/month</p>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✔ Unlimited Everything</li>
            <li>✔ Priority Support</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
