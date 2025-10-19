"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="Dynafrique" width={44} height={44} />
          <span className="text-lg font-bold" style={{ color: "var(--deep-slate)" }}>Dynafrique</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/finance">Finance</Link>
          <Link href="/quotes">Get Quote</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/quotes" className="hidden sm:inline-block px-4 py-2 rounded btn-accent">Get Quote</Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <Link href="/" className="block px-4 py-3" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/products" className="block px-4 py-3" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/finance" className="block px-4 py-3" onClick={() => setOpen(false)}>Finance</Link>
          <Link href="/quotes" className="block px-4 py-3" onClick={() => setOpen(false)}>Get Quote</Link>
        </div>
      )}
    </nav>
  );
}
