import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Palette, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SettingsScreen = ({ onBack, userType = 'Student' }) => {
  const { theme, toggleTheme } = useTheme();

  const settingsOptions = [
    { icon: User, label: 'Edit Profile', action: () => {} },
    { icon: Palette, label: 'Change Theme', action: toggleTheme, value: theme === 'light' ? 'Dark' : 'Light' },
    { icon: Bell, label: 'Notifications', action: () => {} },
    { icon: Shield, label: 'Privacy & Security', action: () => {} },
  ];

  return (
    <div className="flex flex-col h-full bg-sabi-gray-light dark:bg-sabi-dark-blue">
      <header className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700">
        <motion.button whileTap={{ scale: 0.9 }} onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft className="text-sabi-dark dark:text-sabi-white" />
        </motion.button>
        <h1 className="text-xl font-bold text-sabi-dark dark:text-sabi-white ml-4">Settings</h1>
      </header>

      <main className="flex-1 p-6 space-y-4">
        {settingsOptions.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
            whileTap={{ scale: 0.98 }}
            onClick={item.action}
            className="flex items-center p-4 bg-sabi-white dark:bg-sabi-dark-blue-light rounded-xl shadow-soft cursor-pointer"
          >
            <div className="p-2 bg-sabi-gray-light dark:bg-sabi-dark-blue rounded-lg">
              <item.icon size={20} className="text-sabi-blue" />
            </div>
            <p className="flex-1 ml-4 font-semibold text-sabi-dark dark:text-sabi-white">{item.label}</p>
            {item.value && <p className="text-sabi-gray mr-2">{item.value}</p>}
            <ChevronRight size={20} className="text-sabi-gray" />
          </motion.div>
        ))}
      </main>

      <footer className="p-6">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-2 bg-sabi-red/10 text-sabi-red font-bold py-3 rounded-xl"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </motion.button>
      </footer>
    </div>
  );
};

export default SettingsScreen;