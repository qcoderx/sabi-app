import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet } from 'lucide-react';
import SabiShuttleLogo from '../assets/images/pic2.png';

// Animation variants for the container to orchestrate staggered animations
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

// Animation variants for individual child elements
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
    <div className="flex flex-col h-full w-full bg-white">
      <div className="flex-1 flex items-center justify-center p-8">
        {/* Animated content container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >
          {/* Logo */}
          <motion.img
            variants={itemVariants}
            src={SabiShuttleLogo}
            alt="Sabi Shuttle Pay Logo"
            className="w-40 h-auto mb-8"
          />

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold text-sabi-dark tracking-tight"
          >
            Welcome to Sabi.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-sm text-sabi-gray text-lg"
          >
            The verified way for UNILAG students to pay, connect, and thrive. Sabi entails making a difference by making your lives on campus easy, with fast seamless payments with Web3
          </motion.p>
        </motion.div>
      </div>

      {/* Footer with Call to Action */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 1.2 }}
        className="p-6 border-t border-gray-200 bg-white"
      >
        <motion.button
          onClick={onConnect}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="w-full flex items-center justify-center space-x-3 bg-sabi-blue text-white font-bold py-4 rounded-2xl shadow-lg shadow-sabi-blue/30"
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