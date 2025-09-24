import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoader } from './context/LoaderContext';

import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RoleSelectionScreen from './screens/RoleSelectionScreen';
import SabiDashboardScreen from './screens/SabiDashboardScreen';
import ShuttlePayScreen from './screens/ShuttlePayScreen';
import DriverLoginScreen from './screens/driver/DriverLoginScreen';
import DriverDashboardScreen from './screens/driver/DriverDashboardScreen';
import QRCodeScreen from './screens/driver/QRCodeScreen';
import SettingsScreen from './screens/SettingsScreen';

function AppContent() {
  const [appState, setAppState] = useState('loading');
  const [previousState, setPreviousState] = useState('loading'); // For navigating back from settings
  const { performAction } = useLoader();

  // A robust navigation handler
  const navigateTo = (newState) => {
    setPreviousState(appState);
    setAppState(newState);
  };

  const handleRoleSelect = (role) => {
    if (role === 'student') {
      performAction(() => {
        navigateTo('dashboard');
      });
    } else {
      navigateTo('driverLogin');
    }
  };

  const handleDriverLogin = () => {
    performAction(() => {
      navigateTo('driverDashboard');
    });
  };

  return (
    <AnimatePresence mode="wait">
      {appState === 'loading' && (
        <SplashScreen
          key="splash"
          onAnimationComplete={() => navigateTo('welcome')}
        />
      )}
      {appState === 'welcome' && (
        <motion.div key="welcome" className="h-full">
          <WelcomeScreen onNext={() => navigateTo('roleSelection')} />
        </motion.div>
      )}
      {appState === 'roleSelection' && (
        <motion.div key="roleSelection" className="h-full">
          <RoleSelectionScreen onSelectRole={handleRoleSelect} />
        </motion.div>
      )}
      {appState === 'dashboard' && (
        <motion.div key="dashboard" className="h-full">
          <SabiDashboardScreen onNavigate={navigateTo} />
        </motion.div>
      )}
      {appState === 'shuttlePay' && (
        <motion.div key="shuttlePay" className="h-full">
          <ShuttlePayScreen onBack={() => navigateTo('dashboard')} />
        </motion.div>
      )}
      {appState === 'driverLogin' && (
        <motion.div key="driverLogin" className="h-full">
          <DriverLoginScreen onLogin={handleDriverLogin} />
        </motion.div>
      )}
      {appState === 'driverDashboard' && (
        <motion.div key="driverDashboard" className="h-full">
          <DriverDashboardScreen onNavigate={navigateTo} />
        </motion.div>
      )}
      {appState === 'qrCode' && (
        <motion.div key="qrCode" className="h-full">
          <QRCodeScreen onBack={() => navigateTo('driverDashboard')} />
        </motion.div>
      )}
      {appState === 'settings' && (
        <motion.div key="settings" className="h-full">
          <SettingsScreen onBack={() => setAppState(previousState)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AppContent;