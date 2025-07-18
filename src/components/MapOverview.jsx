import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiUsers, FiHeart, FiNavigation } = FiIcons;

const MapOverview = () => {
  const activeRoutes = [
    { id: 1, evangelist: 'John Smith', location: 'Downtown Area', progress: 75, status: 'active' },
    { id: 2, evangelist: 'Sarah Johnson', location: 'Residential District', progress: 45, status: 'active' },
    { id: 3, evangelist: 'Michael Brown', location: 'Shopping Center', progress: 90, status: 'completed' },
    { id: 4, evangelist: 'Emma Davis', location: 'University Campus', progress: 30, status: 'active' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50';
      case 'completed': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Real-time Tracking</h3>
        <motion.button
          className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon icon={FiMapPin} />
          <span>View Map</span>
        </motion.button>
      </div>

      <div className="space-y-4">
        {activeRoutes.map((route, index) => (
          <motion.div
            key={route.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiUsers} className="text-primary-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{route.evangelist}</h4>
                <p className="text-sm text-gray-600 flex items-center">
                  <SafeIcon icon={FiMapPin} className="mr-1" />
                  {route.location}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-800">{route.progress}%</div>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${route.progress}%` }}
                  />
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(route.status)}`}>
                {route.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SafeIcon icon={FiHeart} className="text-primary-600 text-xl" />
            <div>
              <h4 className="font-medium text-gray-800">Today's Impact</h4>
              <p className="text-sm text-gray-600">Houses visited: 45 | Conversations: 28</p>
            </div>
          </div>
          <SafeIcon icon={FiNavigation} className="text-primary-600 text-xl" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MapOverview;