import React from 'react';
import '../styles/RM_Evaluation.css';

const RM_Evaluation = ({ children }) => (
  <div className="box" style={{ position: 'relative' }}>
    {/* Top-left labels */}
    <div style={{ position: 'absolute', top: 16, left: 24, fontWeight: 'bold', fontSize: '1rem', background: 'transparent', padding: '2px 8px', borderRadius: '4px', color: '#333' }}>
      RM Evaluation
    </div>
    <div style={{ position: 'absolute', top: 54, left: 24, fontWeight: 'bold', fontSize: '1rem', background: 'transparent', padding: '2px 8px', borderRadius: '4px', color: '#444' }}>
      Employee Task Details
    </div>

    {/* Top-right controls */}
    <div className="top-right-controls">
      {/* Note icon */}
      <div className="note-indicator">
        <div className="note-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11H15M9 15H15M9 7H15M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="note-dot"></div>
        </div>
        <span className="note-text">Note</span>
      </div>

      {/* Import/Export buttons */}
      <div className="action-buttons">
        <button className="action-btn import-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Import
        </button>
        <button className="action-btn export-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Export To Excel
        </button>
      </div>
    </div>

    <div style={{ width: '100%', marginTop: '80px' }}>
      {children}
    </div>
  </div>
);

export default RM_Evaluation;