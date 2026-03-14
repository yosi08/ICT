import { useState } from 'react'
import profileImg from '../assets/hero.png'

export default function SettingPage() {
  const [sensitivity, setSensitivity] = useState(20)
  const [curPw, setCurPw] = useState('')
  const [newPw, setNewPw] = useState('')

  return (
    <div className="setting-page">
      <div className="setting-layout">
        {/* Left: Mirror / Avatar */}
        <div className="setting-left">
          <div className="profile-avatar-ring medium">
            <img src={profileImg} alt="프로필" className="profile-avatar" />
          </div>
          <p className="dash-username">피곤한 임베과 학생</p>
          <p className="dash-bio">자기소개를 적어주세요...</p>
          <div className="mirror-frame">
            <svg viewBox="0 0 200 260" width="200" height="260" fill="none" stroke="#222" strokeWidth="2">
              {/* Outer arch */}
              <path d="M20 260 L20 110 Q20 20 100 20 Q180 20 180 110 L180 260 Z" />
              {/* Inner arch */}
              <path d="M35 255 L35 115 Q35 40 100 40 Q165 40 165 115 L165 255" />
              {/* Diamond accents */}
              <polygon points="180,130 188,140 180,150 172,140" fill="#222"/>
              <polygon points="20,230 28,240 20,250 12,240" fill="#222"/>
            </svg>
            <p className="mirror-label">（이름）과 연결중</p>
          </div>
        </div>

        {/* Right: Settings panels */}
        <div className="setting-right">
          {/* Profile photo */}
          <div className="setting-card">
            <div className="section-header">
              <NotebookIcon />
              <span>프로필 사진 등록 및 관리</span>
            </div>
            <div className="photo-upload-box">
              <span>사진</span>
            </div>
          </div>

          {/* Voice sensitivity */}
          <div className="setting-card">
            <div className="section-header">
              <NotebookIcon />
              <span>음성인식 감도 설정</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={sensitivity}
              onChange={e => setSensitivity(Number(e.target.value))}
              className="sensitivity-slider"
            />
          </div>

          {/* Password change */}
          <div className="setting-card">
            <div className="section-header">
              <NotebookIcon />
              <span>비밀번호 변경</span>
            </div>
            <div className="pw-form">
              <div className="pw-row">
                <label>현재 비밀번호</label>
                <input
                  type="password"
                  value={curPw}
                  onChange={e => setCurPw(e.target.value)}
                  className="pw-input"
                />
              </div>
              <div className="pw-row">
                <label>비밀번호 변경</label>
                <input
                  type="password"
                  value={newPw}
                  onChange={e => setNewPw(e.target.value)}
                  className="pw-input"
                />
              </div>
              <div className="pw-row justify-end">
                <button className="change-btn">변경</button>
              </div>
            </div>
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
