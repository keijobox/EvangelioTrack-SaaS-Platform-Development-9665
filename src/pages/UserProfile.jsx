import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';

const { 
  FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiEdit3, 
  FiSave, FiX, FiCamera, FiAward, FiTrendingUp, FiUsers, FiHeart 
} = FiIcons;

const UserProfile = () => {
  const { user, updateProfile, getUserProfile } = useAuth();
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    bio: '',
    community: '',
    role: ''
  });

  useEffect(() => {
    loadProfile();
  }, [user]);

  const loadProfile = async () => {
    if (user) {
      const { data, error } = await getUserProfile();
      if (data) {
        setProfile(data);
        setFormData({
          full_name: data.full_name || '',
          phone: data.phone || '',
          bio: data.bio || '',
          community: data.community || '',
          role: data.role || ''
        });
      }
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const { error } = await updateProfile(formData);
      if (!error) {
        setEditing(false);
        loadProfile();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setFormData({
      full_name: profile?.full_name || '',
      phone: profile?.phone || '',
      bio: profile?.bio || '',
      community: profile?.community || '',
      role: profile?.role || ''
    });
  };

  const stats = [
    { label: 'Houses Visited', value: '156', icon: FiMapPin, color: 'text-blue-600' },
    { label: 'Conversions', value: '23', icon: FiHeart, color: 'text-red-600' },
    { label: 'Events Attended', value: '42', icon: FiCalendar, color: 'text-green-600' },
    { label: 'Training Hours', value: '87', icon: FiAward, color: 'text-purple-600' }
  ];

  const achievements = [
    { title: 'First Convert', description: 'Led your first person to Christ', date: '2024-01-15', earned: true },
    { title: 'Faithful Evangelist', description: 'Completed 50 house visits', date: '2024-02-20', earned: true },
    { title: 'Community Builder', description: 'Helped organize 5 events', date: '2024-03-10', earned: true },
    { title: 'Mentor', description: 'Trained 3 new evangelists', date: null, earned: false }
  ];

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                {profile.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt={profile.full_name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <SafeIcon icon={FiUser} className="text-3xl text-white" />
                )}
              </div>
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <SafeIcon icon={FiCamera} className="text-gray-600" />
              </button>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{profile.full_name || 'User'}</h1>
              <p className="text-lg text-gray-600 capitalize">{profile.role || 'Evangelist'}</p>
              <p className="text-gray-500">{profile.community}</p>
              <p className="text-sm text-gray-400">
                Member since {new Date(profile.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            {!editing ? (
              <motion.button
                onClick={() => setEditing(true)}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiEdit3} />
                <span>Edit Profile</span>
              </motion.button>
            ) : (
              <div className="flex space-x-3">
                <motion.button
                  onClick={handleSave}
                  disabled={loading}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiSave} />
                  <span>{loading ? 'Saving...' : 'Save'}</span>
                </motion.button>
                <motion.button
                  onClick={handleCancel}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiX} />
                  <span>Cancel</span>
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center"
          >
            <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mx-auto mb-4`}>
              <SafeIcon icon={stat.icon} className={`text-2xl ${stat.color}`} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Profile Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              {editing ? (
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUser} className="text-gray-400" />
                  <span className="text-gray-800">{profile.full_name || 'Not provided'}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="text-gray-400" />
                <span className="text-gray-800">{profile.email}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              {editing ? (
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiPhone} className="text-gray-400" />
                  <span className="text-gray-800">{profile.phone || 'Not provided'}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Community</label>
              {editing ? (
                <input
                  type="text"
                  value={formData.community}
                  onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiMapPin} className="text-gray-400" />
                  <span className="text-gray-800">{profile.community || 'Not provided'}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              {editing ? (
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-gray-800">{profile.bio || 'No bio provided'}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Achievements</h2>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  achievement.earned 
                    ? 'border-yellow-300 bg-yellow-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}>
                    <SafeIcon 
                      icon={FiAward} 
                      className={`text-lg ${achievement.earned ? 'text-white' : 'text-gray-600'}`} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    {achievement.earned && achievement.date && (
                      <p className="text-xs text-green-600 mt-1">
                        Earned on {new Date(achievement.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserProfile;