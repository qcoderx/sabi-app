import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoader } from '../context/LoaderContext';
import SabiLogo from '../assets/images/pic2.png';

const ActionLoader = () => {
  const { isLoading } = useLoader();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-sabi-white bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            className="w-24 h-auto"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0 0 0)' }}
            transition={{ duration: 0.6, ease: 'circOut' }}
          >
            <img src={SabiLogo} alt="Sabi Loader" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ActionLoader;