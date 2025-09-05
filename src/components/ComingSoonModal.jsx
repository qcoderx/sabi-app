import React from 'react';
import { motion } from 'framer-motion';
import { X, Rocket } from 'lucide-react';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.8 },
};

const ComingSoonModal = ({ onClose }) => {
  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
      className="fixed inset-0 bg-sabi-black bg-opacity-50 flex items-center justify-center z-50 p-6"
    >
      <motion.div
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-sabi-white rounded-2xl w-full max-w-sm p-8 text-center"
      >
        <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-sabi-gray-light"
        >
            <X size={18} className="text-sabi-gray" />
        </motion.button>

        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sabi-green to-green-400 rounded-full flex items-center justify-center">
            <Rocket size={40} className="text-sabi-white"/>
        </div>

        <h3 className="text-2xl font-bold mt-6 text-sabi-dark">Coming Soon!</h3>
        <p className="mt-2 text-sabi-gray">
            We're working hard to bring this feature to you. It'll be worth the wait!
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="w-full mt-8 bg-sabi-green text-sabi-white font-bold py-3 rounded-xl"
        >
          Got It
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ComingSoonModal;