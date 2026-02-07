// Entry point
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div className="p-4">
      <h1>Please view index.html for the landing page.</h1>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
