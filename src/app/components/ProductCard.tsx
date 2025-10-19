"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductCard({ product, onOpen }: any) {
  return (
    <motion.div layout whileHover={{ y: -6 }} className="card">
      <div className="relative h-44 w-full mb-4">
        <img src={product.image} alt={product.title} className="object-cover w-full h-full rounded-md" />
      </div>

      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{product.short}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm font-medium">{product.priceRange}</div>
        <button onClick={() => onOpen(product)} className="px-3 py-2 rounded btn-primary">Request</button>
      </div>
    </motion.div>
  );
}
