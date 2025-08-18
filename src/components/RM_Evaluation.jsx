import React from 'react';
import '../styles/RM_Evaluation.css';

const RM_Evaluation = ({ children }) => (
  <div className="box" style={{ position: 'relative' }}>
    <div style={{ position: 'absolute', top: 16, left: 24, fontWeight: 'bold', fontSize: '1rem', background: 'transparent', padding: '2px 8px', borderRadius: '4px', color: '#333' }}>
      RM Evaluation
    </div>
    <div style={{ position: 'absolute', top: 54, left: 24, fontWeight: 'bold', fontSize: '1rem', background: 'transparent', padding: '2px 8px', borderRadius: '4px', color: '#444' }}>
      Employee Task Details
    </div>
    <div style={{ width: '100%', marginTop: '80px' }}>
      {children}
    </div>
  </div>
);

export default RM_Evaluation;