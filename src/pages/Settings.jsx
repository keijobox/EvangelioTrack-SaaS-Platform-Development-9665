import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiUser, FiBell, FiLock, FiGlobe, FiUsers, FiCreditCard, 
  FiShield, FiSave, FiCheck, FiPlus, FiTrash2, FiEdit, FiDownload
} = FiIcons;

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: true,
    sms: false,
    emailDigest: 'daily',
  });

  const [profileData, setProfileData] = useState({
    name: 'John Evangelist',
    email: 'john@evangeliotrack.com',
    phone: '+1 (555) 123-4567',
    role: 'Community Admin',
    community: 'Grace Community Church',
    bio: 'Passionate about evangelism and community outreach. Leading a team of dedicated evangelists to spread the Gospel.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  });

  const handleNotificationChange = (key, value) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleProfileChange = (key, value) => {
    setProfileData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log('Saving settings...');
    // Show a success toast or message
  };

  const integrations = [
    { id: 1, name: 'Google Calendar', connected: true, icon: FiCalendar },
    { id: 2, name: 'Jitsi Meet', connected: true, icon: FiVideo },
    { id: 3, name: 'Mailchimp', connected: false, icon: FiMail },
    { id: 4, name: 'Stripe', connected: false, icon: FiCreditCard },
  ];

  const subscriptionPlans = [
    { 
      id: 'free', 
      name: 'Free', 
      price: '$0', 
      features: [
        'Basic evangelism tracking',
        'Up to 5 evangelists',
        'Limited reporting',
        'Community forum access'
      ],
      current: false
    },
    { 
      id: 'pro', 
      name: 'Pro', 
      price: '$29/month', 
      features: [
        'Advanced tracking & analytics',
        'Up to 50 evangelists',
        'Full reporting suite',
        'Priority support',
        'Custom training materials'
      ],
      current: true
    },
    { 
      id: 'business', 
      name: 'Business', 
      price: '$99/month', 
      features: [
        'Unlimited evangelists',
        'White-labeling',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced AI analytics'
      ],
      current: false
    }
  ];

  const teamMembers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Supervisor', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9a4c8d6?w=150&h=150&fit=crop&crop=face' },
    { id: 2, name: 'Michael Brown', email: 'michael@example.com', role: 'Evangelist', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' },
    { id: 3, name: 'Emma Davis', email: 'emma@example.com', role: 'Evangelist', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800 font-display">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account and preferences</p>
        </div>
        <motion.button
          onClick={handleSave}
          className="mt-4 lg:mt-0 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon icon={FiSave} />
          <span>Save Changes</span>
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <nav className="space-y-2">
            {[
              { id: 'profile', label: 'Profile Settings', icon: FiUser },
              { id: 'notifications', label: 'Notifications', icon: FiBell },
              { id: 'security', label: 'Security', icon: FiLock },
              { id: 'team', label: 'Team Members', icon: FiUsers },
              { id: 'integrations', label: 'Integrations', icon: FiGlobe },
              { id: 'subscription', label: 'Subscription', icon: FiCreditCard },
              { id: 'privacy', label: 'Privacy', icon: FiShield },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-primary-50 text-primary-600'
                    : 'hover:bg-gray-50 text-gray-600'
                }`}
              >
                <SafeIcon icon={item.icon} className="text-lg" />
                <span>{item.label}</span>
                {activeTab === item.id && (
                  <motion.div className="ml-auto w-2 h-2 bg-primary-500 rounded-full" layoutId="settingsIndicator" />
                )}
              </button>
            ))}
          </nav>
        </motion.div>

        {/* Settings Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-3 bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Profile Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="flex flex-col items-center">
                    <img
                      src={profileData.avatar}
                      alt={profileData.name}
                      className="w-32 h-32 rounded-full mb-4"
                    />
                    <button className="text-sm text-primary-600 font-medium">
                      Change Avatar
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleProfileChange('name', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Community
                    </label>
                    <input
                      type="text"
                      value={profileData.community}
                      onChange={(e) => handleProfileChange('community', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => handleProfileChange('bio', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Notification Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Notification Channels</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Email Notifications</p>
                        <p className="text-sm text-gray-600">Receive notifications via email</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.email}
                          onChange={() => handleNotificationChange('email', !notificationSettings.email)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Push Notifications</p>
                        <p className="text-sm text-gray-600">Receive notifications on your device</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.push}
                          onChange={() => handleNotificationChange('push', !notificationSettings.push)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">SMS Notifications</p>
                        <p className="text-sm text-gray-600">Receive notifications via text message</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.sms}
                          onChange={() => handleNotificationChange('sms', !notificationSettings.sms)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Email Digest</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="digest-daily"
                        type="radio"
                        checked={notificationSettings.emailDigest === 'daily'}
                        onChange={() => handleNotificationChange('emailDigest', 'daily')}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label htmlFor="digest-daily" className="ml-2 block text-sm text-gray-700">
                        Daily Digest
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="digest-weekly"
                        type="radio"
                        checked={notificationSettings.emailDigest === 'weekly'}
                        onChange={() => handleNotificationChange('emailDigest', 'weekly')}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label htmlFor="digest-weekly" className="ml-2 block text-sm text-gray-700">
                        Weekly Digest
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="digest-none"
                        type="radio"
                        checked={notificationSettings.emailDigest === 'none'}
                        onChange={() => handleNotificationChange('emailDigest', 'none')}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label htmlFor="digest-none" className="ml-2 block text-sm text-gray-700">
                        No Digest
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Team Members</h2>
                <motion.button
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiPlus} />
                  <span>Add Member</span>
                </motion.button>
              </div>

              <div className="space-y-4">
                {teamMembers.map(member => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">{member.name}</h4>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm text-gray-600">{member.email}</p>
                          <span className="px-2 py-0.5 bg-primary-100 text-primary-800 text-xs rounded-full">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <SafeIcon icon={FiEdit} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                        <SafeIcon icon={FiTrash2} className="text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'subscription' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Subscription</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {subscriptionPlans.map(plan => (
                  <div
                    key={plan.id}
                    className={`border-2 rounded-xl p-6 ${
                      plan.current 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>
                      <p className="text-2xl font-bold text-primary-600 mt-2">{plan.price}</p>
                      {plan.current && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                          <SafeIcon icon={FiCheck} className="mr-1" />
                          Current Plan
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <SafeIcon icon={FiCheck} className="mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-2 rounded-lg font-medium ${
                        plan.current
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                      }`}
                      disabled={plan.current}
                    >
                      {plan.current ? 'Current Plan' : 'Upgrade'}
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800">Billing Information</h4>
                    <p className="text-sm text-gray-600">Next billing date: July 15, 2024</p>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    View Billing History
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;

// Import the missing FiCalendar, FiVideo, and FiMail icons
const { FiCalendar, FiVideo, FiMail } = FiIcons;