import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiTrendingDown } = FiIcons;

const StatsCard = ({ title, value, icon, color, bgColor, change, changeType }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${
              changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              <SafeIcon 
                icon={changeType === 'increase' ? FiTrendingUp : FiTrendingDown} 
                className="mr-1" 
              />
              <span>{change} from last week</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <SafeIcon icon={icon} className={`text-2xl ${color}`} />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;