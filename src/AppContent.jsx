import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoader } from './context/LoaderContext';

import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SabiDashboardScreen from './screens/SabiDashboardScreen'; // New Import
import ShuttlePayScreen from './screens/ShuttlePayScreen'; // Renamed Import

function AppContent() {
  // Updated state machine: loading -> welcome -> dashboard -> service
  const [appState, setAppState] = useState('loading');
  const { performAction } = useLoader();

  const handleConnect = () => {
    performAction(() => {
      setAppState('dashboard'); // Go to dashboard after connecting
    });
  };

  const handleNavigation = (service) => {
    if (service === 'shuttlePay') {
      setAppState('shuttlePay'); // Navigate to the selected service
    }
  };

  return (
    <AnimatePresence mode="wait">
      {appState === 'loading' && (
        <SplashScreen
          key="splash"
          onAnimationComplete={() => setAppState('welcome')}
        />
      )}
      {appState === 'welcome' && (
        <motion.div key="welcome" className="h-full">
          <WelcomeScreen onConnect={handleConnect} />
        </motion.div>
      )}
      {/* New Dashboard State */}
      {appState === 'dashboard' && (
        <motion.div 
            key="dashboard" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full"
        >
          <SabiDashboardScreen onNavigate={handleNavigation} />
        </motion.div>
      )}
      {/* Renamed Shuttle Pay State */}
      {appState === 'shuttlePay' && (
        <motion.div
          key="shuttlePay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-full"
        >
          <ShuttlePayScreen onBack={() => setAppState('dashboard')} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AppContent;