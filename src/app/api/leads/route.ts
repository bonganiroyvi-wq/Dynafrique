// src/app/api/leads/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!; // must be set in Vercel env (server-side)
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.full_name || !body.phone) {
      return NextResponse.json({ success: false, message: "Name and phone required" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("leads")
      .insert([{
        full_name: body.full_name,
        email: body.email || null,
        phone: body.phone,
        location: body.location || null,
        energy_needs: body.energy_needs || null,
        budget: body.budget || null,
        status: "New"
      }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Lead insert error:", err);
    return NextResponse.json({ success: false, message: err.message || String(err) }, { status: 500 });
  }
}
