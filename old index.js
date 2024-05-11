import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './src/App';
import './index.css';

let root = createRoot(document.getElementById('root'));

root.render(<App />);