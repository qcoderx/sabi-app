import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bus, Briefcase, Store, Home } from 'lucide-react';
import { useLoader } from '../context/LoaderContext';

// Import BOTH logos now
import SabiLogo from '../assets/images/pic2.png'; // The main Sabi shield logo
import SabiShuttleLogo from '../assets/images/pic1.png'; // The Shuttle Pay wordmark logo

// Mock user data for a more personal feel
const user = {
  name: "Bayo",
  initial: "B",
};

// Animation variants for the container to orchestrate a staggered entrance
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animation variants for individual items
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};


const SabiDashboardScreen = ({ onNavigate }) => {
  const { performAction } = useLoader();

  const handleNavigate = (service) => {
    performAction(() => {
      onNavigate(service);
    });
  };
  
  const handleComingSoon = () => {
    // In a real app, this would open the "Coming Soon" modal.
    // We can wire it up if needed.
    performAction(() => {
      console.log("Feature coming soon!");
    });
  }

  return (
    <div className="flex flex-col h-full bg-sabi-gray-light overflow-y-auto">
      {/* Header */}
      <header className="px-6 pt-8 pb-4">
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-sabi-blue to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {user.initial}
                </div>
                <div>
                  <p className="text-sabi-gray text-sm">Welcome back,</p>
                  <h1 className="text-2xl font-bold text-sabi-dark -mt-1">{user.name}</h1>
                </div>
            </div>
            <img src={SabiLogo} alt="Sabi Logo" className="h-10 w-auto"/>
        </div>
      </header>

      {/* Main Content with Staggered Animations */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 px-6 mt-6"
      >
        {/* --- HERO CARD: Sabi Shuttle Pay --- */}
        <motion.div
          variants={itemVariants}
          onClick={() => handleNavigate('shuttlePay')}
          className="relative bg-gradient-to-br from-sabi-blue to-sabi-green p-6 rounded-2xl shadow-soft-lg cursor-pointer text-white overflow-hidden"
        >
          <div className="relative z-10">
            <img src={SabiShuttleLogo} alt="Sabi Shuttle Pay" className="w-32 h-auto"/>
            <p className="mt-2 max-w-[180px]">The fastest way to pay for campus shuttles.</p>
            <div className="mt-4 inline-flex items-center bg-white/20 backdrop-blur-sm font-semibold px-4 py-2 rounded-lg">
              <span>Launch Service</span>
              <ArrowRight size={16} className="ml-2"/>
            </div>
          </div>
          {/* Decorative Bus icon in the background */}
          <Bus size={120} className="absolute -right-5 -bottom-5 text-white/10 z-0" />
        </motion.div>

        {/* --- SECONDARY SERVICES --- */}
        <motion.h2 
          variants={itemVariants} 
          className="text-sabi-dark font-bold text-lg mt-8 mb-4"
        >
          Explore Other Services
        </motion.h2>
        
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
          {/* Sabi Gigs Card */}
          <div onClick={handleComingSoon} className="bg-white p-4 rounded-2xl shadow-soft space-y-2 cursor-pointer">
            <div className="p-2 inline-block bg-gray-100 rounded-lg">
              <Briefcase className="text-sabi-dark"/>
            </div>
            <h3 className="font-bold text-sabi-dark">Sabi Gigs</h3>
            <div className="text-xs bg-gray-200 text-sabi-gray font-bold px-2 py-0.5 rounded-full inline-block">Soon</div>
          </div>
          
          {/* Sabi Market Card */}
          <div onClick={handleComingSoon} className="bg-white p-4 rounded-2xl shadow-soft space-y-2 cursor-pointer">
            <div className="p-2 inline-block bg-gray-100 rounded-lg">
              <Store className="text-sabi-dark"/>
            </div>
            <h3 className="font-bold text-sabi-dark">Sabi Market</h3>
            <div className="text-xs bg-gray-200 text-sabi-gray font-bold px-2 py-0.5 rounded-full inline-block">Soon</div>
          </div>

          {/* Sabi Stay Card */}
          <div onClick={handleComingSoon} className="bg-white p-4 rounded-2xl shadow-soft space-y-2 cursor-pointer">
            <div className="p-2 inline-block bg-gray-100 rounded-lg">
              <Home className="text-sabi-dark"/>
            </div>
            <h3 className="font-bold text-sabi-dark">Sabi Stay</h3>
            <div className="text-xs bg-gray-200 text-sabi-gray font-bold px-2 py-0.5 rounded-full inline-block">Soon</div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default SabiDashboardScreen;