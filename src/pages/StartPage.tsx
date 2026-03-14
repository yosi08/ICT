import profileImg from '../assets/hero.png'

interface StartPageProps {
  onLogin: () => void
}

export default function StartPage({ onLogin }: StartPageProps) {
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
        <div className="hearts" onClick={onLogin}>
          {[0, 1, 2, 3].map(i => (
            <svg key={i} width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}
