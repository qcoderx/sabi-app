import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Printer, Share2 } from 'lucide-react';
import SabiShuttleLogo from '../../assets/images/pic1.png';
import QRCodeImage from '../../assets/images/qr-code.png'; // Placeholder QR code

const QRCodeScreen = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col h-full w-full bg-sabi-gray-light dark:bg-sabi-dark-blue p-6 printable-area">
      <div className="flex justify-between items-center no-print">
        <motion.button whileTap={{ scale: 0.9 }} onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft size={22} className="text-sabi-dark dark:text-sabi-white" />
        </motion.button>
        <h1 className="text-lg font-bold text-sabi-dark dark:text-sabi-white">Your QR Code</h1>
        <div />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="p-8 bg-sabi-white dark:bg-sabi-dark-blue-light rounded-3xl shadow-soft-lg"
        >
          <img src={SabiShuttleLogo} alt="Sabi Shuttle Pay" className="w-32 h-auto mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-sabi-dark dark:text-sabi-white">UNILAG Shuttle</h2>
          <p className="text-sabi-gray mb-6">Bus #042</p>
          <img src={QRCodeImage} alt="Payment QR Code" className="w-56 h-56 mx-auto rounded-xl" />
          <p className="mt-6 font-semibold text-sabi-dark dark:text-sabi-white">Scan to Pay</p>
        </motion.div>
        <p className="mt-4 text-sabi-gray max-w-xs">
          Display this code inside your shuttle for students to scan and pay easily.
        </p>
      </div>

      <div className="flex space-x-4 no-print">
        <motion.button
          onClick={handlePrint}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center space-x-2 bg-sabi-blue text-sabi-white font-bold py-3 rounded-xl"
        >
          <Printer size={20} />
          <span>Print</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center space-x-2 bg-sabi-gray-light dark:bg-sabi-dark-blue-light text-sabi-dark dark:text-sabi-white font-bold py-3 rounded-xl"
        >
          <Share2 size={20} />
          <span>Share</span>
        </motion.button>
      </div>
      <style>{`
        @media print {
          .no-print { display: none; }
          .printable-area { padding: 0; }
        }
      `}</style>
    </div>
  );
};

export default QRCodeScreen;