import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AuthProvider from './contexts/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import Evangelists from './pages/Evangelists';
import Tracking from './pages/Tracking';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Messages from './pages/Messages';
import Training from './pages/Training';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import LoadingScreen from './components/LoadingScreen';
import { useAuth } from './contexts/AuthContext';

function AppContent() {
  const { user, loading } = useAuth();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || isInitialLoad) {
    return <LoadingScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
        />
        <Route 
          path="/register" 
          element={user ? <Navigate to="/dashboard" replace /> : <Register />} 
        />
        <Route 
          path="/forgot-password" 
          element={user ? <Navigate to="/dashboard" replace /> : <ForgotPassword />} 
        />
        
        {/* Protected Routes */}
        <Route 
          path="/*" 
          element={user ? (
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/evangelists" element={<Evangelists />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route path="/events" element={<Events />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/training" element={<Training />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )}
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;