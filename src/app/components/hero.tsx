// src/app/components/Hero.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative bg-[#0C0C0C] text-[#F5F5F5] py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between hero"
      style={{
        backgroundImage: "url('/assets/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:w-1/2 space-y-6 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Empowering <span className="text-[#C5A654]">Mpumalanga</span>
        </h1>
        <p className="text-[#B0B0B0] text-lg max-w-lg">
          Dynafrique Solutions connects quality leads with accredited suppliers and affordable renewable energy systems.
          We’re driving the transition to clean power — one home, one business, one community at a time.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 gap-3">
          <button
            onClick={() => document.getElementById("quotes")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto bg-[#C5A654] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#d8ba65] transition-all"
          >
            Get a Quote
          </button>

          <button
            onClick={() => router.push("/products")}
            className="w-full sm:w-auto px-6 py-3 border border-[#C5A654] text-[#F5F5F5] font-semibold rounded-full hover:bg-[#C5A654] hover:text-black transition-all"
          >
            Products
          </button>
        </div>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
        {/* Decorative image to the right - use next/image where possible */}
        <div className="relative w-full max-w-md h-56 md:h-72 rounded-2xl overflow-hidden shadow-2xl">
          <Image src="/assets/hero-right.webp" alt="Solar panels" fill style={{ objectFit: "cover" }} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 to-transparent"></div>
        </div>
      </div>
    </motion.section>
  );
}
