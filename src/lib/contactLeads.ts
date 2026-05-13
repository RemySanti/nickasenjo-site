import { getSupabaseBrowserClient } from './supabaseClient';

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

export function supabaseLeadsConfigured(): boolean {
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
  const sb = getSupabaseBrowserClient();
  if (!sb) return;
  const { error } = await sb.from('contact_leads').insert({
    name: lead.name,
    email: lead.email,
    phone: lead.phone || null,
    project_type: lead.projectType,
    budget: lead.budget || null,
    timeline: lead.timeline || null,
    message: lead.message,
  });
  if (error) {
    console.warn('[contactLeads] Supabase insert failed', error.message, error);
  }
}

export async function fetchRemoteLeads(): Promise<ContactLeadRecord[]> {
  const sb = getSupabaseBrowserClient();
  if (!sb) return [];
  const { data, error } = await sb
    .from('contact_leads')
    .select('id, created_at, name, email, phone, project_type, budget, timeline, message')
    .order('created_at', { ascending: false })
    .limit(200);
  if (error) {
    console.warn('[contactLeads] Supabase list failed', error.message);
    return [];
  }
  if (!data) return [];
  return data.map((r) => ({
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
