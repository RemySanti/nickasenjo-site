import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react';
import { Lock, LogOut, RefreshCw, Shield, Database, Hammer, Inbox, ExternalLink } from 'lucide-react';
import {
  OWNER_DASH_SESSION_KEY,
  verifyOwnerDashboardPassword,
} from '../config/ownerDashboardAuth';
import {
  type ContactLeadRecord,
  fetchRemoteLeads,
  readLocalLeads,
} from '../lib/contactLeads';
import pkg from '../../package.json';
import { CONTACT_FORM_COPY_EMAIL } from '../config/siteContact';

const SUPABASE_CONFIGURED = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY,
);

const SQL_SNIPPET = `create table if not exists public.contact_leads (
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

alter table public.contact_leads enable row level security;

create policy "contact_leads_insert_anon"
  on public.contact_leads for insert
  to anon
  with check (true);

create policy "contact_leads_select_anon"
  on public.contact_leads for select
  to anon
  using (true);`;

function mergeLeads(local: ContactLeadRecord[], remote: ContactLeadRecord[]): ContactLeadRecord[] {
  const byKey = new Map<string, ContactLeadRecord>();
  for (const r of [...remote, ...local]) {
    const k = r.source === 'supabase' ? `s:${r.id}` : `l:${r.id}`;
    byKey.set(k, r);
  }
  return [...byKey.values()].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function OwnerDashboardPage() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(OWNER_DASH_SESSION_KEY) === '1');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [busy, setBusy] = useState(false);
  const [leads, setLeads] = useState<ContactLeadRecord[]>([]);
  const [remoteError, setRemoteError] = useState('');

  const refreshLeads = useCallback(async () => {
    setRemoteError('');
    const local = readLocalLeads();
    if (!SUPABASE_CONFIGURED) {
      setLeads(mergeLeads(local, []));
      return;
    }
    try {
      const remote = await fetchRemoteLeads();
      setLeads(mergeLeads(local, remote));
    } catch {
      setRemoteError('Could not load remote leads (check Supabase URL, key, and RLS).');
      setLeads(mergeLeads(local, []));
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    void refreshLeads();
  }, [authed, refreshLeads]);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginError('');
    setBusy(true);
    try {
      const ok = await verifyOwnerDashboardPassword(password);
      if (!ok) {
        setLoginError('Incorrect password.');
        return;
      }
      sessionStorage.setItem(OWNER_DASH_SESSION_KEY, '1');
      setAuthed(true);
      setPassword('');
    } finally {
      setBusy(false);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem(OWNER_DASH_SESSION_KEY);
    setAuthed(false);
  }

  const depCount = useMemo(
    () => (pkg.dependencies ? Object.keys(pkg.dependencies).length : 0),
    [],
  );

  if (!authed) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-md border border-white/15 bg-white/[0.04] p-10 backdrop-blur-sm">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-[#BC271C]/40 bg-[#BC271C]/10 p-4">
              <Lock className="h-10 w-10 text-[#BC271C]" aria-hidden />
            </div>
          </div>
          <h1
            className="mb-2 text-center text-white tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.1rem' }}
          >
            Owner dashboard
          </h1>
          <p className="mb-8 text-center text-sm text-white/55">Enter the site password to continue.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 focus:border-[#BC271C] focus:outline-none"
              placeholder="Password"
              required
            />
            {loginError ? <p className="text-sm text-red-400">{loginError}</p> : null}
            <button
              type="submit"
              disabled={busy}
              className="w-full bg-[#BC271C] py-3 text-sm tracking-wider text-white uppercase transition-opacity hover:opacity-95 disabled:opacity-50"
              style={{ fontFamily: 'Lemon Milk, sans-serif' }}
            >
              {busy ? 'Checking…' : 'Unlock'}
            </button>
          </form>
          <p className="mt-8 text-center text-[0.65rem] text-white/35">
            Client-only gate: do not rely on this for highly sensitive data.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEEEE8] pt-24 pb-20">
      <div className="container mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs tracking-[0.25em] text-black/45 uppercase">Internal</p>
            <h1
              className="text-black tracking-tight"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              Owner dashboard
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-black/60">
              Build overview, contact pipeline notes, and recent inquiry capture. Public SEO tree lives on{' '}
              <a href="/sitemap" className="text-[#BC271C] underline underline-offset-2">
                /sitemap
              </a>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 self-start border border-black/15 bg-white px-4 py-2.5 text-xs tracking-wider uppercase transition-colors hover:border-[#BC271C]"
            style={{ fontFamily: 'Lemon Milk, sans-serif' }}
          >
            <LogOut className="h-4 w-4" aria-hidden />
            Sign out
          </button>
        </div>

        <section className="mb-10 grid gap-6 lg:grid-cols-2">
          <div className="border border-black/10 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-[#BC271C]">
              <Hammer className="h-5 w-5" aria-hidden />
              <h2 className="tracking-wider uppercase text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                Build
              </h2>
            </div>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-black/10 pb-2">
                <dt className="text-black/50">Package</dt>
                <dd className="text-right font-medium text-black">{pkg.name}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-black/10 pb-2">
                <dt className="text-black/50">Version</dt>
                <dd className="text-right font-medium text-black">{pkg.version}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-black/10 pb-2">
                <dt className="text-black/50">Runtime</dt>
                <dd className="text-right text-black/80">Vite + React 18 (SPA)</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-black/10 pb-2">
                <dt className="text-black/50">Dependencies</dt>
                <dd className="text-right text-black/80">{depCount} npm packages</dd>
              </div>
              <div className="flex justify-between gap-4 pb-2">
                <dt className="text-black/50">Contact delivery</dt>
                <dd className="max-w-[14rem] text-right text-black/80">
                  FormSubmit → <span className="whitespace-nowrap">nick@nickasenjofilms.com</span>
                  <span className="block text-[0.65rem] text-black/50">CC: {CONTACT_FORM_COPY_EMAIL}</span>
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-black/50">
              FormSubmit must be activated from Nick&apos;s inbox once. Successful submits are also mirrored in this
              browser&apos;s storage and optionally in Supabase (see below) so you can review leads without mailbox
              access.
            </p>
          </div>

          <div className="border border-black/10 bg-black p-8 text-white shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-[#BC271C]">
              <Database className="h-5 w-5" aria-hidden />
              <h2 className="tracking-wider uppercase text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                Supabase (optional cloud inbox)
              </h2>
            </div>
            <p className="mb-4 text-sm text-white/65">
              Set <code className="text-white/90">VITE_SUPABASE_URL</code> and{' '}
              <code className="text-white/90">VITE_SUPABASE_ANON_KEY</code> in your deploy environment, then run this SQL
              in the Supabase SQL editor:
            </p>
            <pre className="max-h-48 overflow-auto rounded-sm border border-white/10 bg-white/5 p-4 text-[0.65rem] leading-relaxed text-white/80">
              {SQL_SNIPPET}
            </pre>
            <p className="mt-4 text-xs text-white/45">
              Public anon read/write is acceptable only for a dedicated project; rotate keys if exposed.
            </p>
          </div>
        </section>

        <section className="border border-black/10 bg-white p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-[#BC271C]">
              <Inbox className="h-5 w-5" aria-hidden />
              <h2 className="tracking-wider uppercase text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                Lead submissions
              </h2>
            </div>
            <button
              type="button"
              onClick={() => void refreshLeads()}
              className="inline-flex items-center gap-2 border border-black/15 px-4 py-2 text-xs tracking-wider uppercase transition-colors hover:border-[#BC271C]"
              style={{ fontFamily: 'Lemon Milk, sans-serif' }}
            >
              <RefreshCw className="h-3.5 w-3.5" aria-hidden />
              Refresh
            </button>
          </div>

          {!SUPABASE_CONFIGURED ? (
            <div className="mb-6 flex gap-3 rounded-sm border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-950/90">
              <Shield className="h-5 w-5 flex-shrink-0 text-amber-700" aria-hidden />
              <p>
                Supabase env vars are not set on this build. You are only seeing leads stored in{' '}
                <strong>this browser</strong> after a successful form submit from this same device. Configure Supabase
                to collect inquiries from all visitors.
              </p>
            </div>
          ) : null}

          {remoteError ? <p className="mb-4 text-sm text-red-600">{remoteError}</p> : null}

          {leads.length === 0 ? (
            <p className="text-sm text-black/55">No leads loaded yet. Submit the contact form once, then refresh.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-black/15 text-xs uppercase tracking-wider text-black/45">
                    <th className="py-3 pr-4 font-normal">When</th>
                    <th className="py-3 pr-4 font-normal">Name</th>
                    <th className="py-3 pr-4 font-normal">Email</th>
                    <th className="py-3 pr-4 font-normal">Project</th>
                    <th className="py-3 pr-4 font-normal">Source</th>
                    <th className="py-3 font-normal"> </th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((row) => (
                    <tr key={`${row.source}:${row.id}`} className="border-b border-black/10 align-top">
                      <td className="py-3 pr-4 whitespace-nowrap text-black/70">
                        {new Date(row.createdAt).toLocaleString()}
                      </td>
                      <td className="py-3 pr-4 font-medium text-black">{row.name}</td>
                      <td className="py-3 pr-4">
                        <a className="text-[#BC271C] underline-offset-2 hover:underline" href={`mailto:${row.email}`}>
                          {row.email}
                        </a>
                      </td>
                      <td className="py-3 pr-4 text-black/75">{row.projectType}</td>
                      <td className="py-3 pr-4 text-black/55">{row.source}</td>
                      <td className="py-3">
                        <details className="cursor-pointer text-xs text-[#BC271C]">
                          <summary className="select-none">Details</summary>
                          <div className="mt-2 max-w-md space-y-1 rounded-sm border border-black/10 bg-[#EEEEE8] p-3 text-black/80">
                            <p>
                              <span className="text-black/45">Phone:</span> {row.phone || '—'}
                            </p>
                            <p>
                              <span className="text-black/45">Budget:</span> {row.budget || '—'}
                            </p>
                            <p>
                              <span className="text-black/45">Timeline:</span> {row.timeline || '—'}
                            </p>
                            <p className="pt-2 text-black/70 whitespace-pre-wrap">{row.message}</p>
                          </div>
                        </details>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <p className="mt-10 text-center text-xs text-black/40">
          <a href="/sitemap" className="inline-flex items-center gap-1 text-[#BC271C] hover:underline">
            Open public sitemap <ExternalLink className="h-3 w-3 opacity-70" aria-hidden />
          </a>
        </p>
      </div>
    </div>
  );
}
