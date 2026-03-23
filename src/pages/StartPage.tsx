import { useState, useRef } from 'react'
import profileImg from '../assets/hero.png'

const PASSWORD = '1234'

interface StartPageProps {
  onLogin: () => void
}

export default function StartPage({ onLogin }: StartPageProps) {
  const [input, setInput] = useState('')
  const [shake, setShake] = useState(false)
  const loginCalled = useRef(false)

  // 앞에서부터 맞는 글자 수
  const matchLen = (() => {
    let count = 0
    for (let i = 0; i < input.length && i < PASSWORD.length; i++) {
      if (input[i] === PASSWORD[i]) count++
      else break
    }
    return count
  })()

  const allFilled = input === PASSWORD
  const heartsFilled = allFilled ? 4 : Math.floor((matchLen / PASSWORD.length) * 4)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInput(val)

    if (val === PASSWORD && !loginCalled.current) {
      loginCalled.current = true
      setTimeout(onLogin, 700)
    } else if (val.length >= PASSWORD.length && val !== PASSWORD) {
      // 틀린 비밀번호 입력 시 흔들기
      setShake(true)
      setTimeout(() => {
        setShake(false)
        setInput('')
        loginCalled.current = false
      }, 500)
    }
  }

  return (
    <div className="start-page">
      <div className="start-content">
        <div className="start-profile">
          <div className="profile-avatar-ring">
            <img src={profileImg} alt="프로필" className="profile-avatar" />
          </div>
          <span className="start-username">피곤한 임베과 학생</span>
        </div>
        <p className="start-login-text">으로 로그인 중입니다</p>
        <input
          type="password"
          value={input}
          onChange={handleChange}
          className={`start-password-input${shake ? ' shake' : ''}`}
          placeholder="비밀번호 입력"
          autoFocus
          maxLength={PASSWORD.length + 2}
        />
        <div className="hearts">
          {[0, 1, 2, 3].map(i => (
            <svg
              key={i}
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill={i < heartsFilled ? '#e06c75' : 'none'}
              stroke={i < heartsFilled ? '#e06c75' : '#aaa'}
              strokeWidth="1.4"
              className={`heart-svg${i < heartsFilled ? ' heart-filled' : ''}`}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}
