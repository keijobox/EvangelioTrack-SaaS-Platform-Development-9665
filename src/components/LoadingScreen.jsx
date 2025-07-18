import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiUsers, FiMapPin } = FiIcons;

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="mb-8"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <SafeIcon icon={FiHeart} className="text-4xl text-primary-500" />
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl font-bold text-white mb-4 font-display"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          EvangelioTrack
        </motion.h1>

        <motion.p 
          className="text-primary-100 text-lg mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Empowering Christian Communities Worldwide
        </motion.p>

        <motion.div 
          className="flex justify-center space-x-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div 
            className="flex items-center text-primary-100"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          >
            <SafeIcon icon={FiUsers} className="text-2xl mr-2" />
            <span>Unite</span>
          </motion.div>
          <motion.div 
            className="flex items-center text-primary-100"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            <SafeIcon icon={FiMapPin} className="text-2xl mr-2" />
            <span>Track</span>
          </motion.div>
          <motion.div 
            className="flex items-center text-primary-100"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          >
            <SafeIcon icon={FiHeart} className="text-2xl mr-2" />
            <span>Inspire</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex justify-center">
            <motion.div 
              className="w-2 h-2 bg-white rounded-full mx-1"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.div 
              className="w-2 h-2 bg-white rounded-full mx-1"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="w-2 h-2 bg-white rounded-full mx-1"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;