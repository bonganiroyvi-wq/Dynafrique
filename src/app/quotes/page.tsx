// src/app/quotes/page.tsx
import dynamic from "next/dynamic";
const StepsForm = dynamic(() => import("./StepsForm"), { ssr: false });

export default function QuotesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Get a Free Quote</h1>
        <StepsForm />
      </div>
    </div>
  );
}
