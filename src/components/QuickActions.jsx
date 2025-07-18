import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';

const QuickActions = ({ actions }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            onClick={action.action}
            className={`${action.color} text-white p-4 rounded-lg text-center hover:opacity-90 transition-opacity`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={action.icon} className="text-2xl mb-2 mx-auto" />
            <span className="text-sm font-medium">{action.title}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickActions;