import React from 'react';
import { motion } from 'framer-motion';

// Assume you have pic2.png in 'src/assets/images/'
import SabiLogo from '../assets/images/pic2.png';

const loaderVariants = {
  animation: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const SabiLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-white bg-opacity-90">
      <motion.div
        variants={loaderVariants}
        animate="animation"
        className="relative"
      >
        <img src={SabiLogo} alt="Sabi Logo" className="w-24 h-auto" />
        <div className="absolute inset-0 bg-sabi-green rounded-full opacity-20 blur-2xl -z-10" />
      </motion.div>
      <p className="mt-4 text-sabi-gray text-sm font-medium">Securing connection...</p>
    </div>
  );
};

export default SabiLoader;