# Supabase Setup Instructions

## 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and anon key

## 2. Create Database Table
Run this SQL in your Supabase SQL editor:

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

-- Enable RLS (Row Level Security)
ALTER TABLE waiting_users ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow public inserts" ON waiting_users
  FOR INSERT WITH CHECK (true);

-- Create policy to allow public selects
CREATE POLICY "Allow public selects" ON waiting_users
  FOR SELECT USING (true);
```

## 3. Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 4. Test the Connection
1. Restart your development server: `pnpm dev`
2. Try submitting the waitlist form
3. Check your Supabase dashboard to see if emails are being saved

## 5. Troubleshooting
- Make sure your Supabase project is active
- Check that the table name is exactly `waiting_users`
- Verify your environment variables are correct
- Check the browser console for any error messages
