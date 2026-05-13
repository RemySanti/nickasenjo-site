export type ContactLeadRecord = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  source: 'local' | 'supabase';
};

const LOCAL_KEY = 'naf_contact_leads_v1';
const MAX_LOCAL = 300;

function supabaseConfigured(): boolean {
  return Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);
}

export function readLocalLeads(): ContactLeadRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ContactLeadRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendLocalLead(lead: Omit<ContactLeadRecord, 'id' | 'createdAt' | 'source'>): ContactLeadRecord {
  const row: ContactLeadRecord = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    source: 'local',
  };
  const next = [row, ...readLocalLeads()].slice(0, MAX_LOCAL);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
  return row;
}

export async function pushLeadToSupabase(lead: Omit<ContactLeadRecord, 'id' | 'createdAt' | 'source'>): Promise<void> {
  if (!supabaseConfigured()) return;
  const url = String(import.meta.env.VITE_SUPABASE_URL).replace(/\/+$/, '');
  const key = String(import.meta.env.VITE_SUPABASE_ANON_KEY);
  const res = await fetch(`${url}/rest/v1/contact_leads`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      name: lead.name,
      email: lead.email,
      phone: lead.phone || null,
      project_type: lead.projectType,
      budget: lead.budget || null,
      timeline: lead.timeline || null,
      message: lead.message,
    }),
  });
  if (!res.ok) {
    const t = await res.text().catch(() => '');
    console.warn('[contactLeads] Supabase insert failed', res.status, t);
  }
}

export async function fetchRemoteLeads(): Promise<ContactLeadRecord[]> {
  if (!supabaseConfigured()) return [];
  const url = String(import.meta.env.VITE_SUPABASE_URL).replace(/\/+$/, '');
  const key = String(import.meta.env.VITE_SUPABASE_ANON_KEY);
  const res = await fetch(
    `${url}/rest/v1/contact_leads?select=id,created_at,name,email,phone,project_type,budget,timeline,message&order=created_at.desc&limit=200`,
    {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
    },
  );
  if (!res.ok) {
    console.warn('[contactLeads] Supabase list failed', res.status);
    return [];
  }
  const rows = (await res.json()) as Array<{
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone: string | null;
    project_type: string | null;
    budget: string | null;
    timeline: string | null;
    message: string;
  }>;
  return rows.map((r) => ({
    id: r.id,
    createdAt: r.created_at,
    name: r.name,
    email: r.email,
    phone: r.phone ?? '',
    projectType: r.project_type ?? '',
    budget: r.budget ?? '',
    timeline: r.timeline ?? '',
    message: r.message,
    source: 'supabase' as const,
  }));
}

export function recordSuccessfulContactLead(lead: Omit<ContactLeadRecord, 'id' | 'createdAt' | 'source'>): void {
  appendLocalLead(lead);
  void pushLeadToSupabase(lead);
}
