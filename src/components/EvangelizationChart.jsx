import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const EvangelizationChart = () => {
  const data = [
    { name: 'Jan', evangelists: 12, conversions: 8, events: 5 },
    { name: 'Feb', evangelists: 19, conversions: 12, events: 7 },
    { name: 'Mar', evangelists: 25, conversions: 15, events: 9 },
    { name: 'Apr', evangelists: 32, conversions: 18, events: 12 },
    { name: 'May', evangelists: 38, conversions: 22, events: 15 },
    { name: 'Jun', evangelists: 45, conversions: 28, events: 18 },
  ];

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Evangelization Progress</h3>
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Evangelists</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Conversions</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Events</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
          <Line 
            type="monotone" 
            dataKey="evangelists" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="conversions" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="events" 
            stroke="#8b5cf6" 
            strokeWidth={3}
            dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default EvangelizationChart;