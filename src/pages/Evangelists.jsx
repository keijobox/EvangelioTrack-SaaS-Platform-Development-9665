import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiPlus, FiSearch, FiFilter, FiMoreVertical, FiMapPin, 
  FiPhone, FiMail, FiCalendar, FiTrendingUp, FiUser,
  FiEdit, FiTrash2, FiEye, FiUsers
} = FiIcons;

const Evangelists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const evangelists = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      status: 'active',
      location: 'Downtown Area',
      supervisor: 'Michael Johnson',
      joinDate: '2024-01-15',
      stats: {
        housesVisited: 124,
        conversions: 8,
        events: 12,
        rating: 4.8
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 234-5678',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9a4c8d6?w=150&h=150&fit=crop&crop=face',
      status: 'active',
      location: 'Residential District',
      supervisor: 'David Wilson',
      joinDate: '2024-02-20',
      stats: {
        housesVisited: 89,
        conversions: 6,
        events: 8,
        rating: 4.6
      }
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael.brown@email.com',
      phone: '+1 (555) 345-6789',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      status: 'inactive',
      location: 'Shopping Center',
      supervisor: 'Michael Johnson',
      joinDate: '2023-11-10',
      stats: {
        housesVisited: 156,
        conversions: 12,
        events: 15,
        rating: 4.9
      }
    },
    {
      id: 4,
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      phone: '+1 (555) 456-7890',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      status: 'active',
      location: 'University Campus',
      supervisor: 'David Wilson',
      joinDate: '2024-03-05',
      stats: {
        housesVisited: 67,
        conversions: 4,
        events: 6,
        rating: 4.5
      }
    }
  ];

  const filteredEvangelists = evangelists.filter(evangelist => {
    const matchesSearch = evangelist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         evangelist.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || evangelist.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50';
      case 'inactive': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800 font-display">Evangelists</h1>
          <p className="text-gray-600 mt-2">Manage your evangelization team members</p>
        </div>
        <motion.button
          onClick={() => setShowAddModal(true)}
          className="mt-4 lg:mt-0 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon icon={FiPlus} />
          <span>Add Evangelist</span>
        </motion.button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search evangelists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiFilter} className="text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            {filteredEvangelists.length} of {evangelists.length} evangelists
          </div>
        </div>
      </motion.div>

      {/* Evangelists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvangelists.map((evangelist, index) => (
          <motion.div
            key={evangelist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={evangelist.avatar}
                  alt={evangelist.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{evangelist.name}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(evangelist.status)}`}>
                    {evangelist.status}
                  </span>
                </div>
              </div>
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <SafeIcon icon={FiMoreVertical} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <SafeIcon icon={FiMail} className="mr-2" />
                {evangelist.email}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <SafeIcon icon={FiPhone} className="mr-2" />
                {evangelist.phone}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <SafeIcon icon={FiMapPin} className="mr-2" />
                {evangelist.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <SafeIcon icon={FiUser} className="mr-2" />
                Supervisor: {evangelist.supervisor}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <SafeIcon icon={FiCalendar} className="mr-2" />
                Joined: {new Date(evangelist.joinDate).toLocaleDateString()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{evangelist.stats.housesVisited}</div>
                <div className="text-xs text-gray-600">Houses Visited</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{evangelist.stats.conversions}</div>
                <div className="text-xs text-gray-600">Conversions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{evangelist.stats.events}</div>
                <div className="text-xs text-gray-600">Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{evangelist.stats.rating}</div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
            </div>

            <div className="flex space-x-2">
              <motion.button
                className="flex-1 bg-primary-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-primary-600 transition-colors flex items-center justify-center space-x-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiEye} />
                <span>View</span>
              </motion.button>
              <motion.button
                className="bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiEdit} />
              </motion.button>
              <motion.button
                className="bg-red-100 text-red-600 py-2 px-3 rounded-lg text-sm hover:bg-red-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiTrash2} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredEvangelists.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <SafeIcon icon={FiUsers} className="text-6xl text-gray-300 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No evangelists found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default Evangelists;