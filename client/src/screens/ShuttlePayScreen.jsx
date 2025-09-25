import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bell, ScanLine, Wallet, Send, BusFront, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLoader } from '../context/LoaderContext';
import SabiShuttleLogo from '../assets/images/pic1.png';

// --- Mock Data ---
const mockTransactions = [
  { id: 1, shuttle: 'Jaja Hall to Main Gate', amount: 100, date: new Date('2025-09-04T08:30:00') },
  { id: 2, shuttle: 'CITS to New Hall', amount: 50, date: new Date('2025-09-04T09:15:00') },
  { id: 3, shuttle: 'Gate to DLI', amount: 100, date: new Date('2025-09-03T14:00:00') },
  { id: 4, shuttle: 'Amphitheatre to Highrise', amount: 50, date: new Date('2025-09-03T16:45:00') },
];
const mockBalance = 2500.50;

// --- Helper Functions ---
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
    const today = new Date('2025-09-05'); 
    const yesterday = new Date('2025-09-04');
    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
};

const getSpendingByDay = (transactions) => {
  const days = {'Sun': 0, 'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0};
  transactions.forEach(tx => {
    const day = tx.date.toLocaleDateString('en-US', { weekday: 'short' });
    days[day] += tx.amount;
  });
  return days;
};

const ShuttlePayScreen = () => {
  const navigate = useNavigate();
  const { performAction } = useLoader();
  const groupedTransactions = groupTransactionsByDate(mockTransactions);
  const spendingData = getSpendingByDay(mockTransactions);
  const maxSpending = Math.max(...Object.values(spendingData), 1);

  const handleActionClick = (actionName) => {
    performAction(() => {
      console.log(`${actionName} action triggered...`);
    });
  };

  const EmptyState = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20 px-6"
    >
      <div className="inline-block p-5 bg-sabi-gray-light dark:bg-sabi-dark-blue rounded-full">
        <BusFront size={48} className="text-sabi-gray" />
      </div>
      <h3 className="mt-4 text-xl font-bold text-sabi-dark dark:text-sabi-white">No Trips Yet</h3>
      <p className="mt-1 text-sabi-gray">Your recent shuttle trips will appear here.</p>
    </motion.div>
  );

  const SpendingSnapshot = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-6"
    >
      <h2 className="text-lg font-bold text-sabi-dark dark:text-sabi-white mb-4 flex items-center">
        <BarChart3 size={20} className="mr-2 text-sabi-blue" />
        Spending Snapshot
      </h2>
      <div className="p-4 bg-sabi-gray-light dark:bg-sabi-dark-blue rounded-2xl">
        <div className="flex justify-between items-end h-32 space-x-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
            <div key={day} className="flex-1 flex flex-col items-center justify-end">
              <motion.div
                className="w-full bg-gradient-to-t from-sabi-blue to-sabi-green rounded-md"
                initial={{ height: 0 }}
                animate={{ height: `${(spendingData[day] / maxSpending) * 100}%` }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              />
              <p className="mt-2 text-xs font-bold text-sabi-gray">{day}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col h-full w-full bg-sabi-gray-light dark:bg-sabi-dark-blue overflow-hidden">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-br from-sabi-blue to-sabi-green rounded-b-3xl px-6 pt-8 pb-8 text-sabi-white shadow-lg relative z-20 flex-shrink-0"
      >
        <div className="flex justify-between items-center">
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate(-1)} className="p-2 -ml-2"><ArrowLeft size={22} /></motion.button>
          <img src={SabiShuttleLogo} alt="Sabi Shuttle Pay" className="h-10 w-auto" />
          <motion.button whileTap={{ scale: 0.9 }} className="p-2 -mr-2"><Bell size={22} /></motion.button>
        </div>
        <div className="text-center mt-4"><p className="text-sm opacity-80">Your Balance</p><p className="text-4xl font-bold tracking-tight">₦{mockBalance.toLocaleString('en-NG')}</p></div>
        <div className="mt-5 flex justify-center space-x-4">
          <motion.div whileTap={{ scale: 0.95 }} onClick={() => handleActionClick('Add Money')} className="flex flex-col items-center space-y-2 cursor-pointer w-24 text-center"><div className="w-14 h-14 bg-sabi-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"><Wallet size={24} /></div><p className="text-xs font-semibold">Add Money</p></motion.div>
          <motion.div whileTap={{ scale: 0.95 }} onClick={() => handleActionClick('Send Pass')} className="flex flex-col items-center space-y-2 cursor-pointer w-24 text-center"><div className="w-14 h-14 bg-sabi-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"><Send size={24} /></div><p className="text-xs font-semibold">Send Pass</p></motion.div>
        </div>
      </motion.div>

      <main className="flex-1 overflow-y-auto min-h-0">
        <div className="bg-sabi-white dark:bg-sabi-dark-blue-light rounded-t-3xl -mt-6 relative z-10 pt-6 px-6">
          {groupedTransactions.length > 0 ? (
            <>
              <SpendingSnapshot />
              <h2 className="text-lg font-bold text-sabi-dark dark:text-sabi-white mb-4">Recent Trips</h2>
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
                          transition={{ duration: 0.5, delay: 0.1 * tx.id }}
                          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                          className="flex items-center p-3 bg-sabi-gray-light dark:bg-sabi-dark-blue rounded-xl cursor-pointer"
                        >
                          <div className="p-3 bg-sabi-white dark:bg-sabi-dark-blue-light rounded-full shadow-soft"><BusFront size={20} className="text-sabi-blue" /></div>
                          <div className="flex-1 ml-4">
                            <p className="font-semibold text-sabi-dark dark:text-sabi-white">{tx.shuttle}</p>
                            <p className="text-xs text-sabi-gray">{tx.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                          </div>
                          <p className="font-bold text-sabi-dark dark:text-sabi-white text-base">-₦{tx.amount}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <EmptyState />
          )}
          <div className="h-6" /> 
        </div>
      </main>

      <footer className="p-6 bg-sabi-white dark:bg-sabi-dark-blue-light border-t border-gray-100 dark:border-gray-800 relative z-20 flex-shrink-0">
        <motion.button
          onClick={() => handleActionClick('Scan to Pay')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-3 bg-sabi-green text-sabi-white font-bold py-4 rounded-2xl shadow-lg shadow-sabi-green/40"
        >
          <ScanLine size={24} />
          <span>Scan to Pay</span>
        </motion.button>
      </footer>
    </div>
  );
};

export default ShuttlePayScreen;