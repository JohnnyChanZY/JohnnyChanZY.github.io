export default function GeoBackground() {
  return (
    <div className="geo-bg" aria-hidden="true">
      <svg className="geo-lines" viewBox="0 0 1440 900" preserveAspectRatio="none">
        {/* Grid lines */}
        <line className="grid-line" x1="200" y1="0" x2="200" y2="900" />
        <line className="grid-line" x1="400" y1="0" x2="400" y2="900" />
        <line className="grid-line" x1="600" y1="0" x2="600" y2="900" />
        <line className="grid-line" x1="800" y1="0" x2="800" y2="900" />
        <line className="grid-line" x1="1000" y1="0" x2="1000" y2="900" />
        <line className="grid-line" x1="1200" y1="0" x2="1200" y2="900" />
        <line className="grid-line" x1="0" y1="200" x2="1440" y2="200" />
        <line className="grid-line" x1="0" y1="400" x2="1440" y2="400" />
        <line className="grid-line" x1="0" y1="600" x2="1440" y2="600" />
        {/* Diagonal decorative lines */}
        <line className="accent-line red" x1="0" y1="300" x2="500" y2="0" />
        <line className="accent-line blue" x1="1440" y1="200" x2="900" y2="900" />
        <line className="accent-line yellow" x1="700" y1="0" x2="1440" y2="500" />
        {/* Geometric shapes */}
        <polygon className="geo-shape shape-triangle" points="100,150 150,80 200,150" />
        <circle className="geo-shape shape-circle" cx="1300" cy="120" r="40" />
        <rect className="geo-shape shape-rect" x="1250" y="700" width="60" height="60" transform="rotate(45 1280 730)" />
        <polygon className="geo-shape shape-diamond" points="80,600 120,560 160,600 120,640" />
      </svg>
    </div>
  )
}
