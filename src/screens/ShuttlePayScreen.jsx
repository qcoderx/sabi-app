import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bell, ScanLine, Wallet, Send, BusFront } from 'lucide-react';
import { useLoader } from '../context/LoaderContext';
import SabiShuttleLogo from '../assets/images/pic1.png';

// --- Mock Data & Helpers (Unchanged) ---
const mockTransactions = [
  // Thursday, September 4, 2025 (Today)
  { id: 1, shuttle: 'Jaja Hall to Main Gate', amount: 100, date: new Date('2025-09-04T08:30:00') },
  { id: 2, shuttle: 'CITS to New Hall', amount: 50, date: new Date('2025-09-04T09:15:00') },
  // Wednesday, September 3, 2025 (Yesterday)
  { id: 3, shuttle: 'Gate to DLI', amount: 100, date: new Date('2025-09-03T14:00:00') },
  { id: 4, shuttle: 'Amphitheatre to Highrise', amount: 50, date: new Date('2025-09-03T16:45:00') },
  // Tuesday, September 2, 2025
  { id: 5, shuttle: 'El-Kanemi to CITS', amount: 50, date: new Date('2025-09-02T11:20:00') },
];
const mockBalance = 2500.50;

const groupTransactionsByDate = (transactions) => {
    const groups = transactions.reduce((groups, tx) => {
        const date = tx.date.toDateString();
        if (!groups[date]) { groups[date] = []; }
        groups[date].push(tx);
        return groups;
    }, {});
    return Object.entries(groups).map(([date, transactions]) => ({ date: new Date(date), transactions }));
};
const formatDateHeader = (date) => {
    const today = new Date('2025-09-04'); // Using current date for accurate 'Today'/'Yesterday'
    const yesterday = new Date('2025-09-03');
    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
};

const ShuttlePayScreen = ({ onBack }) => {
  const { performAction } = useLoader();
  const groupedTransactions = groupTransactionsByDate(mockTransactions);

  const handleActionClick = (actionName) => {
    performAction(() => {
      console.log(`${actionName} action triggered...`);
    });
  };

  return (
    <div className="flex flex-col h-full bg-sabi-gray-light">
      {/* --- VIBRANT HERO SECTION (ADJUSTED) --- */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        // REDUCED bottom padding from pb-10 to pb-8
        className="bg-gradient-to-br from-sabi-blue to-sabi-green rounded-b-3xl px-6 pt-8 pb-8 text-white shadow-lg relative z-20"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <motion.button whileTap={{ scale: 0.9 }} onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft size={22} />
          </motion.button>
          {/* INCREASED logo size from h-8 to h-10 */}
          <img src={SabiShuttleLogo} alt="Sabi Shuttle Pay" className="h-10 w-auto" />
          <motion.button whileTap={{ scale: 0.9 }} className="p-2 -mr-2">
            <Bell size={22} />
          </motion.button>
        </div>
        
        {/* Balance */}
        <div className="text-center mt-4"> {/* REDUCED top margin from mt-6 to mt-4 */}
          <p className="text-sm opacity-80">Your Balance</p>
          {/* REDUCED font size from 5xl to 4xl */}
          <p className="text-4xl font-bold tracking-tight">
            ₦{mockBalance.toLocaleString('en-NG')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex justify-center space-x-4"> {/* REDUCED top margin from mt-6 to mt-5 */}
          <motion.div 
            whileTap={{ scale: 0.95 }}
            onClick={() => handleActionClick('Add Money')} 
            className="flex flex-col items-center space-y-2 cursor-pointer w-24 text-center"
          >
            {/* REDUCED button size from 16x16 to 14x14 */}
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Wallet size={24} /> {/* Icon size kept for clarity */}
            </div>
            <p className="text-xs font-semibold">Add Money</p>
          </motion.div>
          <motion.div 
            whileTap={{ scale: 0.95 }}
            onClick={() => handleActionClick('Send Pass')} 
            className="flex flex-col items-center space-y-2 cursor-pointer w-24 text-center"
          >
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Send size={24} />
            </div>
            <p className="text-xs font-semibold">Send Pass</p>
          </motion.div>
        </div>
      </motion.div>

      {/* --- SCROLLABLE TRIP HISTORY --- */}
      <main className="flex-1 overflow-y-auto">
        <div className="bg-white rounded-t-3xl -mt-6 relative z-10 pt-6 px-6">
          <h2 className="text-lg font-bold text-sabi-dark mb-4">Recent Trips</h2>
          <div className="space-y-4">
            {groupedTransactions.map(({ date, transactions }) => (
              <div key={date.toString()}>
                <h3 className="text-sm font-semibold text-sabi-gray mb-3">{formatDateHeader(date)}</h3>
                <div className="space-y-2">
                  {transactions.map((tx) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center p-4 bg-sabi-gray-light rounded-xl"
                    >
                      <div className="p-3 bg-white rounded-full shadow-soft">
                        <BusFront size={20} className="text-sabi-blue" />
                      </div>
                      <div className="flex-1 ml-4">
                        <p className="font-semibold text-sabi-dark">{tx.shuttle}</p>
                        <p className="text-xs text-sabi-gray">{tx.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                      </div>
                      <p className="font-bold text-sabi-dark text-base">-₦{tx.amount}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="h-6" /> 
        </div>
      </main>

      {/* --- FOOTER CTA --- */}
      <footer className="p-6 bg-white border-t border-gray-100 relative z-20">
        <motion.button
          onClick={() => handleActionClick('Scan to Pay')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-3 bg-sabi-green text-white font-bold py-4 rounded-2xl shadow-lg shadow-sabi-green/40"
        >
          <ScanLine size={24} />
          <span>Scan to Pay</span>
        </motion.button>
      </footer>
    </div>
  );
};

export default ShuttlePayScreen;