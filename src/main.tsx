import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found');
}

/**
 * Browser-snapshot prerender captures DOM after effects (images, observers, etc.),
 * so hydrateRoot would mismatch. createRoot remounts cleanly; crawlers and no-JS
 * users still receive the full HTML body from the prerendered files.
 */
createRoot(rootEl).render(<App />);
