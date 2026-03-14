import MiniCalendar from '../components/MiniCalendar'
import profileImg from '../assets/hero.png'

const DIARY_ENTRIES: Record<number, { text: string; tags: string[] }> = {
  12: { text: '대따 피곤한하루...ㅠㅠㅠㅠ\n넘 피곤해서 암것도 안 하고 자고 싶은 하루였다\n침대가 나를 잡고 안 놔줘서 합법적으로 누워있고 싶다...', tags: ['#피곤'] },
  13: { text: '오늘은 그래도 조금 나은 하루였다. 수업은 힘들었지만 친구랑 밥을 먹어서 기분이 좋아졌다.', tags: ['#지침', '#행복'] },
  15: { text: '시험 공부 너무 하기 싫다... 하지만 해야지 뭐.', tags: ['#슬픔', '#지침'] },
}

const TODO_ITEMS = {
  Study: [
    { id: 1, text: 'MQTT 공부하기', done: true },
    { id: 2, text: '전자회로, 논리연산 복습하기', done: false },
  ],
  Project: [
    { id: 3, text: 'MQTT 공부하기', done: true },
    { id: 4, text: '전자회로, 논리연산 복습하기', done: false },
  ],
}

interface DashboardPageProps {
  onSettingClick: () => void
}

export default function DashboardPage({ onSettingClick }: DashboardPageProps) {
  const today = 15
  const diaryEntry = DIARY_ENTRIES[today] ?? DIARY_ENTRIES[12]

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dash-header">
        <div className="dash-profile">
          <div className="profile-avatar-ring small">
            <img src={profileImg} alt="프로필" className="profile-avatar" />
          </div>
          <div>
            <p className="dash-username">피곤한 임베과 학생</p>
            <p className="dash-bio">자기소개를 적어주세요...</p>
          </div>
        </div>
        <button className="icon-btn" onClick={onSettingClick} aria-label="설정">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="dash-body">
        {/* Left: Calendar */}
        <MiniCalendar
          year={2026}
          month={3}
          markedDays={Object.keys(DIARY_ENTRIES).map(Number)}
          selectedDay={today}
        />

        {/* Right: Diary + Todo */}
        <div className="dash-right">
          {/* Diary card */}
          <div className="section-card">
            <div className="section-header">
              <NotebookIcon />
              <span>Diary</span>
            </div>
            <div className="diary-card">
              <p className="diary-text">{diaryEntry.text}</p>
              <div className="tag-area">
                <p className="tag-label">AI 감정 태그</p>
                <div className="tags">
                  {diaryEntry.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* To-Do card */}
          <div className="section-card">
            <div className="section-header">
              <CheckIcon />
              <span>To-Do</span>
            </div>
            {Object.entries(TODO_ITEMS).map(([category, items]) => (
              <div key={category} className="todo-group">
                <div className="todo-category">
                  <PenIcon />
                  <span>{category}</span>
                  <button className="icon-btn small" aria-label="추가">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
                    </svg>
                  </button>
                </div>
                {items.map(item => (
                  <label key={item.id} className="todo-item">
                    <input type="checkbox" defaultChecked={item.done} />
                    <span>{item.text}</span>
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function NotebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="18" rx="3"/>
      <path d="M7 3v18M16 8h-5M16 12h-5M16 16h-5"/>
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="16" rx="2"/>
      <path d="M7 10l3 3 7-6"/>
    </svg>
  )
}
function PenIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  )
}
