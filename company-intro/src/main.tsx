import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import App from './App';
import '@fontsource-variable/noto-sans-sc';
import './styles/jr-craft.css';
import './styles/presentation.css';
import './styles/deck.css';

// 旧版链接用 #页码（例如 …/company-intro/#1），引擎用 ?page=N；这里保持旧链接可用。
const legacy = window.location.hash.match(/^#(\d+)$/);
if (legacy) {
	const url = new URL(window.location.href);
	url.searchParams.set('page', legacy[1]);
	url.hash = '';
	window.history.replaceState(null, '', url.toString());
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MotionConfig reducedMotion="user"><App /></MotionConfig>
	</StrictMode>,
);
