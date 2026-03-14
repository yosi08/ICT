type Page = 'dashboard' | 'diary' | 'stats' | 'setting'

interface BottomNavProps {
  current: Page
  onChange: (page: Page) => void
}

export default function BottomNav({ current, onChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      <button
        className={current === 'dashboard' ? 'active' : ''}
        onClick={() => onChange('dashboard')}
        aria-label="홈"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </button>
      <button
        className={current === 'diary' ? 'active' : ''}
        onClick={() => onChange('diary')}
        aria-label="다이어리"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="18" rx="3"/>
          <path d="M7 3v18M16 8h-5M16 12h-5M16 16h-5"/>
          <path d="M7 7h0M7 12h0M7 17h0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      <button
        className={current === 'stats' ? 'active' : ''}
        onClick={() => onChange('stats')}
        aria-label="통계"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      </button>
    </nav>
  )
}
