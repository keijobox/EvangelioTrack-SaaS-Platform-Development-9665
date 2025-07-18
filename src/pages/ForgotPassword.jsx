import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';

const { FiMail, FiArrowLeft, FiHeart, FiCheck } = FiIcons;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const { error } = await resetPassword(email);
      
      if (error) {
        setError(error.message);
      } else {
        setSent(true);
        setMessage('Check your email for password reset instructions.');
      }
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4">
              <SafeIcon icon={FiHeart} className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 font-display">EvangelioTrack</h1>
              <p className="text-gray-500 text-sm">Evangelization Platform</p>
            </div>
          </div>
          
          {!sent ? (
            <>
              <h2 className="text-center text-3xl font-bold text-gray-900">
                Forgot your password?
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiCheck} className="text-3xl text-green-600" />
                </div>
              </div>
              <h2 className="text-center text-3xl font-bold text-gray-900">
                Check your email
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                We've sent password reset instructions to your email address.
              </p>
            </>
          )}
        </div>

        {!sent ? (
          <motion.form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {message && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-sm">
                {message}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Sending...' : 'Send Reset Instructions'}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="mt-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-center text-sm text-gray-600">
              Didn't receive the email? Check your spam folder or{' '}
              <button
                onClick={() => {
                  setSent(false);
                  setMessage('');
                  setError('');
                }}
                className="text-primary-600 hover:text-primary-500 font-medium"
              >
                try again
              </button>
            </p>
          </motion.div>
        )}

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/login"
            className="inline-flex items-center text-sm text-primary-600 hover:text-primary-500 font-medium"
          >
            <SafeIcon icon={FiArrowLeft} className="mr-2" />
            Back to sign in
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;