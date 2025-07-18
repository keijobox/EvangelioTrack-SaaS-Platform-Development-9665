import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';

const ActivityFeed = ({ activities }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`p-2 rounded-lg bg-gray-50`}>
              <SafeIcon icon={activity.icon} className={`text-lg ${activity.color}`} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="w-full mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium"
        whileHover={{ scale: 1.02 }}
      >
        View All Activity
      </motion.button>
    </motion.div>
  );
};

export default ActivityFeed;