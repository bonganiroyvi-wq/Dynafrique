export default function Footer() {
  return (
    <footer className="text-gray-200 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-bold" style={{ color: "var(--soft-gold)" }}>Dynafrique</div>
          <div className="text-sm mt-2">Empowering Mpumalanga — Sabie • Thaba Chweu • Hazyview • Nelspruit</div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Quick Links</div>
          <div className="mt-2 space-y-1">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/finance">Finance</a>
            <a href="/quotes">Get Quote</a>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Contact</div>
          <div className="mt-2">info@dynafrique.co.za</div>
          <div className="mt-1">+27 66 000 0000</div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Dynafrique Solutions. All rights reserved.
      </div>
    </footer>
  );
}
