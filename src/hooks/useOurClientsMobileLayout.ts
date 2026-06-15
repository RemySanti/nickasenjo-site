import { useEffect, useState } from 'react';
import {
  readOurClientsMobileLayout,
  type OurClientsMobileLayoutId,
} from '../lib/ourClientsMobileLayoutPref';

export function useOurClientsMobileLayout(): OurClientsMobileLayoutId {
  const [layoutId, setLayoutId] = useState<OurClientsMobileLayoutId>(readOurClientsMobileLayout);

  useEffect(() => {
    const sync = () => setLayoutId(readOurClientsMobileLayout());
    window.addEventListener('naf:our-clients-mobile-layout', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('naf:our-clients-mobile-layout', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return layoutId;
}
