import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiInfo, FiAlertTriangle, FiX } = FiIcons;

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate real-time notifications
    const interval = setInterval(() => {
      const mockNotifications = [
        { 
          id: Date.now(), 
          type: 'success', 
          title: 'Evangelist Update', 
          message: 'John completed his evangelization route',
          duration: 5000
        },
        { 
          id: Date.now() + 1, 
          type: 'info', 
          title: 'Prayer Meeting', 
          message: 'Prayer meeting starts in 30 minutes',
          duration: 5000
        },
        { 
          id: Date.now() + 2, 
          type: 'warning', 
          title: 'Route Alert', 
          message: 'Sarah is running behind schedule',
          duration: 5000
        },
      ];
      
      const randomNotification = mockNotifications[Math.floor(Math.random() * mockNotifications.length)];
      
      if (Math.random() > 0.7) { // 30% chance every 10 seconds
        setNotifications(prev => [...prev, randomNotification]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success': return FiCheck;
      case 'warning': return FiAlertTriangle;
      default: return FiInfo;
    }
  };

  const getColors = (type) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-200 text-green-800';
      case 'warning': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default: return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getColors(notification.type)}`}
          >
            <div className="flex items-start">
              <SafeIcon 
                icon={getIcon(notification.type)} 
                className="flex-shrink-0 text-lg mr-3 mt-0.5" 
              />
              <div className="flex-1">
                <h4 className="font-medium">{notification.title}</h4>
                <p className="text-sm opacity-90">{notification.message}</p>
              </div>
              <button
                onClick={() => removeNotification(notification.id)}
                className="flex-shrink-0 ml-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                <SafeIcon icon={FiX} className="text-sm" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationSystem;