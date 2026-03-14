interface MiniCalendarProps {
  year: number
  month: number
  markedDays?: number[]
  selectedDay?: number
  onSelectDay?: (day: number) => void
}

const DOW = ['일', '월', '화', '수', '목', '금', '토']

export default function MiniCalendar({ year, month, markedDays = [], selectedDay, onSelectDay }: MiniCalendarProps) {
  const firstDay = new Date(year, month - 1, 1).getDay()
  const daysInMonth = new Date(year, month, 0).getDate()
  const cells: (number | null)[] = []

  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const rows: (number | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))

  return (
    <div className="mini-calendar">
      <p className="cal-title">{year}년 {month}월</p>
      <div className="cal-dow">
        {DOW.map(d => <span key={d}>{d}</span>)}
      </div>
      {rows.map((row, ri) => (
        <div key={ri} className="cal-row">
          {row.map((day, ci) => {
            const marked = day !== null && markedDays.includes(day)
            const selected = day === selectedDay
            return (
              <button
                key={ci}
                className={`cal-day ${marked ? 'marked' : ''} ${selected ? 'selected' : ''} ${day === null ? 'empty' : ''}`}
                onClick={() => day && onSelectDay?.(day)}
                disabled={day === null}
              >
                {marked ? (
                  <span className="day-dot">{day}</span>
                ) : (
                  <span>{day ?? ''}</span>
                )}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
