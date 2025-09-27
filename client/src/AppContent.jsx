import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
  const location = useLocation();
  const navigate = useNavigate();
  const { performAction } = useLoader();

  const handleRoleSelect = (role) => {
    performAction(() => {
      if (role === 'student') {
        navigate('/dashboard');
      } else {
        navigate('/driver/login');
      }
    });
  };

  const handleDriverLogin = () => {
    performAction(() => {
      navigate('/driver/dashboard');
    });
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashScreen onAnimationComplete={() => navigate('/welcome')} />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/roles" element={<RoleSelectionScreen onSelectRole={handleRoleSelect} />} />
        <Route path="/dashboard" element={<SabiDashboardScreen />} />
        <Route path="/shuttle-pay" element={<ShuttlePayScreen />} />
        <Route path="/driver/login" element={<DriverLoginScreen onLogin={handleDriverLogin} />} />
        <Route path="/driver/dashboard" element={<DriverDashboardScreen />} />
        <Route path="/driver/qr" element={<QRCodeScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppContent;