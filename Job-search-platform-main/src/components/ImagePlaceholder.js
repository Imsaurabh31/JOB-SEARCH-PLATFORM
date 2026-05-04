import React from 'react';
import './ImagePlaceholder.css';

const ImagePlaceholder = ({ 
  width = 300, 
  height = 200, 
  text = 'Image Placeholder', 
  backgroundColor = '#f0f0f0',
  textColor = '#666',
  className = ''
}) => {
  return (
    <div 
      className={`image-placeholder ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px dashed #ddd',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '500',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="placeholder-content">
        <div className="placeholder-icon">📷</div>
        <div className="placeholder-text">{text}</div>
        <div className="placeholder-dimensions">{width} × {height}</div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;