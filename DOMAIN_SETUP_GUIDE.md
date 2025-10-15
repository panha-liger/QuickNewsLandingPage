# 🌐 Domain Setup Guide for QuickNews

## 🚀 Deploy to Vercel First

### Step 1: Deploy Your Website
1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your QuickNews repository
   - Deploy (Vercel will give you a URL like `quicknews-abc123.vercel.app`)

## 🔗 Connect GoDaddy Domain to Vercel

### Step 2: Add Domain in Vercel
1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain: `quicknews.tech`
   - Vercel will show you DNS records to add

### Step 3: Update GoDaddy DNS Settings
1. **Login to GoDaddy**:
   - Go to [godaddy.com](https://godaddy.com)
   - Login to your account
   - Go to "My Products" → "Domains"
   - Click "DNS" next to `quicknews.tech`

2. **Add DNS Records** (Vercel will provide these):
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

3. **Remove Old Records**:
   - Delete any existing A records pointing to other IPs
   - Keep only the Vercel records

### Step 4: Update Environment Variables
1. **In Vercel Dashboard**:
   - Go to "Settings" → "Environment Variables"
   - Add your Supabase variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://rjhvxiomebvgewhmnxci.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqaHZ4aW9tZWJ2Z2V3aG1ueGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMTg1MTAsImV4cCI6MjA3NDc5NDUxMH0.ih5Gab2SnRvg9utUtSXOjzZ6o15BxJEKAQOTtOVgEdA
     ```

2. **Redeploy**:
   - Go to "Deployments" tab
   - Click "Redeploy" on latest deployment

## ⏱️ DNS Propagation
- **Wait 24-48 hours** for DNS changes to propagate globally
- **Test your domain**: Visit `https://quicknews.tech`
- **Check status**: Use [whatsmydns.net](https://whatsmydns.net) to verify DNS propagation

## 🔧 Troubleshooting

### If Domain Doesn't Work:
1. **Check DNS Records**:
   - Verify A record points to `76.76.19.61`
   - Verify CNAME record points to `cname.vercel-dns.com`

2. **Check Vercel**:
   - Ensure domain is added in Vercel dashboard
   - Check deployment status

3. **Clear DNS Cache**:
   ```bash
   # On Mac/Linux
   sudo dscacheutil -flushcache
   
   # On Windows
   ipconfig /flushdns
   ```

### Common Issues:
- **"Domain not found"**: DNS hasn't propagated yet (wait 24-48 hours)
- **"Site not secure"**: SSL certificate is being generated (wait 1-2 hours)
- **"Wrong site"**: Old DNS records still cached (clear browser cache)

## 🎯 Final Steps
1. **Test Everything**:
   - Visit `https://quicknews.tech`
   - Test the waitlist form
   - Check Supabase for new signups

2. **Update Social Media**:
   - Update all links to point to `quicknews.tech`
   - Update business cards, email signatures, etc.

## 📞 Support
- **Vercel Support**: [vercel.com/help](https://vercel.com/help)
- **GoDaddy Support**: [godaddy.com/help](https://godaddy.com/help)
- **DNS Checker**: [whatsmydns.net](https://whatsmydns.net)

## 🎉 Success!
Once DNS propagates, your QuickNews landing page will be live at `https://quicknews.tech`!
