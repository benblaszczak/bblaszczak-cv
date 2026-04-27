/* SPDX-FileCopyrightText: 2026 Benjamin Ray Blaszczak */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

// Render the root component into the root element in the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);