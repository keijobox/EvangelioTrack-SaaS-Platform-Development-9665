import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';

const { FiMenu, FiBell, FiSearch, FiMessageCircle, FiChevronDown, FiUser, FiSettings, FiLogOut } = FiIcons;

const Header = ({ onMenuClick }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications] = useState([
    { id: 1, message: 'New evangelist joined your community', time: '2 min ago', unread: true },
    { id: 2, message: 'Prayer meeting scheduled for tomorrow', time: '1 hour ago', unread: true },
    { id: 3, message: 'Weekly report is ready', time: '3 hours ago', unread: false },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setShowUserMenu(false);
  };

  const handleSettingsClick = () => {
    navigate('/settings');
    setShowUserMenu(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <SafeIcon icon={FiMenu} className="text-gray-600" />
          </button>

          <div className="relative">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search evangelists, events, resources..."
              className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiBell} className="text-gray-600 text-xl" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </motion.button>

          <motion.button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiMessageCircle} className="text-gray-600 text-xl" />
          </motion.button>

          <div className="relative">
            <motion.button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiUser} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-800">
                  {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'}
                </p>
                <p className="text-xs text-gray-500">
                  {user?.user_metadata?.role || 'Evangelist'}
                </p>
              </div>
              <SafeIcon icon={FiChevronDown} className="text-gray-400" />
            </motion.button>

            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              >
                <button
                  onClick={handleProfileClick}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <SafeIcon icon={FiUser} className="text-gray-500" />
                  <span>My Profile</span>
                </button>
                <button
                  onClick={handleSettingsClick}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <SafeIcon icon={FiSettings} className="text-gray-500" />
                  <span>Settings</span>
                </button>
                <hr className="my-2" />
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-red-600 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiLogOut} className="text-red-600" />
                  <span>Sign Out</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;