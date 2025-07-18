import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiMapPin, FiUsers, FiNavigation, FiClock, FiHeart, 
  FiTrendingUp, FiFilter, FiRefreshCw, FiMaximize2 
} = FiIcons;

const Tracking = () => {
  const [activeEvangelists, setActiveEvangelists] = useState([]);
  const [selectedEvangelist, setSelectedEvangelist] = useState(null);
  const [mapView, setMapView] = useState('satellite');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    // Simulate real-time tracking data
    const mockEvangelists = [
      {
        id: 1,
        name: 'John Smith',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        location: { lat: 40.7128, lng: -74.0060, address: 'Manhattan, NY' },
        status: 'active',
        route: 'Downtown Route A',
        progress: 65,
        housesVisited: 8,
        conversions: 2,
        startTime: '09:00 AM',
        estimatedCompletion: '02:30 PM'
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9a4c8d6?w=150&h=150&fit=crop&crop=face',
        location: { lat: 40.7589, lng: -73.9851, address: 'Central Park, NY' },
        status: 'active',
        route: 'Residential Route B',
        progress: 45,
        housesVisited: 12,
        conversions: 3,
        startTime: '08:30 AM',
        estimatedCompletion: '03:00 PM'
      },
      {
        id: 3,
        name: 'Michael Brown',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        location: { lat: 40.7282, lng: -73.7949, address: 'Queens, NY' },
        status: 'break',
        route: 'Shopping Center Route C',
        progress: 80,
        housesVisited: 15,
        conversions: 1,
        startTime: '09:15 AM',
        estimatedCompletion: '01:45 PM'
      },
      {
        id: 4,
        name: 'Emma Davis',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        location: { lat: 40.6892, lng: -74.0445, address: 'Brooklyn, NY' },
        status: 'active',
        route: 'University Campus Route D',
        progress: 30,
        housesVisited: 6,
        conversions: 4,
        startTime: '10:00 AM',
        estimatedCompletion: '04:00 PM'
      }
    ];

    setActiveEvangelists(mockEvangelists);
    setSelectedEvangelist(mockEvangelists[0]);

    // Update last updated time every minute
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50';
      case 'break': return 'text-yellow-600 bg-yellow-50';
      case 'offline': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return FiNavigation;
      case 'break': return FiClock;
      case 'offline': return FiUsers;
      default: return FiUsers;
    }
  };

  const totalStats = activeEvangelists.reduce((acc, evangelist) => ({
    totalHouses: acc.totalHouses + evangelist.housesVisited,
    totalConversions: acc.totalConversions + evangelist.conversions,
    activeCount: acc.activeCount + (evangelist.status === 'active' ? 1 : 0)
  }), { totalHouses: 0, totalConversions: 0, activeCount: 0 });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800 font-display">Real-time Tracking</h1>
          <p className="text-gray-600 mt-2">Monitor evangelists' locations and progress in real-time</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
          <motion.button
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiRefreshCw} />
            <span>Refresh</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Evangelists</p>
              <p className="text-3xl font-bold text-green-600">{totalStats.activeCount}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <SafeIcon icon={FiUsers} className="text-2xl text-green-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Houses Visited Today</p>
              <p className="text-3xl font-bold text-blue-600">{totalStats.totalHouses}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <SafeIcon icon={FiMapPin} className="text-2xl text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversions Today</p>
              <p className="text-3xl font-bold text-red-600">{totalStats.totalConversions}</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <SafeIcon icon={FiHeart} className="text-2xl text-red-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Progress</p>
              <p className="text-3xl font-bold text-purple-600">
                {Math.round(activeEvangelists.reduce((acc, e) => acc + e.progress, 0) / activeEvangelists.length)}%
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <SafeIcon icon={FiTrendingUp} className="text-2xl text-purple-600" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Tracking Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Live Map</h3>
              <div className="flex items-center space-x-2">
                <select
                  value={mapView}
                  onChange={(e) => setMapView(e.target.value)}
                  className="text-sm border border-gray-300 rounded-lg px-3 py-1"
                >
                  <option value="satellite">Satellite</option>
                  <option value="street">Street</option>
                  <option value="terrain">Terrain</option>
                </select>
                <motion.button
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <SafeIcon icon={FiMaximize2} className="text-gray-600" />
                </motion.button>
              </div>
            </div>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiMapPin} className="text-6xl text-gray-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
              <p className="text-gray-500">Real-time evangelist locations would appear here</p>
              <p className="text-sm text-gray-400 mt-2">
                Integration with mapping services like Google Maps or OpenStreetMap
              </p>
            </div>
          </div>
        </motion.div>

        {/* Evangelist List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200"
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Active Evangelists</h3>
          </div>

          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {activeEvangelists.map((evangelist) => (
              <motion.div
                key={evangelist.id}
                onClick={() => setSelectedEvangelist(evangelist)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedEvangelist?.id === evangelist.id
                    ? 'bg-primary-50 border-primary-200'
                    : 'hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={evangelist.avatar}
                    alt={evangelist.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-800">{evangelist.name}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(evangelist.status)}`}>
                        {evangelist.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{evangelist.route}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${evangelist.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 ml-2">{evangelist.progress}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Selected Evangelist Details */}
      {selectedEvangelist && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={selectedEvangelist.avatar}
                alt={selectedEvangelist.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{selectedEvangelist.name}</h3>
                <p className="text-gray-600">{selectedEvangelist.route}</p>
                <div className="flex items-center mt-2">
                  <SafeIcon icon={FiMapPin} className="text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600">{selectedEvangelist.location.address}</span>
                </div>
              </div>
            </div>
            <span className={`px-4 py-2 rounded-full font-medium ${getStatusColor(selectedEvangelist.status)}`}>
              {selectedEvangelist.status}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{selectedEvangelist.housesVisited}</div>
              <div className="text-sm text-gray-600">Houses Visited</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{selectedEvangelist.conversions}</div>
              <div className="text-sm text-gray-600">Conversions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{selectedEvangelist.progress}%</div>
              <div className="text-sm text-gray-600">Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{selectedEvangelist.estimatedCompletion}</div>
              <div className="text-sm text-gray-600">ETA</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Today's Schedule</h4>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Started: {selectedEvangelist.startTime}</span>
              <span>Estimated Completion: {selectedEvangelist.estimatedCompletion}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Tracking;