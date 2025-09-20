import React from 'react';
import { LoaderProvider } from './context/LoaderContext';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import ActionLoader from './components/ActionLoader';
import AppContent from './AppContent';

function App() {
  return (
    <ThemeProvider> {/* Add ThemeProvider */}
      <LoaderProvider>
        <div className="w-full min-h-screen bg-sabi-gray-light dark:bg-sabi-dark-blue">
          <div className="relative max-w-md mx-auto h-screen bg-sabi-white dark:bg-sabi-dark-blue shadow-soft-lg overflow-hidden">
            <AppContent />
            <ActionLoader />
          </div>
        </div>
      </LoaderProvider>
    </ThemeProvider>
  );
}

export default App;