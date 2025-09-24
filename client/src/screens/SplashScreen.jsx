import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SabiLogo from '../assets/images/pic2.png';

const SplashScreen = ({ onAnimationComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center h-full w-full bg-sabi-white"
    >
      <motion.img
        src={SabiLogo}
        alt="Sabi Logo"
        className="w-28 h-auto"
        initial={{ scale: 0.95, opacity: 0.8 }}
        animate={{ scale: [1, 1.03, 1], opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

export default SplashScreen;