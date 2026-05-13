-- Website contact form leads (mirrored from SPA after FormSubmit succeeds).
-- Run in Supabase: SQL Editor → New query → paste → Run.

create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  project_type text,
  budget text,
  timeline text,
  message text not null
);

create index if not exists contact_leads_created_at_idx
  on public.contact_leads (created_at desc);

alter table public.contact_leads enable row level security;

drop policy if exists "contact_leads_insert_anon" on public.contact_leads;
drop policy if exists "contact_leads_select_anon" on public.contact_leads;

create policy "contact_leads_insert_anon"
  on public.contact_leads for insert
  to anon
  with check (true);

create policy "contact_leads_select_anon"
  on public.contact_leads for select
  to anon
  using (true);

grant usage on schema public to anon, authenticated;
grant select, insert on public.contact_leads to anon, authenticated;
