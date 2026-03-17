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
    return <StartPage onLogin={() => setLoggedIn(true)} />
  }

  const titles: Record<Page, string> = {
    dashboard: 'Dashboard',
    diary: 'Diary',
    stats: 'Stats',
    setting: 'Setting',
  }

  return (
    <div className="app-shell">
      <BottomNav current={page} onChange={setPage} />
      <div className="app-main">
        <div className="page-header">{titles[page]}</div>
        <div className="page-content">
          {page === 'dashboard' && <DashboardPage onSettingClick={() => setPage('setting')} />}
          {page === 'diary' && <DiaryPage />}
          {page === 'stats' && <StatsPage onSettingClick={() => setPage('setting')} />}
          {page === 'setting' && <SettingPage />}
        </div>
      </div>
    </div>
  )
}
