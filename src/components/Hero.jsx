export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-ring-wrapper">
        {/* C-shaped ring — opening faces up initially */}
        <svg className="ring-svg" viewBox="0 0 800 800" fill="none">
          {/* Main C-ring group — rotates at base speed */}
          <g className="ring-main">
            <circle
              cx="400" cy="400" r="320"
              stroke="var(--brown)" strokeWidth="120" fill="none" opacity="0.4"
              strokeDasharray="1508 503"
              strokeDashoffset="251"
              strokeLinecap="butt"
            />
            {/* Accent dots at the ring opening */}
            <circle cx="220" cy="740" r="10" fill="var(--red)" opacity="0.75" />
            <circle cx="580" cy="740" r="10" fill="var(--blue)" opacity="0.75" />
          </g>

          {/* Satellite ring + dots — rotates faster */}
          <g className="ring-satellite">
            <circle cx="400" cy="400" r="420" stroke="var(--brown-light)" strokeWidth="1.5" fill="none" opacity="0.15" />
            <circle cx="400" cy="20" r="4" fill="var(--yellow)" opacity="0.5" />
            <circle cx="780" cy="500" r="3.5" fill="var(--red)" opacity="0.4" />
            <circle cx="120" cy="600" r="3" fill="var(--blue)" opacity="0.45" />
            <circle cx="650" cy="120" r="5" fill="var(--brown-light)" opacity="0.35" />
            <circle cx="150" cy="250" r="3" fill="var(--yellow)" opacity="0.4" />
            <circle cx="700" cy="680" r="4" fill="var(--red)" opacity="0.3" />
          </g>

          {/* Inner arcs — rotates slower, opposite direction */}
          <g className="ring-arcs">
            <path
              d="M 200 300 A 250 250 0 0 1 350 120"
              stroke="var(--blue)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.2"
            />
            <path
              d="M 550 700 A 250 250 0 0 1 620 500"
              stroke="var(--yellow)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.18"
            />
          </g>
        </svg>

        {/* Title positioned at the ring's opening (bottom gap) */}
        <div className="ring-title">
          <h1 className="hero-title">
            <span className="title-line">Hi, I'm <span className="highlight-red">Johnny</span></span>
            <span className="title-line">A <span className="highlight-blue">Developer</span> &</span>
            <span className="title-line"><span className="highlight-yellow">Creator</span></span>
          </h1>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-tag">
          <span className="tag-line"></span>
          <span className="tag-text">Welcome to my space</span>
          <span className="tag-line"></span>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">查看项目</a>
          <a href="#about" className="btn btn-outline">了解更多</a>
        </div>
      </div>

      <div className="hero-visual">
        <svg className="hero-svg" viewBox="0 0 400 400">
          <rect className="hero-geo rect-1" x="50" y="50" width="120" height="120" rx="4" />
          <rect className="hero-geo rect-2" x="200" y="30" width="80" height="80" rx="4" />
          <circle className="hero-geo circle-1" cx="300" cy="200" r="50" />
          <polygon className="hero-geo tri-1" points="100,300 160,220 220,300" />
          <line className="hero-geo line-1" x1="280" y1="280" x2="380" y2="350" />
          <line className="hero-geo line-2" x1="50" y1="200" x2="200" y2="180" />
          <circle className="hero-geo dot-1" cx="350" cy="100" r="6" />
          <circle className="hero-geo dot-2" cx="80" cy="380" r="4" />
          <rect className="hero-geo rect-3" x="280" y="320" width="40" height="40" transform="rotate(45 300 340)" />
        </svg>
      </div>
    </section>
  )
}
