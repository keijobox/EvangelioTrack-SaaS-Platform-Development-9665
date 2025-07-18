import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const { 
  FiBarChart2, FiTrendingUp, FiCalendar, FiDownload, 
  FiFilter, FiRefreshCw, FiMapPin, FiUsers, FiHeart 
} = FiIcons;

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  // Sample data
  const evangelismData = [
    { month: 'Jan', evangelists: 12, houses: 240, conversions: 15 },
    { month: 'Feb', evangelists: 15, houses: 310, conversions: 21 },
    { month: 'Mar', evangelists: 18, houses: 370, conversions: 25 },
    { month: 'Apr', evangelists: 22, houses: 450, conversions: 32 },
    { month: 'May', evangelists: 28, houses: 560, conversions: 38 },
    { month: 'Jun', evangelists: 32, houses: 620, conversions: 45 },
  ];

  const conversionRateData = [
    { name: 'Downtown', value: 32 },
    { name: 'Suburbs', value: 25 },
    { name: 'University', value: 18 },
    { name: 'Shopping District', value: 15 },
    { name: 'Residential', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const eventAttendanceData = [
    { name: 'Prayer Meetings', physical: 45, online: 78 },
    { name: 'Training Sessions', physical: 35, online: 65 },
    { name: 'Bible Studies', physical: 50, online: 120 },
    { name: 'Outreach Events', physical: 85, online: 30 },
    { name: 'Conferences', physical: 120, online: 150 },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800 font-display">Analytics</h1>
          <p className="text-gray-600 mt-2">Insights and statistics about your evangelization efforts</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCalendar} className="text-gray-500" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
          </div>
          <motion.button
            onClick={handleRefresh}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={refreshing}
          >
            <SafeIcon icon={FiRefreshCw} className={refreshing ? "animate-spin" : ""} />
            <span>{refreshing ? 'Refreshing...' : 'Refresh'}</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Evangelists</h3>
            <div className="p-2 bg-blue-50 rounded-lg">
              <SafeIcon icon={FiUsers} className="text-xl text-blue-600" />
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <p className="text-4xl font-bold text-gray-800">32</p>
            <p className="text-green-600 text-sm font-medium flex items-center mb-1">
              <SafeIcon icon={FiTrendingUp} className="mr-1" />
              +15% 
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-1">From last month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Houses Visited</h3>
            <div className="p-2 bg-purple-50 rounded-lg">
              <SafeIcon icon={FiMapPin} className="text-xl text-purple-600" />
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <p className="text-4xl font-bold text-gray-800">620</p>
            <p className="text-green-600 text-sm font-medium flex items-center mb-1">
              <SafeIcon icon={FiTrendingUp} className="mr-1" />
              +10.7%
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-1">From last month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Conversions</h3>
            <div className="p-2 bg-red-50 rounded-lg">
              <SafeIcon icon={FiHeart} className="text-xl text-red-600" />
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <p className="text-4xl font-bold text-gray-800">45</p>
            <p className="text-green-600 text-sm font-medium flex items-center mb-1">
              <SafeIcon icon={FiTrendingUp} className="mr-1" />
              +18.4%
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-1">From last month</p>
        </motion.div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Evangelism Progress</h3>
            <motion.button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <SafeIcon icon={FiDownload} className="text-gray-600" />
            </motion.button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={evangelismData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="evangelists" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                name="Evangelists"
              />
              <Line 
                type="monotone" 
                dataKey="houses" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                name="Houses Visited"
              />
              <Line 
                type="monotone" 
                dataKey="conversions" 
                stroke="#ef4444" 
                strokeWidth={2}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                name="Conversions"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Conversion Rate by Area</h3>
            <motion.button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <SafeIcon icon={FiDownload} className="text-gray-600" />
            </motion.button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={conversionRateData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {conversionRateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Conversion Rate']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Additional Charts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Event Attendance</h3>
          <motion.button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <SafeIcon icon={FiDownload} className="text-gray-600" />
          </motion.button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={eventAttendanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Bar dataKey="physical" fill="#0ea5e9" name="Physical Attendance" />
            <Bar dataKey="online" fill="#8b5cf6" name="Online Attendance" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Insights Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Evangelism Efficiency</h4>
            <p className="text-blue-700 text-sm">Conversion rate has increased by 18.4% since last month, showing improved evangelism effectiveness.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Area Performance</h4>
            <p className="text-green-700 text-sm">Downtown area shows the highest conversion rate at 32%, suggesting focused efforts should continue there.</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">Event Engagement</h4>
            <p className="text-purple-700 text-sm">Online Bible studies have the highest attendance, with 120 participants on average.</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">Growth Opportunity</h4>
            <p className="text-yellow-700 text-sm">Shopping District has the lowest conversion rate (15%). Consider new strategies for this area.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;