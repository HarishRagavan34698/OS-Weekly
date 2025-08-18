import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import './styles/Arrow.css';
import Navbar from './components/Navbar.jsx';
import TabArrow from './components/TabArrow.jsx';
import RM_Evaluation from './components/RM_Evaluation.jsx';
import TaskBox from './components/TaskBox.jsx';
import EmployeeDetails from './components/EmployeeDetails.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" }
  ];

  return (
    <>
      <Navbar 
        logo="My App"
        navItems={navItems}
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <div className="breadcrumb-sidebar">
        <div className="breadcrumb-back">←</div>
        My Workspace &gt; OS Weekly Activities
      </div>
      <TabArrow /> {/* <-- Add this line to show the arrow below the breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '32px 0 0 32px' }}>
        {/* Clipboard SVG icon */}
        <svg width="40" height="40" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="32" height="36" rx="4" fill="#5EDC1F"/>
          <rect x="16" y="8" width="16" height="6" rx="2" fill="#5EDC1F"/>
          <rect x="16" y="22" width="16" height="4" rx="2" fill="#fff"/>
          <rect x="16" y="30" width="16" height="4" rx="2" fill="#fff"/>
          <rect x="16" y="38" width="10" height="4" rx="2" fill="#fff"/>
        </svg>
        <span style={{ fontWeight: 'bold', fontSize: '1rem', color: '#333' }}>Required Information</span>
      </div>
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
      </RM_Evaluation>
    </>
  )
}

export default App
