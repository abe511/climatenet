import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// import AppWrapper from './components/AppWrapper';
import 'styles/index.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
