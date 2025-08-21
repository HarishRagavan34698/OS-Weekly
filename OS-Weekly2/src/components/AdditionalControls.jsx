import React from "react";
import "../styles/AdditionalControls.css";



const AdditionalControls = () => {
  return (
    <div className="additional-controls">
      {/* Top Section - Save as Draft button positioned top right */}
      <div className="top-section">
        <button type="button" className="btn btn-draft">
          Save as Draft
        </button>
      </div>

      {/* Comment Section */}
      <div className="comment-section">
        <label htmlFor="comment">Comment (Max 500 Chars)</label>
        <div className="textarea-container">
          <textarea
            id="comment"
            maxLength="500"
            placeholder="XXX-XXX-XX-XXX-X"
          />
        </div>
        <div className="submit-button-container">
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </div>
      </div>

      {/* Transfer Workflow */}
      <div className="workflow">
        <div className="workflow-content">
          <svg
    className="workflow-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.59L16.59 13 18 14.41l-5 5-5-5L7.41 13 11 16.59V8h2z"/>
  </svg>
          <span>Transfer Workflow</span>
        </div>
        <svg
          className="chevron-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" />
        </svg>
      </div>

      {/* Policies Link */}
      <div className="policies">
        
      </div>
    </div>
  );
};

export default AdditionalControls;
