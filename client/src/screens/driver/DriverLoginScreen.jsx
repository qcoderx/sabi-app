import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import SabiShuttleLogo from '../../assets/images/pic1.png';

const DriverLoginScreen = ({ onLogin, onNavigateToSignUp }) => {
  return (
    <div className="flex flex-col h-full w-full bg-sabi-white dark:bg-sabi-dark-blue p-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          src={SabiShuttleLogo}
          alt="Sabi Shuttle Pay Logo"
          className="w-32 h-auto mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="text-3xl font-extrabold text-sabi-dark dark:text-sabi-white tracking-tight"
        >
          Driver Login
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          className="mt-2 max-w-sm text-sabi-gray text-center"
        >
          Welcome back! Please enter your details.
        </motion.p>
      </div>

      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
        className="space-y-4"
      >
        <div className="relative">
          <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-sabi-gray" />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-sabi-gray-light dark:bg-sabi-dark-blue-light border border-gray-200 dark:border-gray-700 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-sabi-blue"
          />
        </div>
        <div className="relative">
          <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-sabi-gray" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-sabi-gray-light dark:bg-sabi-dark-blue-light border border-gray-200 dark:border-gray-700 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-sabi-blue"
          />
        </div>
        <motion.button
          onClick={onLogin}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-3 bg-sabi-blue text-sabi-white font-bold py-4 rounded-2xl shadow-lg shadow-sabi-blue/30"
        >
          <span>Login</span>
          <ArrowRight size={20} />
        </motion.button>
        <p className="text-center mt-4 text-xs text-sabi-gray">
          Don't have an account?{' '}
          <button onClick={onNavigateToSignUp} className="font-semibold text-sabi-blue underline">
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default DriverLoginScreen;