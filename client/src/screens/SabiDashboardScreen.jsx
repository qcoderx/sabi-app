import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Bus, Briefcase, Store, Home, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLoader } from '../context/LoaderContext';
import ComingSoonModal from '../components/ComingSoonModal';
import SabiShuttleLogo from '../assets/images/pic1.png';

const user = {
  name: "Bayo",
  initial: "B",
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const SabiDashboardScreen = () => {
  const navigate = useNavigate();
  const { performAction } = useLoader();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceNavigation = (service) => {
    performAction(() => {
      navigate(service);
    });
  };

  const handleComingSoon = () => setIsModalOpen(true);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && <ComingSoonModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>

      <div className="flex flex-col h-full bg-sabi-gray-light dark:bg-sabi-dark-blue overflow-y-auto">
        <header className="px-6 pt-8 pb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sabi-blue to-blue-400 rounded-full flex items-center justify-center text-sabi-white font-bold text-xl">
                {user.initial}
              </div>
              <div>
                <p className="text-sabi-gray text-sm">Welcome back,</p>
                <h1 className="text-2xl font-bold text-sabi-dark dark:text-sabi-white -mt-1">{user.name}</h1>
              </div>
            </div>
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate('/settings')} className="p-2">
              <Settings className="text-sabi-dark dark:text-sabi-white" />
            </motion.button>
          </div>
        </header>

        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 px-6 mt-6 pb-8"
        >
          <motion.div
            variants={itemVariants}
            onClick={() => handleServiceNavigation('/shuttle-pay')}
            className="relative bg-gradient-to-br from-sabi-blue to-sabi-green p-6 rounded-2xl shadow-soft-lg cursor-pointer text-sabi-white overflow-hidden"
          >
            <div className="relative z-10">
              <img src={SabiShuttleLogo} alt="Sabi Shuttle Pay" className="w-32 h-auto" />
              <p className="mt-2 max-w-[180px]">The fastest way to pay for campus shuttles.</p>
              <div className="mt-4 inline-flex items-center bg-sabi-white/20 backdrop-blur-sm font-semibold px-4 py-2 rounded-lg">
                <span>Launch Service</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
            <Bus size={120} className="absolute -right-5 -bottom-5 text-sabi-white/10 z-0" />
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-sabi-dark dark:text-sabi-white font-bold text-lg mt-8 mb-4">
            Explore Other Services
          </motion.h2>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            
            <div 
              onClick={handleComingSoon} 
              className="bg-gradient-to-br from-sabi-purple/10 to-sabi-blue/10 p-4 rounded-2xl shadow-soft space-y-2 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <div className="p-2 inline-block bg-sabi-white dark:bg-sabi-dark-blue-light rounded-lg shadow-sm">
                <Briefcase className="text-sabi-purple"/>
              </div>
              <h3 className="font-bold text-sabi-dark dark:text-sabi-white">Sabi Gigs</h3>
              <div className="text-xs bg-sabi-gray-light dark:bg-sabi-dark-blue text-sabi-gray font-bold px-2 py-0.5 rounded-full inline-block">Soon</div>
            </div>
            
            <div 
              onClick={handleComingSoon} 
              className="bg-gradient-to-br from-sabi-orange/10 to-sabi-green/10 p-4 rounded-2xl shadow-soft space-y-2 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <div className="p-2 inline-block bg-sabi-white dark:bg-sabi-dark-blue-light rounded-lg shadow-sm">
                <Store className="text-sabi-orange"/>
              </div>
              <h3 className="font-bold text-sabi-dark dark:text-sabi-white">Sabi Market</h3>
              <div className="text-xs bg-sabi-gray-light dark:bg-sabi-dark-blue text-sabi-gray font-bold px-2 py-0.5 rounded-full inline-block">Soon</div>
            </div>

            <div 
              onClick={handleComingSoon} 
              className="bg-gradient-to-br from-sabi-green/10 to-sabi-blue/10 p-4 rounded-2xl shadow-soft space-y-2 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <div className="p-2 inline-block bg-sabi-white dark:bg-sabi-dark-blue-light rounded-lg shadow-sm">
                <Home className="text-sabi-green"/>
              </div>
              <h3 className="font-bold text-sabi-dark dark:text-sabi-white">Sabi Stay</h3>
              <div className="text-xs bg-sabi-gray-light dark:bg-sabi-dark-blue text-sabi-gray font-bold px-2 py-0.5 rounded-full inline-block">Soon</div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </>
  );
};

export default SabiDashboardScreen;