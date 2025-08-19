import React from 'react';
import '../styles/ProfileCard.css';

// The Header component for navigation and weekly activities title.
const Header = () => (
  <div className="header-container">
    {/* My Workspace link, now directly aligned to the left */}
    <a href="#" className="workspace-link">My Workspace &gt; OS Weekly Activities</a>
    
    {/* The main title and status, aligned to the left */}
    <div className="title-container">
      <svg className="back-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
      </svg>
      <h1 className="main-title">OS Weekly Activities</h1>
      <span className="status-text"> - RM Approved</span>
    </div>
  </div>
);

// The ProfileCard component displays user information in a clean, responsive layout.
// It's designed to accept user data as props.
const ProfileCard = ({ profileData }) => {
  // A safety check to ensure profileData is not null or undefined.
  // This prevents the application from crashing if data isn't loaded yet.
  if (!profileData) {
    return null;
  }
  
  // Destructure the profileData object for easier access to properties.
  const {
    name,
    genId,
    email,
    designation,
    division,
    manager,
    profileImageUrl
  } = profileData;

  return (
    <div className="profile-card">
      {/* Container for the profile image and basic contact info */}
      <div className="profile-info-container">
        {/* Profile picture with a circular shape */}
        <div className="profile-image-wrapper">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="profile-image"
          />
        </div>
        
        {/* Container for name, ID, and email */}
        <div className="profile-text-content">
         <p className="profile-name-and-id ">
            {name} &bull; Gen ID: <span className="profile-meta-value">{genId}</span>
          </p>
          <p className="profile-meta profile-email">{email}</p>
        </div>
      </div>

      {/* Vertical separator visible only on medium and larger screens */}
      <div className="separator"></div>
      
      {/* Grid container for additional details. It stacks on small screens. */}
      <div className="details-grid">
        {/* Designation section */}
        <div className="detail-section">
          <p className="detail-label">Designation</p>
          <p className="detail-value">{designation}</p>
        </div>

        {/* Division section */}
        <div className="detail-section">
          <p className="detail-label">Division</p>
          <p className="detail-value">
            {division}
          </p>
        </div>

        {/* Manager section - no right border */}
        <div className="detail-section-no-border">
          <p className="detail-label">Manager</p>
          <p className="detail-value">{manager}</p>
        </div>
      </div>
    </div>
  );
};

// The main App component that renders the ProfileCard with sample data.
const App = () => {
  // Sample data to be passed into the ProfileCard component.
  // In a real application, this data would likely come from a state or an API call.
  const sampleProfileData = {
    name: "Manoj Nandan M",
    genId: "25514678",
    email: "Manoj.Nandan@partner.samsung.com",
    designation: "Outsourcing",
    division: "Tech Strategy Team \\ Smart Infra Group \\ Information System & AI Tools",
    manager: "Ravindra S R (98786669)",
    profileImageUrl: "https://placehold.co/200x200/4F46E5/FFFFFF?text=MN", // A placeholder image URL
  };

  return (
    // Main application container with a dark background to match the card's theme.
    // The min-h-screen and flex classes center the content vertically and horizontally.
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Header />
      <ProfileCard profileData={sampleProfileData} />
    </div>
  );
};

export default App;
