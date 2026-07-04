import { useState, useEffect, useCallback } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const navItems = [
  { href: '#hero', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#projects', label: '项目' },
  { href: '#contact', label: '联系' },
]

export default function Navbar({ lenisRef }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id),
      })
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -80 })
    }
    setMenuOpen(false)
  }, [lenisRef])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="logo-bracket">{'{'}</span>
          <span className="logo-text">Johnny</span>
          <span className="logo-bracket">{'}'}</span>
        </a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
