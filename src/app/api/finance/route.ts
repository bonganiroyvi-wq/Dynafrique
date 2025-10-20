import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { budget } = body;

  const estimatedLoan = budget * 0.9; // mock financing 90% of budget
  const monthlyPayment = estimatedLoan / 24; // 24-month loan period

  return NextResponse.json({
    partner: "Dynafrique Finance",
    estimatedLoan,
    monthlyPayment,
    note: "This is a mock calculation. Official partners coming soon."
  });
}
