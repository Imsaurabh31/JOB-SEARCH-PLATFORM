import React, { useState, useRef, useEffect } from 'react';
import './ChatSystem.css';

const ChatSystem = ({ isOpen, onClose, recipientName, recipientRole }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'recruiter', text: 'Hi! I saw your profile and would like to discuss this opportunity.', time: '2:30 PM' },
    { id: 2, sender: 'user', text: 'Hello! I\'m interested to know more about the role.', time: '2:32 PM' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        sender: 'user',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Simulate typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const reply = {
          id: Date.now() + 1,
          sender: 'recruiter',
          text: 'Thanks for your interest! Let me share more details about the position.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, reply]);
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chat-overlay">
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-user-info">
            <div className="user-avatar">{recipientName?.charAt(0) || 'R'}</div>
            <div>
              <h4>{recipientName || 'Recruiter'}</h4>
              <span className="user-status">● Online</span>
            </div>
          </div>
          <div className="chat-actions">
            <button className="call-btn" title="Start Call">📞</button>
            <button className="video-btn" title="Video Call">📹</button>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">{message.time}</span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message recruiter">
              <div className="message-content typing">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} className="send-btn">
            📤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSystem;