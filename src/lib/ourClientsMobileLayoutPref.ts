import {
  DEFAULT_OUR_CLIENTS_MOBILE_LAYOUT,
  OUR_CLIENTS_MOBILE_LAYOUT_KEY,
  OUR_CLIENTS_MOBILE_LAYOUT_PREF_VERSION,
  type OurClientsMobileLayoutId,
  OUR_CLIENTS_MOBILE_LAYOUTS,
} from '../config/ourClientsMobileLayouts';

const OUR_CLIENTS_MOBILE_LAYOUT_VERSION_KEY = 'naf_our_clients_mobile_layout_version';

const VALID_IDS = new Set(OUR_CLIENTS_MOBILE_LAYOUTS.map((o) => o.id));

export function readOurClientsMobileLayout(): OurClientsMobileLayoutId {
  if (typeof window === 'undefined') return DEFAULT_OUR_CLIENTS_MOBILE_LAYOUT;
  const version = localStorage.getItem(OUR_CLIENTS_MOBILE_LAYOUT_VERSION_KEY);
  if (version !== OUR_CLIENTS_MOBILE_LAYOUT_PREF_VERSION) {
    return DEFAULT_OUR_CLIENTS_MOBILE_LAYOUT;
  }
  const raw = localStorage.getItem(OUR_CLIENTS_MOBILE_LAYOUT_KEY);
  if (raw && VALID_IDS.has(raw as OurClientsMobileLayoutId)) {
    return raw as OurClientsMobileLayoutId;
  }
  return DEFAULT_OUR_CLIENTS_MOBILE_LAYOUT;
}

export function writeOurClientsMobileLayout(id: OurClientsMobileLayoutId) {
  localStorage.setItem(OUR_CLIENTS_MOBILE_LAYOUT_KEY, id);
  localStorage.setItem(OUR_CLIENTS_MOBILE_LAYOUT_VERSION_KEY, OUR_CLIENTS_MOBILE_LAYOUT_PREF_VERSION);
  window.dispatchEvent(new CustomEvent('naf:our-clients-mobile-layout'));
}
