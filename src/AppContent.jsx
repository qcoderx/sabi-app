import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoader } from './context/LoaderContext';

import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SabiDashboardScreen from './screens/SabiDashboardScreen';
import ShuttlePayScreen from './screens/ShuttlePayScreen';
import DriverLoginScreen from './screens/driver/DriverLoginScreen';
import DriverDashboardScreen from './screens/driver/DriverDashboardScreen';
import QRCodeScreen from './screens/driver/QRCodeScreen';
import SettingsScreen from './screens/SettingsScreen';

function AppContent() {
  const [appState, setAppState] = useState('loading');
  const { performAction } = useLoader();

  const handleConnect = () => {
    performAction(() => {
      setAppState('dashboard');
    });
  };

  const handleDriverLogin = () => {
    performAction(() => {
      setAppState('driverDashboard');
    });
  };

  const handleNavigation = (service) => {
    setAppState(service);
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
          <WelcomeScreen onConnect={handleConnect} onNavigateToDriverLogin={() => setAppState('driverLogin')} />
        </motion.div>
      )}
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
      {appState === 'driverLogin' && (
        <motion.div key="driverLogin" className="h-full">
          <DriverLoginScreen onLogin={handleDriverLogin} onNavigateToSignUp={() => {}} />
        </motion.div>
      )}
      {appState === 'driverDashboard' && (
        <motion.div key="driverDashboard" className="h-full">
          <DriverDashboardScreen onNavigate={handleNavigation} />
        </motion.div>
      )}
      {appState === 'qrCode' && (
        <motion.div key="qrCode" className="h-full">
          <QRCodeScreen onBack={() => setAppState('driverDashboard')} />
        </motion.div>
      )}
      {appState === 'settings' && (
        <motion.div key="settings" className="h-full">
          <SettingsScreen onBack={() => setAppState('dashboard')} userType="Student" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AppContent;