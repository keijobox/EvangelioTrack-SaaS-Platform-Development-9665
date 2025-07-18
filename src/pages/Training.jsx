import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiAward, FiPlay, FiBook, FiClock, FiUsers, FiStar, 
  FiCheckCircle, FiLock, FiTrendingUp, FiTarget, FiSearch, FiFilter
} = FiIcons;

const Training = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Fundamentals of Evangelism',
      description: 'Learn the basic principles and techniques of effective evangelism',
      instructor: 'Pastor Michael Johnson',
      duration: '6 hours',
      lessons: 12,
      level: 'beginner',
      rating: 4.8,
      students: 156,
      progress: 75,
      thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=250&fit=crop',
      category: 'Evangelism',
      status: 'in_progress',
      certificate: true
    },
    {
      id: 2,
      title: 'Advanced Street Evangelism',
      description: 'Master advanced techniques for street evangelism and public speaking',
      instructor: 'Sarah Johnson',
      duration: '8 hours',
      lessons: 16,
      level: 'advanced',
      rating: 4.9,
      students: 89,
      progress: 0,
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      category: 'Evangelism',
      status: 'not_started',
      certificate: true
    },
    {
      id: 3,
      title: 'Biblical Counseling Basics',
      description: 'Provide biblical guidance and counseling to new converts',
      instructor: 'David Wilson',
      duration: '4 hours',
      lessons: 8,
      level: 'intermediate',
      rating: 4.7,
      students: 134,
      progress: 100,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      category: 'Counseling',
      status: 'completed',
      certificate: true
    },
    {
      id: 4,
      title: 'Cross-Cultural Evangelism',
      description: 'Effective evangelism across different cultures and communities',
      instructor: 'Emma Davis',
      duration: '5 hours',
      lessons: 10,
      level: 'intermediate',
      rating: 4.6,
      students: 78,
      progress: 30,
      thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=250&fit=crop',
      category: 'Evangelism',
      status: 'in_progress',
      certificate: true
    },
    {
      id: 5,
      title: 'Digital Evangelism Strategies',
      description: 'Leverage digital platforms for modern evangelism efforts',
      instructor: 'Tech Ministry Team',
      duration: '3 hours',
      lessons: 6,
      level: 'beginner',
      rating: 4.5,
      students: 201,
      progress: 0,
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      category: 'Technology',
      status: 'not_started',
      certificate: false
    },
    {
      id: 6,
      title: 'Prayer and Spiritual Warfare',
      description: 'Understanding spiritual warfare in evangelistic ministry',
      instructor: 'Prayer Team Leader',
      duration: '4 hours',
      lessons: 8,
      level: 'intermediate',
      rating: 4.9,
      students: 167,
      progress: 50,
      thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop',
      category: 'Prayer',
      status: 'in_progress',
      certificate: true
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your first training course',
      icon: FiAward,
      earned: true,
      earnedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Evangelist',
      description: 'Complete 3 evangelism courses',
      icon: FiTarget,
      earned: true,
      earnedDate: '2024-01-20'
    },
    {
      id: 3,
      title: 'Mentor',
      description: 'Achieve 100% completion rate',
      icon: FiStar,
      earned: false,
      progress: 67
    },
    {
      id: 4,
      title: 'Scholar',
      description: 'Complete 10 training courses',
      icon: FiBook,
      earned: false,
      progress: 30
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || course.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'text-green-600 bg-green-50';
      case 'intermediate': return 'text-yellow-600 bg-yellow-50';
      case 'advanced': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50';
      case 'in_progress': return 'text-blue-600 bg-blue-50';
      case 'not_started': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return FiCheckCircle;
      case 'in_progress': return FiPlay;
      case 'not_started': return FiLock;
      default: return FiLock;
    }
  };

  const overallProgress = Math.round(
    courses.reduce((acc, course) => acc + course.progress, 0) / courses.length
  );

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800 font-display">Training Center</h1>
          <p className="text-gray-600 mt-2">Enhance your evangelization skills with our comprehensive courses</p>
        </div>
        <div className="mt-4 lg:mt-0">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{overallProgress}%</div>
              <div className="text-sm text-gray-600">Overall Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {courses.filter(c => c.status === 'completed').length}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <div className="flex space-x-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('courses')}
            className={`pb-4 px-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'courses'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`pb-4 px-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'achievements'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`pb-4 px-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'progress'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Progress
          </button>
        </div>

        {activeTab === 'courses' && (
          <div className="mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiFilter} className="text-gray-400" />
                  <select
                    value={filterLevel}
                    onChange={(e) => setFilterLevel(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {filteredCourses.length} courses found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className={`p-2 rounded-full ${getStatusColor(course.status)}`}>
                        <SafeIcon icon={getStatusIcon(course.status)} />
                      </div>
                    </div>
                    {course.certificate && (
                      <div className="absolute bottom-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded text-xs">
                        Certificate
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <SafeIcon icon={FiUsers} className="mr-2" />
                        {course.instructor}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <SafeIcon icon={FiClock} className="mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiBook} className="mr-1" />
                          {course.lessons} lessons
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <SafeIcon icon={FiStar} className="mr-1 text-yellow-500" />
                          {course.rating}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiUsers} className="mr-1" />
                          {course.students} students
                        </div>
                      </div>
                    </div>

                    {course.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <motion.button
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                        course.status === 'completed'
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : course.status === 'in_progress'
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-primary-500 text-white hover:bg-primary-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {course.status === 'completed' ? 'Review Course' : 
                       course.status === 'in_progress' ? 'Continue Learning' : 'Start Course'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl border-2 ${
                    achievement.earned 
                      ? 'border-yellow-300 bg-yellow-50' 
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      achievement.earned ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-600'
                    }`}>
                      <SafeIcon icon={achievement.icon} className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                      {achievement.earned ? (
                        <p className="text-sm text-green-600">
                          Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                        </p>
                      ) : (
                        <div>
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${achievement.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Learning Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Courses</span>
                    <span className="font-semibold text-gray-800">{courses.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Completed</span>
                    <span className="font-semibold text-green-600">
                      {courses.filter(c => c.status === 'completed').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">In Progress</span>
                    <span className="font-semibold text-blue-600">
                      {courses.filter(c => c.status === 'in_progress').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Not Started</span>
                    <span className="font-semibold text-gray-600">
                      {courses.filter(c => c.status === 'not_started').length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Completed "Biblical Counseling Basics"</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiPlay} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Started "Prayer and Spiritual Warfare"</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiStar} className="text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Earned "First Steps" achievement</p>
                      <p className="text-xs text-gray-500">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Training;