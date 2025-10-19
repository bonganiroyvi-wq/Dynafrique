"use client";
import { useSearchParams } from "next/navigation";
import StepsForm from "./StepsForm";

export default function QuotesPage() {
  const params = useSearchParams();
  const product = params?.get("product") ?? null;

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Get a Free Quote</h1>
        <StepsForm prefillProduct={product} />
      </div>
    </main>
  );
}
