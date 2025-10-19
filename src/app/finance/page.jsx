export default function FinancePage() {
  return (
    <section className="bg-[#0C0C0C] text-[#F5F5F5] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Financing <span className="text-[#C5A654]">Options</span>
        </h1>
        <p className="text-[#B0B0B0] text-lg mb-10 max-w-3xl mx-auto">
          Dynafrique Solutions partners with trusted financial institutions to help you
          afford renewable energy solutions without the upfront cost.  
          Choose the plan that suits your lifestyle and start saving from day one.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Option 1 */}
        <div className="bg-[#111111] p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_#C5A65455] transition">
          <h3 className="text-2xl font-semibold text-[#C5A654] mb-3">Pay-As-You-Save</h3>
          <p className="text-[#B0B0B0]">
            Enjoy solar power immediately and pay off your system monthly using the
            savings you make from reduced electricity bills.
          </p>
        </div>

        {/* Option 2 */}
        <div className="bg-[#111111] p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_#C5A65455] transition">
          <h3 className="text-2xl font-semibold text-[#C5A654] mb-3">Flexible Installments</h3>
          <p className="text-[#B0B0B0]">
            Finance your solar installation over 12–60 months with competitive rates and
            transparent terms — no hidden fees.
          </p>
        </div>

        {/* Option 3 */}
        <div className="bg-[#111111] p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_#C5A65455] transition">
          <h3 className="text-2xl font-semibold text-[#C5A654] mb-3">Corporate Leasing</h3>
          <p className="text-[#B0B0B0]">
            For businesses and organizations — power your operations sustainably with
            structured leasing agreements and tax incentives.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/quotes"
          className="inline-block bg-[#C5A654] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#d8ba65] transition-all"
        >
          Get Financing Quote
        </a>
      </div>
    </section>
  );
}
