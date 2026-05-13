/** Primary business email — shown sitewide and used for contact form delivery. */
export const OWNER_EMAIL = 'nick@nickasenjofilms.com';

export function mailtoOwner(subject?: string): string {
  const base = `mailto:${OWNER_EMAIL}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}

/** Receives a copy of every successful contact form submission (FormSubmit `_cc`). */
export const CONTACT_FORM_COPY_EMAIL = 'remysanti10@gmail.com';

/** FormSubmit.co AJAX endpoint (no API key). First submission may require confirming the address in FormSubmit’s email. */
export const CONTACT_FORM_AJAX_URL = `https://formsubmit.co/ajax/${OWNER_EMAIL}`;
