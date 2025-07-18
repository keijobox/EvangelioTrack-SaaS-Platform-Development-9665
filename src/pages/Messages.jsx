import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiMessageCircle, FiSend, FiPaperclip, FiSmile, FiPhone, 
  FiVideo, FiMoreVertical, FiSearch, FiUsers, FiUser,
  FiCheck, FiCheckCircle, FiClock, FiPlus, FiSettings
} = FiIcons;

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      type: 'individual',
      lastMessage: 'Thanks for the prayer support!',
      timestamp: '2 min ago',
      unread: 2,
      online: true,
      role: 'evangelist'
    },
    {
      id: 2,
      name: 'Downtown Team',
      avatar: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=150&h=150&fit=crop',
      type: 'group',
      lastMessage: 'Sarah: Route completed successfully',
      timestamp: '5 min ago',
      unread: 0,
      online: false,
      members: 8
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9a4c8d6?w=150&h=150&fit=crop&crop=face',
      type: 'individual',
      lastMessage: 'Can we schedule a meeting?',
      timestamp: '1 hour ago',
      unread: 1,
      online: true,
      role: 'evangelist'
    },
    {
      id: 4,
      name: 'Prayer Warriors',
      avatar: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=150&h=150&fit=crop',
      type: 'group',
      lastMessage: 'Michael: Let\'s pray for the new converts',
      timestamp: '2 hours ago',
      unread: 5,
      online: false,
      members: 15
    },
    {
      id: 5,
      name: 'Michael Brown',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      type: 'individual',
      lastMessage: 'The training materials are ready',
      timestamp: '3 hours ago',
      unread: 0,
      online: false,
      role: 'supervisor'
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: 'John Smith',
      content: 'Good morning! How are the preparations for today\'s evangelization going?',
      timestamp: '09:15 AM',
      type: 'text',
      status: 'read'
    },
    {
      id: 2,
      senderId: 'me',
      senderName: 'You',
      content: 'Morning John! Everything is ready. The team is motivated and prepared.',
      timestamp: '09:18 AM',
      type: 'text',
      status: 'read'
    },
    {
      id: 3,
      senderId: 1,
      senderName: 'John Smith',
      content: 'That\'s great to hear! I\'ll be starting my route in downtown around 10 AM.',
      timestamp: '09:20 AM',
      type: 'text',
      status: 'read'
    },
    {
      id: 4,
      senderId: 'me',
      senderName: 'You',
      content: 'Perfect! Remember to stay safe and keep us updated on your progress.',
      timestamp: '09:22 AM',
      type: 'text',
      status: 'read'
    },
    {
      id: 5,
      senderId: 1,
      senderName: 'John Smith',
      content: 'Will do! Please keep me in your prayers.',
      timestamp: '09:25 AM',
      type: 'text',
      status: 'read'
    },
    {
      id: 6,
      senderId: 'me',
      senderName: 'You',
      content: 'Absolutely! You\'re always in our prayers. May God bless your ministry today.',
      timestamp: '09:27 AM',
      type: 'text',
      status: 'delivered'
    },
    {
      id: 7,
      senderId: 1,
      senderName: 'John Smith',
      content: 'Thanks for the prayer support!',
      timestamp: '09:30 AM',
      type: 'text',
      status: 'sent'
    }
  ];

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to the server
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'sent': return FiCheck;
      case 'delivered': return FiCheck;
      case 'read': return FiCheckCircle;
      default: return FiClock;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'sent': return 'text-gray-400';
      case 'delivered': return 'text-gray-600';
      case 'read': return 'text-blue-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Chat List */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Messages</h2>
            <div className="flex items-center space-x-2">
              <motion.button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <SafeIcon icon={FiPlus} className="text-gray-600" />
              </motion.button>
              <motion.button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <SafeIcon icon={FiSettings} className="text-gray-600" />
              </motion.button>
            </div>
          </div>
          <div className="relative">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <motion.div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedChat?.id === chat.id ? 'bg-primary-50 border-r-2 border-primary-500' : ''
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full"
                  />
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-gray-800 truncate">{chat.name}</h3>
                      {chat.type === 'group' && (
                        <SafeIcon icon={FiUsers} className="text-gray-400 text-sm" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{chat.timestamp}</span>
                      {chat.unread > 0 && (
                        <span className="bg-primary-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  {chat.type === 'group' && (
                    <p className="text-xs text-gray-500">{chat.members} members</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={selectedChat.avatar}
                      alt={selectedChat.name}
                      className="w-10 h-10 rounded-full"
                    />
                    {selectedChat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{selectedChat.name}</h3>
                    <p className="text-sm text-gray-600">
                      {selectedChat.type === 'group' 
                        ? `${selectedChat.members} members` 
                        : selectedChat.online ? 'Online' : 'Last seen recently'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <SafeIcon icon={FiPhone} className="text-gray-600" />
                  </motion.button>
                  <motion.button
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <SafeIcon icon={FiVideo} className="text-gray-600" />
                  </motion.button>
                  <motion.button
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <SafeIcon icon={FiMoreVertical} className="text-gray-600" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${msg.senderId === 'me' ? 'order-2' : 'order-1'}`}>
                      <div className={`p-3 rounded-lg ${
                        msg.senderId === 'me' 
                          ? 'bg-primary-500 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <p className="text-sm">{msg.content}</p>
                      </div>
                      <div className={`flex items-center mt-1 space-x-1 ${
                        msg.senderId === 'me' ? 'justify-end' : 'justify-start'
                      }`}>
                        <span className="text-xs text-gray-500">{msg.timestamp}</span>
                        {msg.senderId === 'me' && (
                          <SafeIcon 
                            icon={getStatusIcon(msg.status)} 
                            className={`text-xs ${getStatusColor(msg.status)}`} 
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <motion.button
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <SafeIcon icon={FiPaperclip} className="text-gray-600" />
                </motion.button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                </div>
                <motion.button
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <SafeIcon icon={FiSmile} className="text-gray-600" />
                </motion.button>
                <motion.button
                  onClick={handleSendMessage}
                  className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiSend} />
                </motion.button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiMessageCircle} className="text-6xl text-gray-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a conversation</h3>
              <p className="text-gray-500">Choose a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;