# 🚀 Vercel Deployment Guide for QuickNews

## ✅ GitHub Push Complete!
Your code is now live at: [https://github.com/panha-liger/QuickNewsLandingPage.git](https://github.com/panha-liger/QuickNewsLandingPage.git)

## 🌐 Deploy to Vercel (5 minutes)

### Step 1: Connect to Vercel
1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import from GitHub**: Select `panha-liger/QuickNewsLandingPage`

### Step 2: Configure Project
1. **Project Name**: `quicknews-landing` (or keep default)
2. **Framework Preset**: Next.js (auto-detected)
3. **Root Directory**: `./` (default)
4. **Build Command**: `pnpm build` (auto-detected)
5. **Output Directory**: `.next` (auto-detected)

### Step 3: Add Environment Variables
**Before deploying, add these in Vercel dashboard:**

```
NEXT_PUBLIC_SUPABASE_URL=https://rjhvxiomebvgewhmnxci.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqaHZ4aW9tZWJ2Z2V3aG1ueGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMTg1MTAsImV4cCI6MjA3NDc5NDUxMH0.ih5Gab2SnRvg9utUtSXOjzZ6o15BxJEKAQOTtOVgEdA
```

**How to add:**
1. In Vercel project settings
2. Go to "Environment Variables"
3. Add each variable above
4. Set to "Production", "Preview", and "Development"

### Step 4: Deploy
1. **Click "Deploy"**
2. **Wait 2-3 minutes** for build to complete
3. **Get your Vercel URL**: `https://quicknews-landing-abc123.vercel.app`

## 🔗 Connect Your Domain

### Step 5: Add Custom Domain
1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add domain: `quicknews.tech`
   - Vercel will show DNS records

### Step 6: Update GoDaddy DNS
**Add these DNS records in GoDaddy:**

```
Type: A
Name: @
Value: 76.76.19.61
TTL: 600

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

## ⏱️ Timeline
- **Vercel Deploy**: 2-3 minutes
- **DNS Propagation**: 24-48 hours
- **SSL Certificate**: 1-2 hours after DNS

## 🎯 Final Result
- **Vercel URL**: `https://quicknews-landing-abc123.vercel.app` (immediate)
- **Custom Domain**: `https://quicknews.tech` (after DNS propagation)

## 🔧 Troubleshooting
- **Build fails**: Check environment variables are set
- **Domain not working**: Wait for DNS propagation (24-48 hours)
- **SSL issues**: Wait 1-2 hours after DNS changes

## 🎉 Success!
Once deployed, your QuickNews landing page will be live and collecting emails through Supabase!
