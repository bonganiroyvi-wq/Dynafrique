"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative bg-[#0C0C0C] text-[#F5F5F5] py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between hero">
      <div className="md:w-1/2 space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Empowering <span className="text-[#C5A654]">Mpumalanga</span>
        </h1>
        <p className="text-[#B0B0B0] text-lg max-w-lg">
          Dynafrique Solutions connects quality leads with accredited suppliers and affordable renewable energy systems.
          We’re driving the transition to clean power — one home, one business, one community at a time.
        </p>
        <div className="flex space-x-4">
          <button className="bg-[#C5A654] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#d8ba65] transition-all">
            Get a Quote
          </button>

          <button
            onClick={() => router.push("/products")}
            className="px-6 py-3 border border-[#C5A654] text-white font-semibold rounded-full hover:bg-[#C5A654] hover:text-black transition-all"
          >
            Products
          </button>
        </div>
      </div>

      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/70 to-transparent rounded-2xl"></div>
      </div>
    </section>
  );
}
