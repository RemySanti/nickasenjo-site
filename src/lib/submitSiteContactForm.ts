import { CONTACT_FORM_AJAX_URL, CONTACT_FORM_COPY_EMAIL } from '../config/siteContact';
import { recordSuccessfulContactLead } from './contactLeads';

const PROJECT_LABELS: Record<string, string> = {
  commercial: 'Commercial',
  'brand-film': 'Brand film',
  'music-video': 'Music video',
  documentary: 'Documentary',
  corporate: 'Corporate video',
  'social-media': 'Social media content',
  event: 'Event coverage',
  other: 'Other',
};

const BUDGET_LABELS: Record<string, string> = {
  '5k-10k': '$5,000 – $10,000',
  '10k-25k': '$10,000 – $25,000',
  '25k-50k': '$25,000 – $50,000',
  '50k+': '$50,000+',
  'not-sure': 'Not sure yet',
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: 'ASAP (1–2 weeks)',
  '1-month': 'Within 1 month',
  '2-3-months': '2–3 months',
  '3-6-months': '3–6 months',
  flexible: 'Flexible',
};

function labelFor(key: string, map: Record<string, string>, fallback: string) {
  if (!key) return fallback;
  return map[key] ?? key;
}

export async function submitSiteContactForm(form: HTMLFormElement): Promise<void> {
  const fd = new FormData(form);
  const name = String(fd.get('name') ?? '').trim();
  const email = String(fd.get('email') ?? '').trim();
  const phone = String(fd.get('phone') ?? '').trim();
  const projectKey = String(fd.get('project-type') ?? '').trim();
  const budgetKey = String(fd.get('budget') ?? '').trim();
  const timelineKey = String(fd.get('timeline') ?? '').trim();
  const story = String(fd.get('message') ?? '').trim();

  const projectLabel = labelFor(projectKey, PROJECT_LABELS, projectKey || '—');
  const budgetLabel = labelFor(budgetKey, BUDGET_LABELS, budgetKey || '—');
  const timelineLabel = labelFor(timelineKey, TIMELINE_LABELS, timelineKey || '—');

  const message = [
    'New inquiry from nickasenjofilms.com',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '—'}`,
    `Project type: ${projectLabel}`,
    `Budget: ${budgetLabel}`,
    `Timeline: ${timelineLabel}`,
    '',
    'Project details:',
    story || '—',
  ].join('\n');

  const out = new FormData();
  out.append('name', name);
  out.append('email', email);
  out.append('message', message);
  out.append('_subject', `Website inquiry — ${projectLabel}`);
  out.append('_template', 'table');
  out.append('_cc', CONTACT_FORM_COPY_EMAIL);

  const res = await fetch(CONTACT_FORM_AJAX_URL, {
    method: 'POST',
    body: out,
    headers: { Accept: 'application/json' },
  });

  const data = (await res.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;
  const ok = res.ok && String(data?.success).toLowerCase() === 'true';
  if (!ok) {
    throw new Error(
      data?.message ?? 'Could not send your message. Please try again or email us directly.',
    );
  }

  recordSuccessfulContactLead({
    name,
    email,
    phone,
    projectType: projectLabel,
    budget: budgetLabel,
    timeline: timelineLabel,
    message: story,
  });
}
