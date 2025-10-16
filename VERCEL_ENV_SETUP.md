# Vercel Environment Variables Setup

## The Issue
The waitlist submission is not working because the Supabase environment variables are not configured in Vercel.

## Solution: Add Environment Variables to Vercel

### Step 1: Go to Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in to your account
3. Find your QuickNews project

### Step 2: Add Environment Variables
1. Click on your project
2. Go to **Settings** tab
3. Click on **Environment Variables** in the left sidebar
4. Add these two variables:

#### Variable 1:
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://rjhvxiomebvgewhmnxci.supabase.co`
- **Environment**: Production, Preview, Development (select all)

#### Variable 2:
- **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqaHZ4aW9tZWJ2Z2V3aG1ueGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMTg1MTAsImV4cCI6MjA3NDc5NDUxMH0.ih5Gab2SnRvg9utUtSXOjzZ6o15BxJEKAQOTtOVgEdA`
- **Environment**: Production, Preview, Development (select all)

### Step 3: Redeploy
1. After adding the environment variables, go to **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Or make a small change to trigger a new deployment

### Step 4: Test
1. Visit your live site
2. Try submitting the waitlist form
3. Check if emails are being saved to Supabase

## Debug Endpoint
I've added a debug endpoint at `/api/debug` that will show you if the environment variables are properly set.

Visit: `https://your-domain.vercel.app/api/debug`

This will show:
- `hasSupabaseUrl`: true/false
- `hasSupabaseKey`: true/false
- `supabaseUrl`: "Set" or "Not set"
- `supabaseKey`: "Set" or "Not set"

## Expected Result
After setting up the environment variables and redeploying, the debug endpoint should show:
```json
{
  "hasSupabaseUrl": true,
  "hasSupabaseKey": true,
  "supabaseUrl": "Set",
  "supabaseKey": "Set"
}
```

## Troubleshooting
If it's still not working:
1. Make sure you selected all environments (Production, Preview, Development)
2. Redeploy the application after adding variables
3. Check the debug endpoint to confirm variables are set
4. Check Vercel function logs for any errors
