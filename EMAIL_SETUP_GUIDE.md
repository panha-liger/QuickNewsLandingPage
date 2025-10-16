# 📧 Email Setup Guide for QuickNews Waitlist

## 🎯 **What We've Added**

When someone joins your waitlist, they'll automatically receive a beautiful thank you email with:
- ✅ QuickNews logo as the sender
- ✅ Welcome message with your branding
- ✅ "What's Next?" section
- ✅ Social media links
- ✅ Professional HTML design

## 🚀 **Email Service Options**

### **Option 1: Resend (Recommended - Free & Easy)**

1. **Sign up at [resend.com](https://resend.com)**
2. **Get your API key**
3. **Update the code:**

Replace the email function in `app/api/waitlist/route.ts` with:

```typescript
async function sendThankYouEmail(email: string, role?: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'QuickNews <noreply@quicknews.tech>',
      to: [email],
      subject: 'Welcome to QuickNews! 🎉',
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://www.quicknews.tech/images/logos/Quick-News-Logo_FA-1.png" alt="QuickNews Logo" style="width: 120px; height: auto; margin-bottom: 20px;">
          </div>
          
          <h1 style="color: #1e40af; font-size: 28px; font-weight: 600; text-align: center; margin-bottom: 20px;">
            Welcome to QuickNews! 🎉
          </h1>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for joining our waitlist! We're excited to have you on board as we build the future of news for Gen Z.
          </p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h2 style="color: #1e40af; font-size: 20px; margin-bottom: 15px;">What's Next?</h2>
            <ul style="color: #374151; font-size: 14px; line-height: 1.6; padding-left: 20px;">
              <li>You'll be among the first to know when we launch</li>
              <li>Get early access to our creator program</li>
              <li>Join our community of verified news creators</li>
              <li>Earn 60x more than TikTok sharing real news</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #6b7280; font-size: 14px; margin-bottom: 10px;">
              Follow us for updates:
            </p>
            <div style="display: flex; justify-content: center; gap: 20px;">
              <a href="#" style="color: #1e40af; text-decoration: none; font-weight: 500;">Twitter</a>
              <a href="#" style="color: #1e40af; text-decoration: none; font-weight: 500;">Instagram</a>
              <a href="#" style="color: #1e40af; text-decoration: none; font-weight: 500;">TikTok</a>
            </div>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              This email was sent to ${email} because you joined the QuickNews waitlist.
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 5px 0 0 0;">
              If you didn't sign up, you can safely ignore this email.
            </p>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error(`Email service error: ${response.statusText}`);
  }

  return response.json();
}
```

4. **Add environment variable in Vercel:**
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key

### **Option 2: EmailJS (Free)**

1. **Sign up at [emailjs.com](https://emailjs.com)**
2. **Create a service (Gmail, Outlook, etc.)**
3. **Create an email template**
4. **Get your credentials:**
   - Service ID
   - Template ID
   - User ID (Public Key)

5. **Update the code with your actual IDs:**
   ```typescript
   service_id: 'your_actual_service_id',
   template_id: 'your_actual_template_id',
   user_id: 'your_actual_user_id',
   ```

### **Option 3: SendGrid**

1. **Sign up at [sendgrid.com](https://sendgrid.com)**
2. **Get your API key**
3. **Update the code to use SendGrid API**

## 🔧 **Environment Variables to Add**

Add these to your Vercel environment variables:

### **For Resend:**
- `RESEND_API_KEY` = your_resend_api_key

### **For EmailJS:**
- `EMAILJS_SERVICE_ID` = your_service_id
- `EMAILJS_TEMPLATE_ID` = your_template_id
- `EMAILJS_USER_ID` = your_user_id

## 🧪 **Testing**

1. **Deploy your changes**
2. **Join the waitlist with a test email**
3. **Check if the email arrives**
4. **Check Vercel logs for any errors**

## 📝 **Email Content Features**

- ✅ **Professional Design**: Clean, modern HTML layout
- ✅ **QuickNews Branding**: Logo and brand colors
- ✅ **Mobile Responsive**: Looks great on all devices
- ✅ **Clear Call-to-Action**: What users can expect next
- ✅ **Social Links**: Easy access to your social media
- ✅ **Unsubscribe Info**: Professional footer with opt-out info

## 🚨 **Important Notes**

- **Email won't fail the waitlist signup** - if email fails, the user still gets added to the waitlist
- **Check spam folders** - emails might go to spam initially
- **Domain verification** - you may need to verify your domain for better deliverability
- **Rate limits** - most services have daily sending limits

## 🎉 **Ready to Go!**

Once you set up the email service and add the environment variables, every new waitlist signup will automatically receive a beautiful welcome email from QuickNews!
