import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

type Payload = {
  email: string;
  role?: 'user' | 'creator';
  source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<Payload>;
    const email = (body.email || "").toString().trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { "x-quicknews": "waitlist" } },
    });

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from('waiting_users')
      .select('id, role')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json({ status: "existing" }, { status: 200 });
    }

    // Insert new user
    const { data, error } = await supabase
      .from('waiting_users')
      .insert({
        email,
        role: body.role || 'user',
        source: body.source || null,
        utm_source: body.utm_source || null,
        utm_medium: body.utm_medium || null,
        utm_campaign: body.utm_campaign || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: "insert_failed" }, { status: 500 });
    }

    return NextResponse.json({ status: "ok", data }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
}


