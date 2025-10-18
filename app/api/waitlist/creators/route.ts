import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const GET = async () => {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { error: "server_misconfigured" },
        { status: 500 }
      );
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { "x-quicknews": "waitlist" } },
    });

    // Fetch all creators
    const { data, error, count } = await supabase
      .from("waiting_users")
      .select("*", { count: "exact" })
      .eq("role", "creator")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "fetch_failed" }, { status: 500 });
    }

    return NextResponse.json(
      {
        success: true,
        count: count || 0,
        creators: data || [],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching creators:", error);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
};
