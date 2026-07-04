const aboutCards = [
  {
    icon: <polygon points="30,5 55,50 5,50" fill="none" stroke="currentColor" strokeWidth="2" />,
    title: '开发者',
    desc: '专注于前端开发与全栈技术，热爱用代码构建优雅的解决方案。',
  },
  {
    icon: <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="2" />,
    title: '设计师',
    desc: '追求简洁与美感，相信好的设计能让技术变得更有温度。',
  },
  {
    icon: <rect x="8" y="8" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 30 30)" />,
    title: '探索者',
    desc: '对新技术充满好奇，持续学习，勇于尝试不同的可能性。',
  },
]

export default function About() {
  return (
    <section className="section about" id="about">
      {/* Geometric decorations */}
      <svg className="section-geo" width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', top: '10%', left: '5%', pointerEvents: 'none' }}>
        <polygon className="section-geo-shape" points="60,10 110,100 10,100" fill="none" stroke="var(--red)" strokeWidth="1.5" opacity="0.2" />
      </svg>
      <svg className="section-geo" width="80" height="80" viewBox="0 0 80 80" style={{ position: 'absolute', top: '20%', right: '8%', pointerEvents: 'none' }}>
        <circle className="section-geo-shape" cx="40" cy="40" r="30" fill="none" stroke="var(--blue)" strokeWidth="1.5" opacity="0.15" />
      </svg>
      <svg className="section-geo" width="60" height="60" viewBox="0 0 60 60" style={{ position: 'absolute', bottom: '15%', right: '12%', pointerEvents: 'none' }}>
        <rect className="section-geo-shape" x="10" y="10" width="40" height="40" fill="none" stroke="var(--yellow)" strokeWidth="1.5" opacity="0.18" transform="rotate(45 30 30)" />
      </svg>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">关于我</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid">
          {aboutCards.map((card, i) => (
            <div className="about-card geo-card" key={i}>
              <div className="card-icon">
                <svg viewBox="0 0 60 60">{card.icon}</svg>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
