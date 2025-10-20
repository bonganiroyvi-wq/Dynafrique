// src/app/api/leads/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!; // server-only
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// helper to dispatch match (fire & forget)
async function dispatchToPartner(partner, lead) {
  // prepare payload
  const payload = {
    lead_id: lead.id,
    name: lead.name,
    phone: lead.phone,
    email: lead.email,
    service: lead.service,
    product: lead.product,
    location: lead.location,
    system_size: lead.system_size,
    finance_interest: lead.finance_interest,
    source: lead.source,
    created_at: lead.created_at
  };

  // HMAC signing if required
  let headers = { "Content-Type": "application/json" };
  if (partner.auth_type === "bearer" && partner.auth_token) {
    headers["Authorization"] = `Bearer ${partner.auth_token}`;
  } else if (partner.auth_type === "hmac" && partner.hmac_secret) {
    const crypto = require("crypto");
    const sig = crypto.createHmac("sha256", partner.hmac_secret).update(JSON.stringify(payload)).digest("hex");
    headers["X-Signature"] = `sha256=${sig}`;
  }

  try {
    const res = await fetch(partner.endpoint_url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      // set reasonable timeout on client or use worker
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, body: text };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // basic validation
    if (!body.name || !body.phone) {
      return NextResponse.json({ success: false, error: "name and phone required" }, { status: 400 });
    }

    // insert lead
    const { data: lead, error: leadError } = await supabase
      .from("leads")
      .insert([{
        name: body.name, phone: body.phone, email: body.email || null,
        service: body.service || null, product: body.product || null,
        location: body.location || null, system_size: body.system_size || null,
        finance_interest: body.finance === "yes", source: body.source || "website"
      }])
      .select()
      .single();

    if (leadError) throw leadError;

    // find candidate finance partners (simple example: enabled and matches service)
    const { data: partners } = await supabase
      .from("finance_partners")
      .select("*")
      .eq("enabled", true)
      .contains("services", [body.service || "solar"]);

    // create match rows and dispatch asynchronously
    for (const partner of partners || []) {
      const { data: matchRow } = await supabase
        .from("lead_matches")
        .insert([{ lead_id: lead.id, partner_id: partner.id, status: "dispatched", attempt: 0 }])
        .select()
        .single();

      // fire-and-forget dispatch (you can push this to a queue instead)
      dispatchToPartner(partner, lead).then(async (result) => {
        // update match row
        await supabase.from("lead_matches").update({
          status: result.ok ? "success" : "failure",
          attempt: (matchRow.attempt || 0) + 1,
          last_attempt_at: new Date().toISOString(),
          partner_response: result.ok ? { status: result.status, body: result.body } : { error: result.error }
        }).eq("id", matchRow.id);
      });
    }

    // update lead status
    await supabase.from("leads").update({ status: "dispatched" }).eq("id", lead.id);

    return NextResponse.json({ success: true, id: lead.id });
  } catch (err: any) {
    console.error("Lead API error:", err);
    return NextResponse.json({ success: false, error: err.message || String(err) }, { status: 500 });
  }
}
