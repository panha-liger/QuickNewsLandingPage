# 🌐 Domain Connection Guide - Connect to Vercel

## 🎯 **Goal: Connect your domain to Vercel deployment**

### **Option 1: Use Vercel's Domain Management (Recommended)**

#### **Step 1: Add Domain in Vercel Dashboard**
1. Go to your **Vercel Dashboard** → **QuickNews project**
2. Click **"Settings"** tab
3. Click **"Domains"** in the left sidebar
4. Click **"Add Domain"**
5. Enter your domain: `quicknews.tech` (or whatever domain you have)
6. Click **"Add"**

#### **Step 2: Configure DNS Records**
Vercel will show you the DNS records you need to add:

**For Root Domain (quicknews.tech):**
```
Type: A
Name: @
Value: 76.76.19.61
TTL: 3600
```

**For WWW Subdomain (www.quicknews.tech):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### **Step 3: Add DNS Records in Your Domain Provider**
1. Go to your domain provider's dashboard (wherever you bought the domain)
2. Find **"DNS Management"** or **"DNS Settings"**
3. Add the records Vercel provided
4. Save changes

#### **Step 4: Wait for Propagation**
- DNS changes can take **5-60 minutes** to propagate
- Vercel will show status: "Valid Configuration" when ready

---

### **Option 2: Use Cloudflare (Free & Fast)**

#### **Step 1: Sign up for Cloudflare**
1. Go to [cloudflare.com](https://cloudflare.com)
2. Sign up for free account
3. Add your domain to Cloudflare

#### **Step 2: Change Nameservers**
1. In Cloudflare, get your nameservers (e.g., `ns1.cloudflare.com`)
2. Go to your domain provider
3. Change nameservers to Cloudflare's
4. Wait for propagation (5-60 minutes)

#### **Step 3: Add DNS Records in Cloudflare**
1. Go to **DNS** → **Records**
2. Add these records:

**Root Domain:**
```
Type: A
Name: @
IPv4 address: 76.76.19.61
Proxy status: Proxied (orange cloud)
```

**WWW Subdomain:**
```
Type: CNAME
Name: www
Target: cname.vercel-dns.com
Proxy status: Proxied (orange cloud)
```

#### **Step 4: Configure in Vercel**
1. In Vercel dashboard → **Settings** → **Domains**
2. Add your domain: `quicknews.tech`
3. Vercel will automatically detect Cloudflare setup

---

### **Option 3: Use Namecheap (If you bought domain there)**

#### **Step 1: Access DNS Management**
1. Login to Namecheap
2. Go to **Domain List**
3. Click **"Manage"** next to your domain
4. Go to **"Advanced DNS"** tab

#### **Step 2: Add DNS Records**
1. Delete existing A records
2. Add new records:

**Root Domain:**
```
Type: A Record
Host: @
Value: 76.76.19.61
TTL: Automatic
```

**WWW Subdomain:**
```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

#### **Step 3: Save and Wait**
1. Click **"Save All Changes"**
2. Wait 5-60 minutes for propagation

---

### **Option 4: Use Google Domains (If you bought domain there)**

#### **Step 1: Access DNS Settings**
1. Go to [domains.google.com](https://domains.google.com)
2. Click on your domain
3. Go to **"DNS"** tab

#### **Step 2: Add DNS Records**
1. Delete existing A records
2. Add new records:

**Root Domain:**
```
Type: A
Name: @
Data: 76.76.19.61
TTL: 3600
```

**WWW Subdomain:**
```
Type: CNAME
Name: www
Data: cname.vercel-dns.com
TTL: 3600
```

---

## 🔧 **Troubleshooting**

### **Common Issues:**

#### **1. Domain Not Working After Setup**
- **Wait longer**: DNS can take up to 24 hours
- **Check DNS propagation**: Use [whatsmydns.net](https://whatsmydns.net)
- **Clear browser cache**: Hard refresh (Ctrl+F5)

#### **2. SSL Certificate Issues**
- Vercel automatically provides SSL certificates
- Wait 5-10 minutes after DNS propagation
- Check Vercel dashboard for certificate status

#### **3. WWW vs Non-WWW**
- Vercel handles both automatically
- You can redirect one to the other in Vercel settings

#### **4. Subdomain Setup**
If you want a subdomain like `app.quicknews.tech`:
```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
```

---

## 📋 **Quick Checklist**

- [ ] Domain added to Vercel dashboard
- [ ] DNS records added to domain provider
- [ ] Nameservers updated (if using Cloudflare)
- [ ] Waited for DNS propagation (5-60 minutes)
- [ ] Checked domain status in Vercel
- [ ] Tested domain in browser
- [ ] SSL certificate active (green lock)

---

## 🎯 **Expected Result**

After setup, your domain should:
- ✅ Load your QuickNews landing page
- ✅ Show green SSL lock in browser
- ✅ Work with both `quicknews.tech` and `www.quicknews.tech`
- ✅ Be fast and secure

---

## 📞 **Need Help?**

1. **Check Vercel Status**: [status.vercel.com](https://status.vercel.com)
2. **Vercel Documentation**: [vercel.com/docs/domains](https://vercel.com/docs/domains)
3. **DNS Propagation Checker**: [whatsmydns.net](https://whatsmydns.net)

**Your QuickNews landing page will be live at your custom domain!** 🚀
