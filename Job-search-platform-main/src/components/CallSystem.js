import React, { useState, useEffect } from 'react';
import './CallSystem.css';

const CallSystem = ({ isActive, onEnd, callerName, isVideo = false }) => {
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(isVideo);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isActive) return null;

  return (
    <div className="call-overlay">
      <div className="call-container">
        <div className="call-header">
          <div className="caller-info">
            <div className="caller-avatar">
              {callerName?.charAt(0) || 'R'}
            </div>
            <div>
              <h3>{callerName || 'Recruiter'}</h3>
              <p>{isVideo ? 'Video Call' : 'Voice Call'}</p>
            </div>
          </div>
          <div className="call-duration">
            {formatTime(callDuration)}
          </div>
        </div>

        {isVideo && (
          <div className="video-area">
            <div className="remote-video">
              <div className="video-placeholder">
                📹 Remote Video
              </div>
            </div>
            <div className="local-video">
              <div className="video-placeholder small">
                📷 You
              </div>
            </div>
          </div>
        )}

        <div className="call-controls">
          <button 
            className={`control-btn ${isMuted ? 'muted' : ''}`}
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? '🔇' : '🎤'}
          </button>
          
          {isVideo && (
            <button 
              className={`control-btn ${!isVideoOn ? 'video-off' : ''}`}
              onClick={() => setIsVideoOn(!isVideoOn)}
              title={isVideoOn ? 'Turn off video' : 'Turn on video'}
            >
              {isVideoOn ? '📹' : '📷'}
            </button>
          )}
          
          <button 
            className="control-btn end-call"
            onClick={onEnd}
            title="End Call"
          >
            📞
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallSystem;