import React from "react";
import TaskBox from "./TaskBox.jsx";
import "../styles/EmployeeDetails.css";

const EmployeeDetails = ({ name, number, tasks }) => (
  <div className="employee-card">
    {/* Down arrow in top-right corner */}
    <div className="employee-collapse">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="#6b7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* Header */}
    <div className="employee-header">
      {name} <span>({number})</span>
    </div>

    {/* Status indicators */}
    <div className="employee-status">
      <span className="status-item">
        <span className="status-dot status-office"></span> Work From Office
      </span>
      <span className="status-item">
        <span className="status-dot status-home"></span> Work From Home
      </span>
      <span className="status-item">
        <span className="status-dot status-leave"></span> Leave
      </span>
      <span className="status-item">
        <span className="status-dot status-undeclared"></span> Not Declared
      </span>
      <span className="status-item">
        <span className="status-dot status-holiday"></span> Holiday
      </span>
    </div>

    {/* Table Headers */}
    <div className="task-table-header">
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2V5M16 2V5M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
            stroke="#0288d1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Declaration Date</span>
      </div>
      <div style={{ flex: 1 }}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
            stroke="#0277bd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2V8H20"
            stroke="#0277bd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Task Description</span>
      </div>
    </div>

    {/* Tasks */}
    {tasks.map((task, idx) => (
      <TaskBox key={idx} {...task} />
    ))}
  </div>
);

export default EmployeeDetails;
