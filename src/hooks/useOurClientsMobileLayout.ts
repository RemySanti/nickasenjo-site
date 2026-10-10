import { useEffect, useState } from 'react';
import {
  DEFAULT_OUR_CLIENTS_MOBILE_LAYOUT,
  readOurClientsMobileLayout,
  type OurClientsMobileLayoutId,
} from '../lib/ourClientsMobileLayoutPref';

export function useOurClientsMobileLayout(): OurClientsMobileLayoutId {
  // Default on first paint so prerender HTML and client remount match; prefer storage after mount.
  const [layoutId, setLayoutId] = useState<OurClientsMobileLayoutId>(DEFAULT_OUR_CLIENTS_MOBILE_LAYOUT);

  useEffect(() => {
    const sync = () => setLayoutId(readOurClientsMobileLayout());
    sync();
    window.addEventListener('naf:our-clients-mobile-layout', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('naf:our-clients-mobile-layout', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return layoutId;
}
