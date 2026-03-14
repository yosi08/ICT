import { useState } from 'react'
import MiniCalendar from '../components/MiniCalendar'

const DIARY_ENTRIES: Record<number, { text: string; tags: string[] }> = {
  12: { text: '대따 피곤한하루...ㅠㅠㅠㅠ\n넘 피곤해서 암것도 안 하고 자고 싶은 하루였다\n침대가 나를 잡고 안 놔줘서 합법적으로 누워있고 싶다...', tags: ['#피곤'] },
  13: { text: '오늘은 그래도 조금 나은 하루였다. 수업은 힘들었지만 친구랑 밥을 먹어서 기분이 좋아졌다.', tags: ['#지침', '#행복'] },
  15: { text: '시험 공부 너무 하기 싫다... 하지만 해야지 뭐.', tags: ['#슬픔', '#지침'] },
}

const TODAY = 15
const DISPLAY_DAYS = [13, 14, 15]

export default function DiaryPage() {
  const [onlyMarked, setOnlyMarked] = useState(false)
  const [selectedDay, setSelectedDay] = useState<number>(TODAY)
  const markedDays = Object.keys(DIARY_ENTRIES).map(Number)

  const displayDays = onlyMarked ? markedDays : DISPLAY_DAYS

  return (
    <div className="diary-page">
      <div className="diary-layout">
        {/* Left: Calendar */}
        <div className="diary-left">
          <div className="section-header" style={{ marginBottom: 12 }}>
            <NotebookIcon />
            <span>Diary</span>
            <label className="only-marked-label">
              <input
                type="checkbox"
                checked={onlyMarked}
                onChange={e => setOnlyMarked(e.target.checked)}
              />
              기록된 일기만 보기
            </label>
          </div>
          <MiniCalendar
            year={2026}
            month={3}
            markedDays={markedDays}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />
        </div>

        {/* Right: Diary entries */}
        <div className="diary-right">
          {displayDays.map(day => (
            <div key={day} className="diary-entry-block">
              <div className="diary-entry-header">
                <NotebookIcon />
                <span>3월 {day}일</span>
              </div>
              {DIARY_ENTRIES[day] ? (
                <div className="diary-card">
                  <p className="diary-text">{DIARY_ENTRIES[day].text}</p>
                  <div className="tag-area">
                    <p className="tag-label">AI 감정 태그</p>
                    <div className="tags">
                      {DIARY_ENTRIES[day].tags.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="diary-empty-card">
                  <p>3월 {day}일에 대한 기록이 없어요</p>
                  <p>일기를 쓰고 AI 감정 태그를 생성해보세요</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NotebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="18" rx="3"/>
      <path d="M7 3v18M16 8h-5M16 12h-5M16 16h-5"/>
    </svg>
  )
}
