import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import profileImg from '../assets/hero.png'

const lineData = [
  { day: '11일', value: 2 },
  { day: '12일', value: 1 },
  { day: '13일', value: 2.5 },
  { day: '14일', value: 2 },
  { day: '15일', value: 3.5 },
  { day: '16일', value: 5 },
  { day: '17일', value: 4 },
]

const pieData = [
  { name: '피곤', value: 25, color: '#e8a0b0' },
  { name: '슬픔', value: 15, color: '#c8b4d8' },
  { name: '지침', value: 20, color: '#b8d4d0' },
  { name: '화남', value: 10, color: '#a8c8e0' },
  { name: '행복', value: 20, color: '#d4c4e8' },
  { name: '기타', value: 10, color: '#f0e0e8' },
]

interface StatsPageProps {
  onSettingClick: () => void
}

export default function StatsPage({ onSettingClick }: StatsPageProps) {
  return (
    <div className="stats-page">
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

      <div className="stats-body">
        {/* Line Chart */}
        <div className="stats-chart-block">
          <p className="stats-chart-title">2026년 3월의 감정 그래프</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={lineData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#b8a0d0" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="stats-chart-block">
          <p className="stats-chart-title">2026년 3월의 감정 파이</p>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                strokeWidth={2}
                stroke="#fff"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                iconType="circle"
                iconSize={8}
                formatter={(value) => <span style={{ fontSize: 12, color: '#888' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
