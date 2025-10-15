# 🚀 Your Supabase Setup Guide

## Your Connection Details
- **Project ID**: `rjhvxiomebvgewhmnxci`
- **Connection String**: `postgresql://postgres:[YOUR-PASSWORD]@db.rjhvxiomebvgewhmnxci.supabase.co:5432/postgres`

## Step 1: Get Your API Keys
1. Go to [supabase.com](https://supabase.com) and sign in
2. Find your project `rjhvxiomebvgewhmnxci`
3. Click **Settings** (gear icon) → **API**
4. Copy these values:
   - **Project URL**: `https://rjhvxiomebvgewhmnxci.supabase.co`
   - **anon public** key (starts with `eyJ`)

## Step 2: Update Your Environment File
I've already created `.env.local` for you. Now you need to:

1. Open `.env.local` in your project
2. Replace `your-anon-key-here` with your actual anon key:

```env
NEXT_PUBLIC_SUPABASE_URL=https://rjhvxiomebvgewhmnxci.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...your-actual-key-here
```

## Step 3: Create Database Table
1. In Supabase dashboard, click **SQL Editor**
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

4. Click **Run**

## Step 4: Restart Server
```bash
# Stop current server (Ctrl+C)
pnpm dev
```

## Step 5: Test It!
1. Go to http://localhost:3000
2. Scroll to waitlist form
3. Enter email and select role
4. Click "Join Waitlist"
5. Check Supabase → Table Editor → waiting_users

## 🎉 Done!
Your form will now save emails to Supabase!
