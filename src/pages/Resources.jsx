import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiBookOpen, FiVideo, FiHeadphones, FiFile, FiDownload, 
  FiSearch, FiFilter, FiPlus, FiHeart, FiShare2, FiEye,
  FiFolder, FiMoreVertical, FiStar, FiClock, FiUser
} = FiIcons;

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Resources', icon: FiFolder, count: 156 },
    { id: 'video', name: 'Videos', icon: FiVideo, count: 45 },
    { id: 'audio', name: 'Audio', icon: FiHeadphones, count: 67 },
    { id: 'document', name: 'Documents', icon: FiFile, count: 34 },
    { id: 'study', name: 'Bible Studies', icon: FiBookOpen, count: 28 },
    { id: 'sermon', name: 'Sermons', icon: FiUser, count: 52 }
  ];

  const resources = [
    {
      id: 1,
      title: 'Effective Evangelism Techniques',
      type: 'video',
      category: 'Training',
      duration: '45 min',
      size: '125 MB',
      author: 'Pastor Michael Johnson',
      uploadDate: '2024-01-15',
      downloads: 234,
      rating: 4.8,
      description: 'Comprehensive guide to modern evangelism approaches and techniques',
      thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=200&fit=crop',
      tags: ['evangelism', 'training', 'techniques'],
      featured: true
    },
    {
      id: 2,
      title: 'Prayer for Evangelists',
      type: 'audio',
      category: 'Prayer',
      duration: '30 min',
      size: '28 MB',
      author: 'Sarah Johnson',
      uploadDate: '2024-01-12',
      downloads: 189,
      rating: 4.9,
      description: 'Guided prayer session specifically for evangelists and their ministry',
      thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=300&h=200&fit=crop',
      tags: ['prayer', 'evangelists', 'ministry'],
      featured: false
    },
    {
      id: 3,
      title: 'Gospel Presentation Guide',
      type: 'document',
      category: 'Reference',
      duration: null,
      size: '2.5 MB',
      author: 'David Wilson',
      uploadDate: '2024-01-10',
      downloads: 456,
      rating: 4.7,
      description: 'Step-by-step guide for presenting the Gospel effectively',
      thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
      tags: ['gospel', 'presentation', 'guide'],
      featured: true
    },
    {
      id: 4,
      title: 'Discipleship Fundamentals',
      type: 'study',
      category: 'Bible Study',
      duration: '8 sessions',
      size: '15 MB',
      author: 'Emma Davis',
      uploadDate: '2024-01-08',
      downloads: 167,
      rating: 4.6,
      description: 'Complete Bible study series on discipleship principles',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
      tags: ['discipleship', 'bible study', 'fundamentals'],
      featured: false
    },
    {
      id: 5,
      title: 'Overcoming Rejection in Ministry',
      type: 'sermon',
      category: 'Encouragement',
      duration: '52 min',
      size: '89 MB',
      author: 'Pastor John Smith',
      uploadDate: '2024-01-05',
      downloads: 298,
      rating: 4.8,
      description: 'Encouraging sermon about handling rejection in evangelistic ministry',
      thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=300&h=200&fit=crop',
      tags: ['rejection', 'ministry', 'encouragement'],
      featured: false
    },
    {
      id: 6,
      title: 'Street Evangelism Safety Guide',
      type: 'document',
      category: 'Safety',
      duration: null,
      size: '1.8 MB',
      author: 'Security Team',
      uploadDate: '2024-01-03',
      downloads: 123,
      rating: 4.5,
      description: 'Essential safety guidelines for street evangelism activities',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
      tags: ['safety', 'street evangelism', 'guidelines'],
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || resource.type === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return FiVideo;
      case 'audio': return FiHeadphones;
      case 'document': return FiFile;
      case 'study': return FiBookOpen;
      case 'sermon': return FiUser;
      default: return FiFile;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'text-red-500 bg-red-50';
      case 'audio': return 'text-green-500 bg-green-50';
      case 'document': return 'text-blue-500 bg-blue-50';
      case 'study': return 'text-purple-500 bg-purple-50';
      case 'sermon': return 'text-orange-500 bg-orange-50';
      default: return 'text-gray-500 bg-gray-50';
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
          <h1 className="text-3xl font-bold text-gray-800 font-display">Resources</h1>
          <p className="text-gray-600 mt-2">Access spiritual resources, training materials, and study guides</p>
        </div>
        <motion.button
          className="mt-4 lg:mt-0 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon icon={FiPlus} />
          <span>Upload Resource</span>
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary-50 text-primary-600'
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={category.icon} />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Featured Resources */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Featured</h3>
            <div className="space-y-3">
              {resources.filter(r => r.featured).slice(0, 3).map(resource => (
                <div key={resource.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`p-2 rounded-lg ${getTypeColor(resource.type)}`}>
                    <SafeIcon icon={getTypeIcon(resource.type)} className="text-sm" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 text-sm">{resource.title}</h4>
                    <p className="text-xs text-gray-500">{resource.author}</p>
                  </div>
                  <SafeIcon icon={FiStar} className="text-yellow-500" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="relative flex-1 max-w-md">
                <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="text-sm text-gray-600">
                {filteredResources.length} resources found
              </div>
            </div>
          </motion.div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <div className={`p-2 rounded-lg ${getTypeColor(resource.type)}`}>
                      <SafeIcon icon={getTypeIcon(resource.type)} />
                    </div>
                  </div>
                  {resource.featured && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <SafeIcon icon={FiStar} className="text-xs" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}
                  {resource.duration && (
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      {resource.duration}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{resource.title}</h3>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <SafeIcon icon={FiMoreVertical} className="text-gray-400" />
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <SafeIcon icon={FiUser} className="mr-2" />
                      {resource.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <SafeIcon icon={FiClock} className="mr-2" />
                      {new Date(resource.uploadDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <SafeIcon icon={FiDownload} className="mr-1" />
                        {resource.downloads} downloads
                      </div>
                      <div className="flex items-center">
                        <SafeIcon icon={FiStar} className="mr-1 text-yellow-500" />
                        {resource.rating}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <motion.button
                      className="flex-1 bg-primary-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-primary-600 transition-colors flex items-center justify-center space-x-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SafeIcon icon={FiDownload} />
                      <span>Download</span>
                    </motion.button>
                    <motion.button
                      className="bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SafeIcon icon={FiEye} />
                    </motion.button>
                    <motion.button
                      className="bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SafeIcon icon={FiShare2} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <SafeIcon icon={FiBookOpen} className="text-6xl text-gray-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search or browse different categories</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;