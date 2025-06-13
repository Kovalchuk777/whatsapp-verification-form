# 🛡️ Email Verification for WhatsApp Group Access

This Google Apps Script project automatically filters student emails and sends WhatsApp group invite links only to verified `.ac.uk` addresses.

---

## ✅ Features
- Accepts only emails ending in `.ac.uk`
- Sends automatic email with WhatsApp group link
- Skips duplicates and non-student emails
- Logs status directly in Google Sheets

---

## 📦 Setup Instructions

### 1. Create Google Form
- One short answer question: `Enter your student email`
- Make it **required**
- Do **not** collect email addresses automatically from Google accounts

### 2. Link to Google Sheets
- In the "Responses" tab → click spreadsheet icon

### 3. Open Apps Script
- `Extensions → Apps Script`

### 4. Paste the script

Paste contents of `sendWhatsAppInvite.gs`

Replace the link with your actual WhatsApp invite link:
```js
👉 https://chat.whatsapp.com/YOUR_LINK_HERE




In Apps Script → Left sidebar → ⏰ (Triggers)

Add new trigger:

Function: sendWhatsAppInvite

Event: From spreadsheet → On form submit



Authorize the script
Run once manually to trigger permission request. Accept the warning (script is safe if you're the owner).
