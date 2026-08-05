import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found');
}

document.documentElement.classList.add('has-js');

// Drop crawler-only shell before React mounts so it cannot flash.
if (rootEl.getAttribute('data-prerender-shell') === 'true') {
  rootEl.innerHTML = '';
  rootEl.removeAttribute('data-prerender-shell');
}

createRoot(rootEl).render(<App />);
