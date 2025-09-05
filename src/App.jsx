import React from 'react';
import { LoaderProvider } from './context/LoaderContext';
import ActionLoader from './components/ActionLoader';
import AppContent from './AppContent'; // We'll move the main logic here

function App() {
  return (
    // Wrap the entire app in the LoaderProvider
    <LoaderProvider>
      <div className="w-full min-h-screen bg-sabi-gray-light">
        <div className="relative max-w-md mx-auto h-screen bg-white shadow-soft-lg overflow-hidden">
          <AppContent />
          {/* The ActionLoader sits on top of everything, ready to be triggered */}
          <ActionLoader />
        </div>
      </div>
    </LoaderProvider>
  );
}

export default App;