import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiHome, FiUsers, FiMapPin, FiCalendar, FiBookOpen, FiMessageCircle, 
  FiAward, FiBarChart3, FiSettings, FiX, FiHeart, FiUser 
} = FiIcons;

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/dashboard', icon: FiHome, label: 'Dashboard', color: 'text-primary-500' },
    { path: '/profile', icon: FiUser, label: 'My Profile', color: 'text-indigo-500' },
    { path: '/evangelists', icon: FiUsers, label: 'Evangelists', color: 'text-green-500' },
    { path: '/tracking', icon: FiMapPin, label: 'Real-time Tracking', color: 'text-red-500' },
    { path: '/events', icon: FiCalendar, label: 'Events', color: 'text-purple-500' },
    { path: '/resources', icon: FiBookOpen, label: 'Resources', color: 'text-blue-500' },
    { path: '/messages', icon: FiMessageCircle, label: 'Messages', color: 'text-yellow-500' },
    { path: '/training', icon: FiAward, label: 'Training', color: 'text-indigo-500' },
    { path: '/analytics', icon: FiBarChart3, label: 'Analytics', color: 'text-pink-500' },
    { path: '/settings', icon: FiSettings, label: 'Settings', color: 'text-gray-500' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <SafeIcon icon={FiHeart} className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 font-display">EvangelioTrack</h2>
                <p className="text-xs text-gray-500">Evangelization Platform</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <SafeIcon icon={FiX} className="text-gray-500" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-50 text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SafeIcon 
                    icon={item.icon} 
                    className={`text-xl ${isActive ? 'text-primary-500' : item.color}`} 
                  />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="ml-auto w-2 h-2 bg-primary-500 rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-4 text-white">
              <h3 className="font-semibold mb-2">Upgrade to Pro</h3>
              <p className="text-sm text-primary-100 mb-3">
                Unlock advanced features and analytics
              </p>
              <motion.button
                className="w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;