import { useState } from 'react'
import StartPage from './pages/StartPage'
import DashboardPage from './pages/DashboardPage'
import DiaryPage from './pages/DiaryPage'
import StatsPage from './pages/StatsPage'
import SettingPage from './pages/SettingPage'
import BottomNav from './components/BottomNav'
import './App.css'

type Page = 'dashboard' | 'diary' | 'stats' | 'setting'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [page, setPage] = useState<Page>('dashboard')

  if (!loggedIn) {
    return (
      <div className="app-shell">
        <div className="page-title">Start</div>
        <StartPage onLogin={() => setLoggedIn(true)} />
      </div>
    )
  }

  const titles: Record<Page, string> = {
    dashboard: 'Dashboard',
    diary: 'Diary',
    stats: 'Dashboard',
    setting: 'Setting',
  }

  return (
    <div className="app-shell">
      <div className="page-title">{titles[page]}</div>
      <div className="page-content">
        {page === 'dashboard' && <DashboardPage onSettingClick={() => setPage('setting')} />}
        {page === 'diary' && <DiaryPage />}
        {page === 'stats' && <StatsPage onSettingClick={() => setPage('setting')} />}
        {page === 'setting' && <SettingPage />}
      </div>
      <BottomNav current={page === 'setting' ? 'dashboard' : page} onChange={setPage} />
    </div>
  )
}
