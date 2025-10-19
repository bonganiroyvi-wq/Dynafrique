export default function ProductsPage() {
  return (
    <section className="bg-[#F5F5F5] text-[#0C0C0C] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 text-[#C5A654]">Our Products</h2>
        <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
          At Dynafrique Solutions, we provide high-performance renewable energy systems tailored to your needs.
          From residential solar setups to commercial-scale energy solutions, we empower communities with sustainable power.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Product 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-[#C5A654] mb-2">Solar Panels</h3>
          <p className="text-[#4A4A4A]">
            High-efficiency solar panels designed for South Africa’s climate. Durable, reliable, and cost-effective.
          </p>
        </div>

        {/* Product 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-[#C5A654] mb-2">Inverters</h3>
          <p className="text-[#4A4A4A]">
            Smart inverters that ensure stable power conversion and support for hybrid systems.
          </p>
        </div>

        {/* Product 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-[#C5A654] mb-2">Batteries & Storage</h3>
          <p className="text-[#4A4A4A]">
            Long-life lithium and gel batteries that provide continuous power, day and night.
          </p>
        </div>
      </div>
    </section>
  );
}
