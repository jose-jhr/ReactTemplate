import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './components/hello'; // Importamos el componente

const rootElement = document.getElementById('react-root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Hello />);
}
