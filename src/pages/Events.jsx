import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiCalendar, FiPlus, FiClock, FiMapPin, FiUsers, FiVideo,
  FiFilter, FiSearch, FiMoreVertical, FiEdit, FiTrash2,
  FiExternalLink, FiHeart, FiBookOpen, FiMic
} = FiIcons;

const Events = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      title: 'Sunday Prayer Meeting',
      type: 'prayer',
      date: '2024-01-21',
      time: '19:00',
      duration: '2 hours',
      location: 'Online (Jitsi Meet)',
      attendees: 45,
      maxAttendees: 100,
      description: 'Weekly community prayer meeting for intercession and worship',
      status: 'upcoming',
      host: 'Pastor Michael Johnson',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Evangelism Training Workshop',
      type: 'training',
      date: '2024-01-23',
      time: '14:00',
      duration: '3 hours',
      location: 'Community Center - Room A',
      attendees: 28,
      maxAttendees: 50,
      description: 'Practical training on effective evangelism techniques and approaches',
      status: 'upcoming',
      host: 'David Wilson',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Bible Study: Gospel of John',
      type: 'study',
      date: '2024-01-25',
      time: '18:30',
      duration: '1.5 hours',
      location: 'Online (Jitsi Meet)',
      attendees: 32,
      maxAttendees: 60,
      description: 'Deep dive into the Gospel of John - Chapter 3: Born Again',
      status: 'upcoming',
      host: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Community Outreach Planning',
      type: 'meeting',
      date: '2024-01-19',
      time: '10:00',
      duration: '2 hours',
      location: 'Grace Community Church',
      attendees: 15,
      maxAttendees: 25,
      description: 'Planning session for upcoming community outreach initiatives',
      status: 'completed',
      host: 'Michael Johnson',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop'
    },
    {
      id: 5,
      title: 'Youth Evangelism Conference',
      type: 'conference',
      date: '2024-01-28',
      time: '09:00',
      duration: '8 hours',
      location: 'Convention Center',
      attendees: 120,
      maxAttendees: 200,
      description: 'Annual youth conference focusing on evangelism and discipleship',
      status: 'upcoming',
      host: 'Youth Ministry Team',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=200&fit=crop'
    },
    {
      id: 6,
      title: 'Intercessory Prayer Night',
      type: 'prayer',
      date: '2024-01-26',
      time: '20:00',
      duration: '3 hours',
      location: 'Online (Jitsi Meet)',
      attendees: 67,
      maxAttendees: 150,
      description: 'Special prayer night for evangelization efforts and community needs',
      status: 'upcoming',
      host: 'Prayer Team',
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=200&fit=crop'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || event.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getEventIcon = (type) => {
    switch (type) {
      case 'prayer': return FiHeart;
      case 'training': return FiBookOpen;
      case 'study': return FiBookOpen;
      case 'meeting': return FiUsers;
      case 'conference': return FiMic;
      default: return FiCalendar;
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'prayer': return 'text-red-500 bg-red-50';
      case 'training': return 'text-blue-500 bg-blue-50';
      case 'study': return 'text-purple-500 bg-purple-50';
      case 'meeting': return 'text-green-500 bg-green-50';
      case 'conference': return 'text-orange-500 bg-orange-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'text-green-600 bg-green-50';
      case 'completed': return 'text-gray-600 bg-gray-50';
      case 'cancelled': return 'text-red-600 bg-red-50';
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
          <h1 className="text-3xl font-bold text-gray-800 font-display">Events</h1>
          <p className="text-gray-600 mt-2">Manage prayer meetings, training sessions, and conferences</p>
        </div>
        <motion.button
          className="mt-4 lg:mt-0 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon icon={FiPlus} />
          <span>Create Event</span>
        </motion.button>
      </motion.div>

      {/* Filters and Search */}
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
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiFilter} className="text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="prayer">Prayer</option>
                <option value="training">Training</option>
                <option value="study">Bible Study</option>
                <option value="meeting">Meeting</option>
                <option value="conference">Conference</option>
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            {filteredEvents.length} events found
          </div>
        </div>
      </motion.div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                  {event.status}
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <div className={`p-2 rounded-lg ${getEventColor(event.type)}`}>
                  <SafeIcon icon={getEventIcon(event.type)} className="text-lg" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <SafeIcon icon={FiMoreVertical} className="text-gray-400" />
                </button>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <SafeIcon icon={FiCalendar} className="mr-2" />
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <SafeIcon icon={FiClock} className="mr-2" />
                  {event.time} ({event.duration})
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <SafeIcon icon={FiMapPin} className="mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <SafeIcon icon={FiUsers} className="mr-2" />
                  {event.attendees} / {event.maxAttendees} attendees
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                  <span>Registration</span>
                  <span>{Math.round((event.attendees / event.maxAttendees) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex space-x-2">
                {event.location.includes('Online') && (
                  <motion.button
                    className="flex-1 bg-green-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-green-600 transition-colors flex items-center justify-center space-x-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SafeIcon icon={FiVideo} />
                    <span>Join</span>
                  </motion.button>
                )}
                <motion.button
                  className="flex-1 bg-primary-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-primary-600 transition-colors flex items-center justify-center space-x-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SafeIcon icon={FiExternalLink} />
                  <span>Details</span>
                </motion.button>
                <motion.button
                  className="bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SafeIcon icon={FiEdit} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <SafeIcon icon={FiCalendar} className="text-6xl text-gray-300 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
          <p className="text-gray-500">Try adjusting your search or create a new event</p>
        </motion.div>
      )}
    </div>
  );
};

export default Events;