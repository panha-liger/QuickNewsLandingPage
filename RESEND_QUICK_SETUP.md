# 🚀 Quick Resend Setup for QuickNews Emails

## ⚡ **5-Minute Setup**

### **Step 1: Sign up for Resend**
1. Go to [resend.com](https://resend.com)
2. Sign up with your email
3. Verify your email address

### **Step 2: Get your API Key**
1. Go to **API Keys** in your Resend dashboard
2. Click **"Create API Key"**
3. Name it "QuickNews Waitlist"
4. Copy the API key (starts with `re_`)

### **Step 3: Add to Vercel**
1. Go to your Vercel dashboard
2. Find your QuickNews project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your API key from Step 2
   - **Environment:** Select all (Production, Preview, Development)
5. Click **Save**

### **Step 4: Redeploy**
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**

### **Step 5: Test**
1. Join your waitlist with a test email
2. Check if the welcome email arrives
3. Check Vercel logs for any errors

## 🧪 **Debug Commands**

Test your setup:
```bash
curl https://www.quicknews.tech/api/debug
```

Should return:
```json
{
  "hasSupabaseUrl": true,
  "hasSupabaseKey": true,
  "hasResendKey": true,
  "supabaseUrl": "Set",
  "supabaseKey": "Set",
  "resendKey": "Set"
}
```

## 📧 **What Happens Now**

When someone joins your waitlist:
1. ✅ They get added to Supabase
2. ✅ They receive a beautiful welcome email
3. ✅ Email comes from "QuickNews <noreply@quicknews.tech>"
4. ✅ Email includes your logo and branding

## 🆓 **Resend Free Tier**
- 3,000 emails per month
- 100 emails per day
- Perfect for your waitlist!

## 🚨 **If Emails Don't Send**
1. Check Vercel logs for errors
2. Verify API key is correct
3. Check spam folder
4. Make sure domain is verified in Resend

That's it! Your emails should work in 5 minutes! 🎉
