import React from 'react';
import '../styles/RM_Evaluation.css';

const dayTypeColors = {
  'Work From Office': { bg: '#C8F7C5', color: '#388E3C' },
  'Work From Home': { bg: '#D6E6FF', color: '#1976D2' },
  'Leave': { bg: '#FFE6E6', color: '#D32F2F' },
  'Not Declared': { bg: '#FFF7CC', color: '#FBC02D' },
  'Holiday': { bg: '#B3E5FC', color: '#0288D1' },
};

const TaskBox = ({ declarationDate, type, days, description }) => (
  <div className="task-box" style={{
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    padding: '20px',
    marginBottom: '16px',
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start'
  }}>
    <div style={{ minWidth: '120px', textAlign: 'left' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '4px' }}>{declarationDate}</div>
      <div style={{ color: '#2196f3', fontWeight: '500', marginBottom: '8px' }}>{type}</div>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {days.map((item, idx) => {
          const { bg, color } = dayTypeColors[item.type] || dayTypeColors['Not Declared'];
          return (
            <span key={idx} style={{
              background: bg,
              color: color,
              borderRadius: '50%',
              padding: '6px 12px',
              fontWeight: 'bold',
              fontSize: '1rem',
              border: '1px solid #eee'
            }}>{item.day}</span>
          );
        })}
      </div>
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '6px' }}>High quality rich text editor for the web</div>
      <div style={{ color: '#444', fontSize: '0.98rem' }}>{description}</div>
    </div>
  </div>
);

export default TaskBox;