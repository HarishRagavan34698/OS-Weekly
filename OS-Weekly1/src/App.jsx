import { useState } from 'react'
import ProfileCard from './components/ProfileCard.jsx';
import './styles/App.css'
import './styles/Arrow.css';
import Navbar from './components/Navbar.jsx';
import AdditionalControls from "./components/AdditionalControls"; 
import RM_Evaluation from './components/RM_Evaluation.jsx';
import EmployeeDetails from './components/EmployeeDetails.jsx';
import clipboardIcon from './assets/svg/clipboard.svg';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" }
  ];

  const Image = ({ src, alt, width, height, style }) => {
    return (
        <img src={src} alt={alt} width={width} height={height} style={style} />
    );
};

  // Sample data for ProfileCard
  const sampleProfileData = {
    name: "Manoj Kandan M",
    genId: "25504878",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    manager: "Ravindra S R (06786669)",
    profileImageUrl: "https://placehold.co/200x200/4F46E5/FFFFFF?text=MK", // A placeholder image URL
  };

  return (
    <div className="app-container">
      <Navbar 
        logo="My App"
        navItems={navItems}
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <div className="main-content">
        <ProfileCard profileData={sampleProfileData} />

        <div className="required-info-section">
          {/* Clipboard SVG icon */}
          <img src="C:\SAMSUNG_PRISM\OS-Weekly\OS-Weekly1\src\assets\svg\clipboard.svg"/>

          <span className="required-info-text">Required Information</span>
        </div>

        <div className="content-wrapper">
          <RM_Evaluation>
            <EmployeeDetails
              name="Kumar Gautham"
              number="21505994"
              tasks={[
                { declarationDate: "02 Jun 2025 - 06 Jun 2025", type: "Hybrid", days: [{day:2,type:'Work From Office'},{day:3,type:'Work From Home'},{day:4,type:'Work From Office'},{day:5,type:'Work From Office'},{day:6,type:'Work From Home'}], description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { declarationDate: "07 Jun 2025 - 11 Jun 2025", type: "Hybrid", days: [{day:7,type:'Work From Office'},{day:8,type:'Work From Home'},{day:9,type:'Work From Office'},{day:10,type:'Leave'},{day:11,type:'Holiday'}], description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { declarationDate: "14 Jun 2025 - 18 Jun 2025", type: "Hybrid", days: [{day:14,type:'Work From Office'},{day:15,type:'Work From Home'},{day:16,type:'Work From Office'},{day:17,type:'Not Declared'},{day:18,type:'Work From Office'}], description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." }
              ]}
            />
            <EmployeeDetails
              name="Priya Sharma"
              number="21505995"
              tasks={[
                { declarationDate: "02 Jun 2025 - 06 Jun 2025", type: "Hybrid", days: [{day:2,type:'Work From Home'},{day:3,type:'Work From Home'},{day:4,type:'Work From Office'},{day:5,type:'Leave'},{day:6,type:'Holiday'}], description: "Priya's work details for the week. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { declarationDate: "07 Jun 2025 - 11 Jun 2025", type: "Hybrid", days: [{day:7,type:'Work From Home'},{day:8,type:'Work From Office'},{day:9,type:'Work From Office'},{day:10,type:'Not Declared'},{day:11,type:'Work From Office'}], description: "Priya's work details for the week. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { declarationDate: "14 Jun 2025 - 18 Jun 2025", type: "Hybrid", days: [{day:14,type:'Work From Home'},{day:15,type:'Work From Office'},{day:16,type:'Leave'},{day:17,type:'Work From Home'},{day:18,type:'Work From Office'}], description: "Priya's work details for the week. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." }
              ]}
            />
            <AdditionalControls />
          </RM_Evaluation>

        </div>
      </div>
    </div>
  )
}

export default App
