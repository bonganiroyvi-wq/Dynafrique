import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const lead = {
      name: body.name ?? null,
      phone: body.phone ?? null,
      email: body.email ?? null,
      service: body.propertyType ?? body.service ?? null,
      product: body.product ?? null,
      location: body.location ?? "Mpumalanga",
      system_size: body.systemSize ?? null,
      finance_interest: Boolean(body.finance === "yes" || body.finance === true),
      notes: body.notes ?? null,
      source: body.source ?? "website"
    };

    const { data, error } = await supabase.from("leads").insert([lead]).select().single();
    if (error) throw error;

    // Optionally notify via webhook or email (configure environment variables)
    const SUPPLIER_WEBHOOK = process.env.SUPPLIER_WEBHOOK_URL;
    const FINANCE_WEBHOOK = process.env.FINANCE_WEBHOOK_URL;

    const payload = { id: data.id, ...lead, created_at: data.created_at };

    if (SUPPLIER_WEBHOOK) {
      fetch(SUPPLIER_WEBHOOK, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "new_lead", payload }) })
        .catch((err) => console.error("Supplier webhook error:", err));
    }

    if (lead.finance_interest && FINANCE_WEBHOOK) {
      fetch(FINANCE_WEBHOOK, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "finance_lead", payload }) })
        .catch((err) => console.error("Finance webhook error:", err));
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (err:any) {
    console.error("Lead insert error:", err);
    return NextResponse.json({ success: false, error: err.message || String(err) }, { status: 500 });
  }
}
