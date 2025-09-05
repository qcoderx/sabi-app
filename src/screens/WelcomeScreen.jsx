import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet } from 'lucide-react';
import SabiShuttleLogo from '../assets/images/pic2.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const WelcomeScreen = ({ onConnect }) => {
  return (
    <div className="flex flex-col h-full w-full bg-sabi-white">
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >
          <motion.img
            variants={itemVariants}
            src={SabiShuttleLogo}
            alt="Sabi Shuttle Pay Logo"
            className="w-40 h-auto mb-8"
          />

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold text-sabi-dark tracking-tight"
          >
            Welcome to Sabi.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-sm text-sabi-gray text-lg"
          >
            The verified way for UNILAG students to pay, connect, and thrive. Sabi entails making a difference by making your lives on campus easy, with fast seamless payments with Web3
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 1.2 }}
        className="p-6 border-t border-gray-200 bg-sabi-white"
      >
        <motion.button
          onClick={onConnect}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="w-full flex items-center justify-center space-x-3 bg-sabi-blue text-sabi-white font-bold py-4 rounded-2xl shadow-lg shadow-sabi-blue/30"
        >
          <Wallet size={20} />
          <span>Connect Wallet to Begin</span>
          <ArrowRight size={20} />
        </motion.button>
        <p className="text-center mt-4 text-xs text-sabi-gray">
          Don't have a wallet?{' '}
          <a href="#" className="font-semibold text-sabi-blue underline">
            Learn how
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;