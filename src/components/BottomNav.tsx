import profileImg from '../assets/hero.png'

type Page = 'dashboard' | 'diary' | 'stats' | 'setting'

interface BottomNavProps {
  current: Page
  onChange: (page: Page) => void
}

export default function BottomNav({ current, onChange }: BottomNavProps) {
  return (
    <nav className="side-nav">
      <div className="side-nav-brand">🌸 ICT Diary</div>

      <div className="side-nav-items">
        <button
          className={current === 'dashboard' ? 'active' : ''}
          onClick={() => onChange('dashboard')}
        >
          <HomeIcon />
          <span>Dashboard</span>
        </button>

        <button
          className={current === 'diary' ? 'active' : ''}
          onClick={() => onChange('diary')}
        >
          <DiaryIcon />
          <span>Diary</span>
        </button>

        <button
          className={current === 'stats' ? 'active' : ''}
          onClick={() => onChange('stats')}
        >
          <StatsIcon />
          <span>Stats</span>
        </button>

        <button
          className={current === 'setting' ? 'active' : ''}
          onClick={() => onChange('setting')}
        >
          <SettingIcon />
          <span>Setting</span>
        </button>
      </div>

      <div className="side-nav-profile">
        <div className="profile-avatar-ring xs">
          <img src={profileImg} alt="프로필" className="profile-avatar" />
        </div>
        <div className="side-nav-profile-info">
          <p style={{ fontSize: 13, fontWeight: 600, color: '#333' }}>피곤한 임베과 학생</p>
          <p style={{ fontSize: 11, color: '#888' }}>자기소개를 적어주세요...</p>
        </div>
      </div>
    </nav>
  )
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function DiaryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="18" rx="3"/>
      <path d="M7 3v18M16 8h-5M16 12h-5M16 16h-5"/>
    </svg>
  )
}

function StatsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
}

function SettingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  )
}
