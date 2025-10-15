# 🚀 Quick Domain Setup - 5 Minutes

## **Where did you buy your domain?**

### **🌐 If you bought from Namecheap:**
1. Login to Namecheap → Domain List → Manage
2. Go to "Advanced DNS" tab
3. Delete existing A records
4. Add these 2 records:
   ```
   A Record: @ → 76.76.19.61
   CNAME Record: www → cname.vercel-dns.com
   ```
5. Save changes
6. Go to Vercel → Settings → Domains → Add `quicknews.tech`

### **🌐 If you bought from Google Domains:**
1. Go to domains.google.com → Your domain → DNS
2. Delete existing A records
3. Add these 2 records:
   ```
   A: @ → 76.76.19.61
   CNAME: www → cname.vercel-dns.com
   ```
4. Save changes
5. Go to Vercel → Settings → Domains → Add `quicknews.tech`

### **🌐 If you bought from Cloudflare:**
1. Go to Cloudflare → DNS → Records
2. Add these 2 records:
   ```
   A: @ → 76.76.19.61 (Proxied)
   CNAME: www → cname.vercel-dns.com (Proxied)
   ```
3. Go to Vercel → Settings → Domains → Add `quicknews.tech`

### **🌐 If you bought from GoDaddy:**
1. Go to GoDaddy → My Products → DNS
2. Delete existing A records
3. Add these 2 records:
   ```
   A: @ → 76.76.19.61
   CNAME: www → cname.vercel-dns.com
   ```
4. Save changes
5. Go to Vercel → Settings → Domains → Add `quicknews.tech`

### **🌐 If you bought from any other provider:**
1. Find "DNS Management" or "DNS Settings"
2. Add these 2 records:
   ```
   A Record: @ (or root) → 76.76.19.61
   CNAME Record: www → cname.vercel-dns.com
   ```
3. Save changes
4. Go to Vercel → Settings → Domains → Add your domain

---

## **⏰ Wait Time:**
- **5-60 minutes** for DNS to propagate
- Check status in Vercel dashboard
- Test in browser when ready

## **✅ Success:**
Your domain will show your QuickNews landing page with SSL certificate!

---

**Need help? Tell me which domain provider you used and I'll give specific instructions!** 🎯
