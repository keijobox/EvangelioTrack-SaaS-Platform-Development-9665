import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';

const { FiMail, FiLock, FiEye, FiEyeOff, FiHeart, FiUsers, FiMapPin, FiShield } = FiIcons;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await signIn(formData.email, formData.password);
      
      if (error) {
        setError(error.message);
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (error) setError('');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 p-12 flex-col justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-md">
          <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4">
              <SafeIcon icon={FiHeart} className="text-2xl text-primary-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-display">EvangelioTrack</h1>
              <p className="text-primary-100 text-sm">Evangelization Platform</p>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Welcome Back to Your Ministry Dashboard
          </motion.h2>

          <motion.p
            className="text-xl text-primary-100 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Continue your evangelization journey with real-time tracking, community management, and powerful insights.
          </motion.p>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center text-primary-100">
              <SafeIcon icon={FiUsers} className="text-2xl mr-4" />
              <div>
                <h3 className="font-semibold">Community Management</h3>
                <p className="text-sm text-primary-200">Manage evangelists and supervisors efficiently</p>
              </div>
            </div>
            <div className="flex items-center text-primary-100">
              <SafeIcon icon={FiMapPin} className="text-2xl mr-4" />
              <div>
                <h3 className="font-semibold">Real-time Tracking</h3>
                <p className="text-sm text-primary-200">GPS tracking and interactive maps</p>
              </div>
            </div>
            <div className="flex items-center text-primary-100">
              <SafeIcon icon={FiShield} className="text-2xl mr-4" />
              <div>
                <h3 className="font-semibold">Secure & Reliable</h3>
                <p className="text-sm text-primary-200">End-to-end encryption and data protection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Login Form */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-md w-full">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="lg:hidden flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4">
                <SafeIcon icon={FiHeart} className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 font-display">EvangelioTrack</h1>
                <p className="text-gray-500 text-sm">Evangelization Platform</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <SafeIcon icon={FiLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <SafeIcon icon={showPassword ? FiEyeOff : FiEye} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-500">
                Forgot password?
              </Link>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </motion.button>
          </motion.form>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary-600 hover:text-primary-500 font-medium">
                Create account
              </Link>
            </p>
          </motion.div>

          <motion.div
            className="mt-8 pt-6 border-t border-gray-200 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{' '}
              <Link to="/terms" className="text-primary-600 hover:text-primary-500">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-primary-600 hover:text-primary-500">Privacy Policy</Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;