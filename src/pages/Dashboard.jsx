import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import StatsCard from '../components/StatsCard';
import ActivityFeed from '../components/ActivityFeed';
import QuickActions from '../components/QuickActions';
import EvangelizationChart from '../components/EvangelizationChart';
import MapOverview from '../components/MapOverview';

const { 
  FiUsers, FiMapPin, FiCalendar, FiTrendingUp, 
  FiHeart, FiBookOpen, FiMessageCircle, FiAward 
} = FiIcons;

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEvangelists: 45,
    activeRoutes: 12,
    upcomingEvents: 8,
    conversions: 23,
    prayerRequests: 156,
    resourcesShared: 89,
    messagesExchanged: 342,
    trainingSessions: 15
  });

  const [activities] = useState([
    {
      id: 1,
      type: 'evangelist',
      message: 'John Smith completed Route A with 8 house visits',
      time: '5 minutes ago',
      icon: FiUsers,
      color: 'text-green-500'
    },
    {
      id: 2,
      type: 'event',
      message: 'Prayer meeting scheduled for tomorrow at 7 PM',
      time: '15 minutes ago',
      icon: FiCalendar,
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'conversion',
      message: 'New conversion reported by Sarah Johnson',
      time: '32 minutes ago',
      icon: FiHeart,
      color: 'text-red-500'
    },
    {
      id: 4,
      type: 'training',
      message: 'Michael completed "Effective Evangelism" course',
      time: '1 hour ago',
      icon: FiAward,
      color: 'text-purple-500'
    },
    {
      id: 5,
      type: 'resource',
      message: 'New Bible study material uploaded',
      time: '2 hours ago',
      icon: FiBookOpen,
      color: 'text-yellow-500'
    }
  ]);

  const quickActions = [
    { 
      title: 'Add Evangelist', 
      icon: FiUsers, 
      color: 'bg-green-500', 
      action: () => console.log('Add evangelist')
    },
    { 
      title: 'Schedule Event', 
      icon: FiCalendar, 
      color: 'bg-blue-500', 
      action: () => console.log('Schedule event')
    },
    { 
      title: 'Send Message', 
      icon: FiMessageCircle, 
      color: 'bg-purple-500', 
      action: () => console.log('Send message')
    },
    { 
      title: 'View Reports', 
      icon: FiTrendingUp, 
      color: 'bg-yellow-500', 
      action: () => console.log('View reports')
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800 font-display">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening in your community.</p>
        </div>
        <div className="mt-4 lg:mt-0">
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Evangelists"
          value={stats.totalEvangelists}
          icon={FiUsers}
          color="text-green-500"
          bgColor="bg-green-50"
          change="+5"
          changeType="increase"
        />
        <StatsCard
          title="Active Routes"
          value={stats.activeRoutes}
          icon={FiMapPin}
          color="text-blue-500"
          bgColor="bg-blue-50"
          change="+2"
          changeType="increase"
        />
        <StatsCard
          title="Upcoming Events"
          value={stats.upcomingEvents}
          icon={FiCalendar}
          color="text-purple-500"
          bgColor="bg-purple-50"
          change="+3"
          changeType="increase"
        />
        <StatsCard
          title="Conversions"
          value={stats.conversions}
          icon={FiHeart}
          color="text-red-500"
          bgColor="bg-red-50"
          change="+8"
          changeType="increase"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <EvangelizationChart />
          <MapOverview />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <QuickActions actions={quickActions} />
          <ActivityFeed activities={activities} />
        </div>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Prayer Requests"
          value={stats.prayerRequests}
          icon={FiHeart}
          color="text-pink-500"
          bgColor="bg-pink-50"
          change="+12"
          changeType="increase"
        />
        <StatsCard
          title="Resources Shared"
          value={stats.resourcesShared}
          icon={FiBookOpen}
          color="text-indigo-500"
          bgColor="bg-indigo-50"
          change="+7"
          changeType="increase"
        />
        <StatsCard
          title="Messages Exchanged"
          value={stats.messagesExchanged}
          icon={FiMessageCircle}
          color="text-yellow-500"
          bgColor="bg-yellow-50"
          change="+45"
          changeType="increase"
        />
        <StatsCard
          title="Training Sessions"
          value={stats.trainingSessions}
          icon={FiAward}
          color="text-teal-500"
          bgColor="bg-teal-50"
          change="+3"
          changeType="increase"
        />
      </div>
    </div>
  );
};

export default Dashboard;