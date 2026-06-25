import { useState } from 'react'
import './App.css'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const YEARS = ['2023', '2024', '2025', '2026']

const TEAMS = [
  'Buyer Engagement',
  'CLIP',
  'CORE',
  'ROCA',
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
