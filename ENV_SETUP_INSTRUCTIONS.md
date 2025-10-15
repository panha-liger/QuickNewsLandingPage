# 🚨 URGENT: Supabase Setup Required

## The Problem
Your form submission is failing because Supabase environment variables are not configured. The API returns `{"error":"server_misconfigured"}`.

## Quick Fix Steps

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login
3. Click "New Project"
4. Choose your organization
5. Enter project name: "QuickNews"
6. Set a database password
7. Choose region closest to you
8. Click "Create new project"

### 2. Get Your Credentials
1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (looks like: `https://abcdefghijklmnop.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

### 3. Create Environment File
Create a file called `.env.local` in your project root with this content:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Replace the values with your actual Supabase credentials!**

### 4. Create Database Table
In your Supabase dashboard, go to **SQL Editor** and run this:

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

-- Enable Row Level Security
ALTER TABLE waiting_users ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public inserts" ON waiting_users
  FOR INSERT WITH CHECK (true);

-- Allow public selects  
CREATE POLICY "Allow public selects" ON waiting_users
  FOR SELECT USING (true);
```

### 5. Restart Server
```bash
pnpm dev
```

### 6. Test
Try submitting the form again. You should see emails appear in your Supabase dashboard under **Table Editor** → **waiting_users**.

## Still Not Working?
1. Check that `.env.local` file exists in project root
2. Verify the Supabase URL and key are correct
3. Make sure the table was created successfully
4. Check browser console for any errors

## Need Help?
- Supabase Docs: https://supabase.com/docs
- Your project dashboard: https://supabase.com/dashboard
