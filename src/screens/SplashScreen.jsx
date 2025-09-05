import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Make sure your shield logo (pic2) is in this path
import SabiLogo from '../assets/images/pic2.png';

const SplashScreen = ({ onAnimationComplete }) => {
  // This hook runs a timer when the component is first rendered
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete(); // Signal to the main App component that the splash screen is done
    }, 1500); // Display for 1.5 seconds

    return () => clearTimeout(timer); // Clean up the timer if the component is removed
  }, [onAnimationComplete]);

  return (
    <motion.div
      // Animate the entire screen fading in and out
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center h-full w-full bg-white"
    >
      <motion.img
        src={SabiLogo}
        alt="Sabi Logo"
        className="w-28 h-auto"
        // Animate the logo with a gentle "pulse" effect
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