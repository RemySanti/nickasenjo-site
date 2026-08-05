# Supabase setup (contact leads)

This project stores a copy of each successful contact form submission in Supabase so the **owner dashboard** can list leads without mailbox access.

## 1. Create a project

1. Go to [supabase.com](https://supabase.com) and create a project (free tier is fine).
2. Wait for the database to finish provisioning.

## 2. Run the migration SQL

1. In the Supabase dashboard: **SQL Editor** → **New query**.
2. Paste the contents of `migrations/20250513120000_contact_leads.sql`.
3. Click **Run**.

This creates `public.contact_leads`, indexes, RLS policies for the **anon** role (used by the browser `anon` API key), and grants `SELECT` / `INSERT`.

## 3. Add environment variables

1. **Project Settings** → **API**.
2. Copy **Project URL** and the **anon public** key (not the `service_role` key).

In the repo root, copy `.env.example` to `.env` and set:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Restart `npm run dev` after changing `.env`.

On Vercel (or similar), add the same variables in the hosting dashboard and redeploy.

## 4. Verify

1. Submit the contact form on the site once (FormSubmit must return success).
2. In Supabase: **Table Editor** → `contact_leads` - you should see a row.
3. Open `#owner-dashboard` (unlock with the owner password) → **Refresh** on lead submissions.

## Security note

The **anon** key is exposed in the frontend bundle. Anyone with the key can **read** and **insert** rows on this table. Use a **dedicated** Supabase project for leads only, rotate the anon key if it leaks, and treat this as operational convenience, not highly sensitive data storage.
