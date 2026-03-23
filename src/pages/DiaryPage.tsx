import { useState } from 'react'
import MiniCalendar from '../components/MiniCalendar'

type DiaryEntry = { text: string; tags: string[] }

const INITIAL_ENTRIES: Record<number, DiaryEntry> = {
  12: { text: '대따 피곤한하루...ㅠㅠㅠㅠ\n넘 피곤해서 암것도 안 하고 자고 싶은 하루였다\n침대가 나를 잡고 안 놔줘서 합법적으로 누워있고 싶다...', tags: ['#피곤'] },
  13: { text: '오늘은 그래도 조금 나은 하루였다. 수업은 힘들었지만 친구랑 밥을 먹어서 기분이 좋아졌다.', tags: ['#지침', '#행복'] },
  15: { text: '시험 공부 너무 하기 싫다... 하지만 해야지 뭐.', tags: ['#슬픔', '#지침'] },
}

const TODAY = 15

export default function DiaryPage() {
  const [entries, setEntries] = useState<Record<number, DiaryEntry>>(INITIAL_ENTRIES)
  const [selectedDay, setSelectedDay] = useState<number>(TODAY)
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState('')

  const markedDays = Object.keys(entries).map(Number)
  const entry = entries[selectedDay]

  const handleSelectDay = (day: number) => {
    setSelectedDay(day)
    setIsEditing(false)
    setDraft('')
  }

  const startEdit = () => {
    setDraft(entry?.text ?? '')
    setIsEditing(true)
  }

  const handleSave = () => {
    if (!draft.trim()) return
    setEntries(prev => ({
      ...prev,
      [selectedDay]: { text: draft.trim(), tags: prev[selectedDay]?.tags ?? [] },
    }))
    setIsEditing(false)
    setDraft('')
  }

  const handleCancel = () => {
    setIsEditing(false)
    setDraft('')
  }

  return (
    <div className="diary-page">
      <div className="diary-layout">
        {/* Left: Calendar */}
        <div className="diary-left">
          <div className="section-header" style={{ marginBottom: 12 }}>
            <NotebookIcon />
            <span>Diary</span>
          </div>
          <MiniCalendar
            year={2026}
            month={3}
            markedDays={markedDays}
            selectedDay={selectedDay}
            onSelectDay={handleSelectDay}
          />
        </div>

        {/* Right: Entry view / editor */}
        <div className="diary-right">
          <div className="diary-entry-block">
            <div className="diary-entry-header">
              <NotebookIcon />
              <span>3월 {selectedDay}일</span>
            </div>

            {isEditing ? (
              <div className="diary-editor-card">
                <textarea
                  className="diary-textarea"
                  value={draft}
                  onChange={e => setDraft(e.target.value)}
                  placeholder="오늘 있었던 일을 자유롭게 작성해보세요..."
                  autoFocus
                />
                <div className="diary-editor-actions">
                  <button className="diary-btn-cancel" onClick={handleCancel}>취소</button>
                  <button className="diary-btn-save" onClick={handleSave} disabled={!draft.trim()}>저장</button>
                </div>
              </div>
            ) : entry ? (
              <div className="diary-card">
                <p className="diary-text">{entry.text}</p>
                {entry.tags.length > 0 && (
                  <div className="tag-area">
                    <p className="tag-label">AI 감정 태그</p>
                    <div className="tags">
                      {entry.tags.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
                <button className="diary-btn-edit" onClick={startEdit}>수정하기</button>
              </div>
            ) : (
              <div className="diary-empty-card diary-empty-clickable" onClick={startEdit}>
                <PenLineIcon />
                <p>3월 {selectedDay}일의 일기가 없어요</p>
                <p>클릭해서 오늘의 일기를 작성해보세요</p>
              </div>
            )}
          </div>
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

function PenLineIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  )
}
