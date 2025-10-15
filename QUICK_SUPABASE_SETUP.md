# 🚀 Quick Supabase Setup Guide

## Step 1: Create Supabase Account & Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Sign up with GitHub/Google or email
4. Click "New Project"
5. Fill in:
   - **Name**: `QuickNews`
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: Choose closest to you
6. Click "Create new project"
7. Wait 2-3 minutes for setup to complete

## Step 2: Get Your API Keys
1. In your Supabase dashboard, click **Settings** (gear icon) in left sidebar
2. Click **API** in the settings menu
3. Copy these two values:
   - **Project URL** (starts with `https://`)
   - **anon public** key (long string starting with `eyJ`)

## Step 3: Create Environment File
1. In your project folder, create a new file called `.env.local`
2. Add this content (replace with your actual values):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Step 4: Create Database Table
1. In Supabase dashboard, click **SQL Editor** in left sidebar
2. Click **New query**
3. Copy and paste this SQL:

```sql
CREATE TABLE waiting_users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'creator')),
  source TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE waiting_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON waiting_users
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public selects" ON waiting_users
  FOR SELECT USING (true);
```

4. Click **Run** button
5. You should see "Success. No rows returned"

## Step 5: Restart Your Server
1. Stop your current server (Ctrl+C)
2. Run: `pnpm dev`
3. Wait for "Ready in Xms" message

## Step 6: Test It!
1. Go to your website: http://localhost:3000
2. Scroll down to the waitlist form
3. Enter your email and select a role
4. Click "Join Waitlist"
5. You should see "✅ Successfully joined the waitlist!"

## Step 7: Verify in Supabase
1. Go back to your Supabase dashboard
2. Click **Table Editor** in left sidebar
3. Click **waiting_users** table
4. You should see your email in the table!

## 🆘 Still Not Working?

**Check these:**
- ✅ `.env.local` file exists in project root
- ✅ Supabase URL starts with `https://`
- ✅ Anon key starts with `eyJ`
- ✅ Table was created successfully
- ✅ Server was restarted after adding env file

**Common Issues:**
- **"server_misconfigured"** = Environment variables not set
- **"insert_failed"** = Table doesn't exist or RLS policies wrong
- **"invalid_email"** = Email format is wrong

## 🎉 Success!
Once working, every email submitted through your form will appear in the Supabase `waiting_users` table!
