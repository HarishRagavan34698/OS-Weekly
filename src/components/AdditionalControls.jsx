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
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
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
        <a href="#">View Policies</a>
      </div>
    </div>
  );
};

export default AdditionalControls;
