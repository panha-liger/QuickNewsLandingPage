import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

// Generate UUID v4 for edge runtime
function generateUUID(): string {
  return crypto.randomUUID();
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

type Payload = {
  username: string;
  full_name?: string;
  role?: "user" | "creator";
  source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<Payload>;
    const username = (body.username || "").toString().trim();
    if (!username) {
      return NextResponse.json({ error: "invalid_username" }, { status: 400 });
    }

    const fullName = body.full_name?.toString().trim() || null;
    const emailForNotification = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)
      ? username.toLowerCase()
      : null;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { error: "server_misconfigured" },
        { status: 500 }
      );
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { "x-quicknews": "waitlist" } },
    });

    // Check if user already exists
    const { data: existingByUsername } = await supabase
      .from("users")
      .select("id")
      .eq("username", username)
      .maybeSingle();

    if (existingByUsername) {
      return NextResponse.json({ status: "existing" }, { status: 200 });
    }

    const { data: existingByEmail } = await supabase
      .from("waiting_users")
      .select("id, role")
      .eq("email", username)
      .maybeSingle();

    if (existingByEmail) {
      return NextResponse.json({ status: "existing" }, { status: 200 });
    }

    // Insert into waiting_users table first (this is the primary waitlist table)
    const role = body.role || "user";
    const { error: waitingUsersError, data: waitingUserData } = await supabase
      .from("waiting_users")
      .insert({
        email: username,
        role: role,
        source: body.source || null,
        utm_source: body.utm_source || null,
        utm_medium: body.utm_medium || null,
        utm_campaign: body.utm_campaign || null,
      })
      .select()
      .single();

    if (waitingUsersError) {
      console.error("Waiting users insert error:", waitingUsersError);
      return NextResponse.json({ error: "insert_failed: " }, { status: 500 });
    }

    // Also try to insert into users table (keep existing functionality)
    // If this fails, we still return success since waiting_users insert worked
    const insertData: {
      id: string;
      email: string;
      username: string;
      full_name?: string | null;
    } = {
      id: generateUUID(),
      email: username,
      username,
    };

    if (fullName) {
      insertData.full_name = fullName;
    }

    const { data, error } = await supabase
      .from("users")
      .insert(insertData)
      .select("*")
      .single();

    if (error) {
      console.error("Users table insert error (non-blocking):", error);
      // Don't fail the request if users insert fails, just log it
      // The waiting_users insert succeeded, so we continue
    }

    if (emailForNotification) {
      try {
        await sendThankYouEmail(emailForNotification);
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails, just log it
      }
    }

    // Return success with waiting_users data (primary waitlist table)
    // Include users data if that insert also succeeded
    return NextResponse.json(
      {
        status: "ok",
        data: data || waitingUserData,
        usersInsertSucceeded: !!data,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
}

export async function GET() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return NextResponse.json(
      { error: "server_misconfigured" },
      { status: 500 }
    );
  }

  // Use ANON_KEY instead
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { "x-quicknews": "waitlist" } },
  });

  // Fetch all users
  const { data: users, error } = await supabase
    .from("waiting_users")
    .select("id"); // Only need id and role for counting

  if (error) {
    console.error("Supabase GET error:", error);
    return NextResponse.json({ error: "fetch_failed" + error.message }, { status: 500 });
  }

  // Calculate counts
  const total = users ? users.length : 0;

  return NextResponse.json(
    {
      total,
    },
    { status: 200 }
  );
}

async function sendThankYouEmail(email: string) {
  console.log(`Attempting to send email to: ${email}`);

  // Check if we have Resend API key
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.log("No RESEND_API_KEY found, skipping email send");
    return { success: false, reason: "No API key configured" };
  }

  const emailData = {
    from: "QuickNews <noreply@quicknews.tech>",
    to: [email],
    subject: "Welcome to QuickNews! 🎉",
    html: `
      <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://www.quicknews.tech/images/logos/Quick-News-Logo_FA-1.png" alt="QuickNews Logo" style="width: 120px; height: auto; margin-bottom: 20px;">
        </div>
        
        <h1 style="color: #1e40af; font-size: 28px; font-weight: 600; text-align: center; margin-bottom: 20px;">
          Welcome to QuickNews! 🎉
        </h1>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Thank you for joining our waitlist! We're excited to have you on board as we build the future of news for Gen Z.
        </p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #1e40af; font-size: 20px; margin-bottom: 15px;">What's Next?</h2>
          <ul style="color: #374151; font-size: 14px; line-height: 1.6; padding-left: 20px;">
            <li>You'll be among the first to know when we launch</li>
            <li>Get early access to our creator program</li>
            <li>Join our community of verified news creators</li>
            <li>Earn 60x more than TikTok sharing real news</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 10px;">
            Follow us for updates:
          </p>
          <div style="display: flex; justify-content: center; gap: 20px;">
            <a href="#" style="color: #1e40af; text-decoration: none; font-weight: 500;">Twitter</a>
            <a href="#" style="color: #1e40af; text-decoration: none; font-weight: 500;">Instagram</a>
            <a href="#" style="color: #1e40af; text-decoration: none; font-weight: 500;">TikTok</a>
          </div>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            This email was sent to ${email} because you joined the QuickNews waitlist.
          </p>
          <p style="color: #9ca3af; font-size: 12px; margin: 5px 0 0 0;">
            If you didn't sign up, you can safely ignore this email.
          </p>
        </div>
      </div>
    `,
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", result);
      throw new Error(`Resend API error: ${result || response.statusText}`);
    }

    console.log("Email sent successfully:", result);
    return { success: true, result };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
}
