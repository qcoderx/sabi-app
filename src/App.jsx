import React from 'react';
import { LoaderProvider } from './context/LoaderContext';
import ActionLoader from './components/ActionLoader';
import AppContent from './AppContent';

function App() {
  return (
    <LoaderProvider>
      <div className="w-full min-h-screen bg-sabi-gray-light">
        <div className="relative max-w-md mx-auto h-screen bg-sabi-white shadow-soft-lg overflow-hidden">
          <AppContent />
          <ActionLoader />
        </div>
      </div>
    </LoaderProvider>
  );
}

export default App;