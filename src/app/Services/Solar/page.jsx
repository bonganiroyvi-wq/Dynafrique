import { solarProducts } from "@/lib/products";
import { useState } from "react";
import dynamic from "next/dynamic";
import ProductCard from "@/app/components/ProductCard";
import ProductModal from "@/app/components/ProductModal";

export default function SolarCatalog() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null);

  const list = solarProducts.filter(p => {
    if (cat !== "All" && p.category !== cat) return false;
    if (!query) return true;
    return p.title.toLowerCase().includes(query.toLowerCase()) || p.short.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Solar Installations — Catalog</h1>
          <p className="text-sm text-gray-600">Explore panels, kits and full-system options. Serving Mpumalanga & nationwide.</p>
        </header>

        <div className="mb-6 flex gap-3 items-center">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search products or features" className="flex-1 p-3 border rounded" />
          <select value={cat} onChange={(e)=>setCat(e.target.value)} className="p-3 border rounded">
            <option>All</option>
            <option>Starter</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {list.map(p => <ProductCard key={p.id} product={p} onOpen={setOpen} />)}
        </div>

        {open && <ProductModal product={open} onClose={() => setOpen(null)} />}
      </div>
    </main>
  );
}
