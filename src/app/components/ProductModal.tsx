"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductModal({ product, onClose }: any) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative z-10 w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-xl">
        <div className="relative h-56 w-full">
          <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <div className="text-sm text-gray-600">{product.priceRange}</div>
          </div>

          <p className="mt-3 text-gray-700">{product.short}</p>
          <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
            {product.bullets?.map((b:any,i:number)=><li key={i}>{b}</li>)}
          </ul>

          <div className="mt-6 flex gap-3">
            <a href={`/quotes?product=${encodeURIComponent(product.title)}`} className="px-4 py-3 rounded btn-accent">Request Quote</a>
            <button onClick={onClose} className="px-4 py-3 border rounded">Close</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
