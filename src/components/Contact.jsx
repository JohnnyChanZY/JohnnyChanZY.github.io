const contactLinks = [
  {
    href: 'mailto:johnny@example.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
    label: 'johnny@example.com',
  },
  {
    href: 'https://github.com/johnny',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: 'GitHub',
    target: '_blank',
  },
  {
    href: 'https://twitter.com/johnny',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    label: 'Twitter',
    target: '_blank',
  },
]

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      {/* Geometric decorations */}
      <svg className="section-geo" width="90" height="90" viewBox="0 0 90 90" style={{ position: 'absolute', top: '12%', left: '6%', pointerEvents: 'none' }}>
        <rect className="section-geo-shape" x="15" y="15" width="60" height="60" fill="none" stroke="var(--yellow)" strokeWidth="1.5" opacity="0.18" transform="rotate(45 45 45)" />
      </svg>
      <svg className="section-geo" width="70" height="70" viewBox="0 0 70 70" style={{ position: 'absolute', bottom: '20%', right: '8%', pointerEvents: 'none' }}>
        <circle className="section-geo-shape" cx="35" cy="35" r="6" fill="var(--red)" opacity="0.2" />
        <circle className="section-geo-shape" cx="35" cy="35" r="20" fill="none" stroke="var(--red)" strokeWidth="1" opacity="0.12" />
        <circle className="section-geo-shape" cx="35" cy="35" r="30" fill="none" stroke="var(--red)" strokeWidth="0.8" opacity="0.08" />
      </svg>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">联系我</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <p className="contact-desc">有兴趣合作或只是想打个招呼？随时联系我！</p>
          <div className="contact-links">
            {contactLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="contact-item"
                target={link.target}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
