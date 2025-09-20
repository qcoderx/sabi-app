import React from 'react';
import { motion } from 'framer-motion';
// --- CHANGE IS HERE ---
// Replaced the non-existent 'SteeringWheel' with 'Car'
import { GraduationCap, Car, ArrowRight } from 'lucide-react'; 
import SabiLogo from '../assets/images/pic2.png';

const RoleSelectionScreen = ({ onSelectRole }) => {
  return (
    <div className="flex flex-col h-full w-full bg-sabi-white dark:bg-sabi-dark-blue p-8 justify-between">
      <div>
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          src={SabiLogo}
          alt="Sabi Logo"
          className="w-24 h-auto mx-auto mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="text-3xl font-extrabold text-sabi-dark dark:text-sabi-white tracking-tight text-center"
        >
          How are you using Sabi?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          className="mt-2 max-w-sm text-sabi-gray text-center mx-auto"
        >
          Please select your role to continue.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, staggerChildren: 0.2 } }}
        className="space-y-6"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectRole('student')}
          className="flex items-center p-6 bg-sabi-gray-light dark:bg-sabi-dark-blue-light border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer"
        >
          <GraduationCap size={40} className="text-sabi-blue" />
          <div className="ml-4 flex-1">
            <h2 className="font-bold text-lg text-sabi-dark dark:text-sabi-white">I'm a Student</h2>
            <p className="text-sabi-gray text-sm">Pay for shuttles, gigs, and more.</p>
          </div>
          <ArrowRight className="text-sabi-gray" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectRole('driver')}
          className="flex items-center p-6 bg-sabi-gray-light dark:bg-sabi-dark-blue-light border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer"
        >
          {/* --- AND CHANGE IS HERE --- */}
          <Car size={40} className="text-sabi-green" /> 
          <div className="ml-4 flex-1">
            <h2 className="font-bold text-lg text-sabi-dark dark:text-sabi-white">I'm a Driver</h2>
            <p className="text-sabi-gray text-sm">Accept payments and track earnings.</p>
          </div>
          <ArrowRight className="text-sabi-gray" />
        </motion.div>
      </motion.div>
      
      <div />
    </div>
  );
};

export default RoleSelectionScreen;