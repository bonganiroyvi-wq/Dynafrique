import { batteryProducts } from "@/lib/products";
import { useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import ProductModal from "@/app/components/ProductModal";

export default function BatteryCatalog() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(null);

  const list = batteryProducts.filter(p => {
    if (!query) return true;
    return p.title.toLowerCase().includes(query.toLowerCase()) || p.short.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Battery Backup Solutions</h1>
        <p className="text-sm text-gray-600 mb-6">Reliable backup batteries for homes and businesses.</p>

        <div className="mb-6 flex gap-3">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search batteries" className="flex-1 p-3 border rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {list.map(p => <ProductCard key={p.id} product={p} onOpen={setOpen} />)}
        </div>

        {open && <ProductModal product={open} onClose={() => setOpen(null)} />}
      </div>
    </main>
  );
}
