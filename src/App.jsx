import { useState } from 'react'
import './App.css'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const YEARS = ['2023', '2024', '2025', '2026']

const TEAMS = [
  'AC Operations',
  'AC Projects',
  'AC Training TM',
  'Accessibility 2023',
  'Architectural Runway',
  'Architecture TCG',
  'Audit Activities',
  'Authentication Center Analyst',
  'Binder POS',
  'Business Intelligence',
  'Catalog Operations',
  'Catalog Orders',
  'Change Management',
  'Cloud Operations',
  'Cloud Platform Services',
  'CloudOps IDC',
  'Content And Community',
  'CORP IT',
  'CP Migration',
  'CX Product',
  'Customer Experience',
  'Customer Experience Quality & Learning',
  'Data Operations',
  'Data Warehouse Services',
  'Design Language System',
  'Developer Experience',
  'Direct Branded Supplies',
  'Dominaria Risk Reduction',
  'Emissaries',
  'Employee Communications',
  'ePMO Continuous Improvement',
  "Fett's Boba Shack",
  'FOUNDATIONS',
  'Framework and Agile Leveling Up',
  'Front Line Engineering',
  'Fulfillment Solutions UXD',
  'Global OpEx',
  'Golden Eagle',
  'Identity & Access Management',
  'In Store Product Discovery',
  'In Store Selling',
  'In-Store Portfolio',
  'Incident Management',
  'Info Security',
  'Ingest & Pricing',
  'Internal Tools',
  'Inventory Management System',
  'IRIS',
  'Jira Administration',
  'Listings Inventory PricePoints',
  'Little Bobby Tables',
  'Logistics',
  'MarTech',
  'Marketing',
  'Marketplace',
  'Marketplace Holding',
  'Marketplace Purchase',
  'New Vertical Expansion',
  'NVE Planning',
  'OnLine Selling',
  'Order Management',
  'Payments & Fees Team',
  'Pillar 1 - Project Intake Board',
  'Platform',
  'Portfolio',
  'Product Design Team',
  'ROCA Cart',
  'Release Engineering',
  'Search Services',
  'Seller Advisory Programs',
  'Seller Marketing',
  'Seller Operations',
  'SGS Team',
  'Site Reliability Engineering',
  'Social Media Marketing',
  'Submission',
  'Technical Product Implementation',
  'Vendor Alignment',
]

const FORMATS = ['PDF', 'PPT']

const currentMonth = MONTHS[new Date().getMonth()]
const currentYear = String(new Date().getFullYear())

export default function App() {
  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)
  const [team, setTeam] = useState(TEAMS[0])
  const [format, setFormat] = useState(FORMATS[0])

  function handleGenerate() {
    console.log({ month, year, team, format })
  }

  return (
    <div className="page">
      <h1 className="title">Monthly Progress Report Generator</h1>

      <div className="dropdowns">
        <label className="dropdown-group">
          <span className="dropdown-label">Month</span>
          <select value={month} onChange={e => setMonth(e.target.value)}>
            {MONTHS.map(m => <option key={m}>{m}</option>)}
          </select>
        </label>

        <label className="dropdown-group">
          <span className="dropdown-label">Year</span>
          <select value={year} onChange={e => setYear(e.target.value)}>
            {YEARS.map(y => <option key={y}>{y}</option>)}
          </select>
        </label>

        <label className="dropdown-group">
          <span className="dropdown-label">Team</span>
          <select value={team} onChange={e => setTeam(e.target.value)}>
            {TEAMS.map(t => <option key={t}>{t}</option>)}
          </select>
        </label>

        <label className="dropdown-group">
          <span className="dropdown-label">Format</span>
          <select value={format} onChange={e => setFormat(e.target.value)}>
            {FORMATS.map(f => <option key={f}>{f}</option>)}
          </select>
        </label>
      </div>

      <button className="generate-btn" onClick={handleGenerate}>
        Generate Report
      </button>
    </div>
  )
}
