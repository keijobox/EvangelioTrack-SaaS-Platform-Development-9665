import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  // Sign up with email and password
  const signUp = async (email, password, userData = {}) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: userData.fullName || '',
            role: userData.role || 'evangelist',
            community: userData.community || '',
            phone: userData.phone || ''
          }
        }
      });

      if (error) throw error;

      // Create user profile in our custom table
      if (data.user) {
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert([
            {
              id: data.user.id,
              email: data.user.email,
              full_name: userData.fullName || '',
              role: userData.role || 'evangelist',
              community: userData.community || '',
              phone: userData.phone || '',
              avatar_url: userData.avatarUrl || '',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }
          ]);

        if (profileError) console.error('Profile creation error:', profileError);
      }

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  // Sign in with email and password
  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      });
      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Update password
  const updatePassword = async (newPassword) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });
      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Update user profile
  const updateProfile = async (updates) => {
    try {
      const { error } = await supabase.auth.updateUser({
        data: updates
      });

      if (error) throw error;

      // Also update our custom profile table
      const { error: profileError } = await supabase
        .from('user_profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Get user profile
  const getUserProfile = async (userId = null) => {
    const id = userId || user?.id;
    if (!id) return { data: null, error: new Error('No user ID provided') };

    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', id)
        .single();

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    updateProfile,
    getUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;