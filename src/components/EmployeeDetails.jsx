import React from 'react';
import TaskBox from './TaskBox.jsx';

const EmployeeDetails = ({ name, number, tasks }) => (
  <div style={{ marginBottom: '48px', textAlign: 'left', marginLeft: '8px' }}>
    <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#222', marginBottom: '8px' }}>
      {name} <span style={{ fontWeight: 'normal', color: '#888', fontSize: '1.1rem' }}>({number})</span>
    </div>
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '16px' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ background: '#C8F7C5', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-block' }}></span> Work From Office</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ background: '#D6E6FF', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-block' }}></span> Work From Home</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ background: '#FFE6E6', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-block' }}></span> Leave</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ background: '#FFF7CC', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-block' }}></span> Not Declared</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ background: '#B3E5FC', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-block' }}></span> Holiday</span>
    </div>
    {tasks.map((task, idx) => (
      <TaskBox key={idx} {...task} />
    ))}
  </div>
);

export default EmployeeDetails;