import React, { useState } from 'react';
import './EmailVerification.css';

const EmailVerification = ({ email, onVerificationSuccess }) => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate OTP verification
    setTimeout(() => {
      if (otp === '123456') { // Demo OTP
        onVerificationSuccess();
      } else {
        setError('Invalid OTP. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleResendOTP = () => {
    setError('');
    // Simulate resend
    alert('OTP sent to ' + email);
  };

  return (
    <div className="verification-container">
      <div className="verification-card">
        <div className="verification-icon">📧</div>
        <h2>Email Verification</h2>
        <p>We've sent a 6-digit code to</p>
        <p className="email-display">{email}</p>
        
        <form onSubmit={handleVerifyOTP}>
          <div className="otp-input-group">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="Enter 6-digit OTP"
              className="otp-input"
              maxLength="6"
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="verify-btn"
            disabled={isLoading || otp.length !== 6}
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
        
        <div className="resend-section">
          <p>Didn't receive the code?</p>
          <button onClick={handleResendOTP} className="resend-btn">
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;