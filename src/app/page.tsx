import Hero from "./components/hero";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="py-20 px-6 bg-[var(--muted-cream)]">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold" style={{ color: "var(--deep-slate)" }}>How Dynafrique Works</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Post once — get matched with accredited suppliers and finance options. Fast quotes. Local expertise.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="card">
            <div className="text-xl font-semibold mb-2">1. Post Your Request</div>
            <p className="text-sm text-gray-600">Tell us your needs in a 1-minute form.</p>
          </div>
          <div className="card">
            <div className="text-xl font-semibold mb-2">2. We Match Suppliers</div>
            <p className="text-sm text-gray-600">Accredited local suppliers & finance partners get notified.</p>
          </div>
          <div className="card">
            <div className="text-xl font-semibold mb-2">3. Compare & Hire</div>
            <p className="text-sm text-gray-600">Receive quotes, compare options, and install with confidence.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Popular Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/products" className="card">
              <img src="/assets/solar-panels.jpg" alt="Solar" className="w-full h-36 object-cover rounded-md mb-4" />
              <h4 className="font-semibold">Solar Installations</h4>
              <p className="text-sm text-gray-600 mt-2">Starter to premium kits — we match what you need.</p>
            </Link>

            <Link href="/products" className="card">
              <img src="/assets/battery-backup.jpg" alt="Battery" className="w-full h-36 object-cover rounded-md mb-4" />
              <h4 className="font-semibold">Battery Backup</h4>
              <p className="text-sm text-gray-600 mt-2">Reliable battery systems for uninterrupted power.</p>
            </Link>

            <Link href="/products" className="card">
              <img src="/assets/fuel-tank.jpg" alt="Fuel" className="w-full h-36 object-cover rounded-md mb-4" />
              <h4 className="font-semibold">Bulk Fuel Supply</h4>
              <p className="text-sm text-gray-600 mt-2">Scheduled diesel & petrol delivery for sites and businesses.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
