import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Wallet, Users, QrCode, Settings, BarChart3, ChevronDown } from 'lucide-react';
import SabiLogo from '../../assets/images/pic2.png';

const mockDriverData = {
  name: 'Mr. Ade',
  initial: 'A',
  balance: 15750.00,
  todayRiders: 105,
  dailyData: [
    { day: 'Mon', riders: 95 },
    { day: 'Tue', riders: 110 },
    { day: 'Wed', riders: 125 },
    { day: 'Thu', riders: 115 },
    { day: 'Fri', riders: 105 },
  ],
};

const DriverDashboardScreen = ({ onNavigate }) => {
  const maxRiders = Math.max(...mockDriverData.dailyData.map(d => d.riders), 1);

  return (
    <div className="flex flex-col h-full bg-sabi-gray-light dark:bg-sabi-dark-blue overflow-y-auto">
      <header className="px-6 pt-8 pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-sabi-green to-green-400 rounded-full flex items-center justify-center text-sabi-white font-bold text-xl">
              {mockDriverData.initial}
            </div>
            <div>
              <p className="text-sabi-gray text-sm">Welcome back,</p>
              <h1 className="text-2xl font-bold text-sabi-dark dark:text-sabi-white -mt-1">{mockDriverData.name}</h1>
            </div>
          </div>
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => onNavigate('settings')} className="p-2">
            <Settings className="text-sabi-dark dark:text-sabi-white" />
          </motion.button>
        </div>
      </header>

      <main className="flex-1 px-6 mt-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 gap-4 text-sabi-white"
        >
          <div className="bg-gradient-to-br from-sabi-blue to-blue-600 p-4 rounded-2xl shadow-soft">
            <div className="flex items-center space-x-2">
              <Wallet size={18} />
              <h3 className="font-semibold">Balance</h3>
            </div>
            <p className="text-3xl font-bold mt-2">₦{mockDriverData.balance.toLocaleString()}</p>
          </div>
          <div className="bg-gradient-to-br from-sabi-green to-green-600 p-4 rounded-2xl shadow-soft">
            <div className="flex items-center space-x-2">
              <Users size={18} />
              <h3 className="font-semibold">Today's Riders</h3>
            </div>
            <p className="text-3xl font-bold mt-2">{mockDriverData.todayRiders}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="mt-8"
        >
          <h2 className="text-lg font-bold text-sabi-dark dark:text-sabi-white mb-4 flex items-center">
            <BarChart3 size={20} className="mr-2 text-sabi-blue" />
            Weekly Ridership
          </h2>
          <div className="p-4 bg-sabi-white dark:bg-sabi-dark-blue-light rounded-2xl shadow-soft">
            <div className="flex justify-between items-end h-32 space-x-2">
              {mockDriverData.dailyData.map(data => (
                <div key={data.day} className="flex-1 flex flex-col items-center justify-end">
                  <motion.div
                    className="w-full bg-gradient-to-t from-sabi-blue to-sabi-green rounded-md"
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.riders / maxRiders) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  />
                  <p className="mt-2 text-xs font-bold text-sabi-gray">{data.day}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          className="mt-8"
        >
          <motion.button
            onClick={() => onNavigate('qrCode')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center space-x-3 bg-sabi-dark dark:bg-sabi-blue text-sabi-white font-bold py-4 rounded-2xl shadow-lg"
          >
            <QrCode size={24} />
            <span>Show My QR Code</span>
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
};

export default DriverDashboardScreen;