import React from "react";
import "../styles/AdditionalControls.css"; // create this CSS file

const AdditionalControls = () => {
  return (
    <div className="additional-controls">
      {/* Comment Section */}
      <div className="form-group">
        <label htmlFor="comment">Comment (Max 500 Chars)</label>
        <textarea
          id="comment"
          maxLength="500"
          placeholder="xxx-xxx-xx-xxx-x"
        />
      </div>

      {/* Action Buttons */}
      <div className="button-group">
        <button type="button" className="btn btn-draft">
          Save as Draft
        </button>
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </div>

      {/* Transfer Workflow */}
      <div className="workflow">
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" />
          <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" />
          <path d="M17.41 10.59L16 9.17L12 13.17L8 9.17L6.59 10.59L12 16L17.41 10.59Z" />
        </svg>
        <span>Transfer Workflow</span>
        <svg
          className="icon"
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
