import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GeoBackground from './components/GeoBackground'
import FloatingShapes from './components/FloatingShapes'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // Initialize GSAP animations after a tick so DOM is ready
    requestAnimationFrame(() => {
      initRingScrollAnimation()
      initHeroAnimation()
      initGeoLineAnimation()
      initFloatingShapes()
      initSectionGeoAnimations()
      initProjectsScroll()
      initScrollAnimations()
    })

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <>
      <GeoBackground />
      <FloatingShapes />
      <Navbar lenisRef={lenisRef} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

/* ============================================
   C-Ring Scroll Animation
   ============================================ */
function initRingScrollAnimation() {
  const ring = document.querySelector('.ring-svg')
  const heroContent = document.querySelector('.hero-content')
  if (!ring || !heroContent) return

  const scrollTriggerConfig = {
    trigger: '.hero',
    start: 'top top',
    end: '80% top',
    scrub: 1,
  }

  // Main ring — base rotation speed
  gsap.to(ring, {
    scrollTrigger: scrollTriggerConfig,
    rotation: 180,
    scale: 2.5,
    opacity: 0,
    ease: 'none',
  })

  // Satellite ring + dots — rotates faster (270°)
  const satellite = document.querySelector('.ring-satellite')
  if (satellite) {
    gsap.to(satellite, {
      scrollTrigger: scrollTriggerConfig,
      rotation: 270,
      transformOrigin: '400px 400px',
      ease: 'none',
    })
  }

  // Inner arcs — rotates slower and in reverse (-120°)
  const arcs = document.querySelector('.ring-arcs')
  if (arcs) {
    gsap.to(arcs, {
      scrollTrigger: scrollTriggerConfig,
      rotation: -120,
      transformOrigin: '400px 400px',
      ease: 'none',
    })
  }

  // Hero content follows with the ring, fading and moving up
  gsap.to(heroContent, {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '40% top',
      scrub: 1,
    },
    y: -120,
    opacity: 0,
    ease: 'none',
  })
}

/* ============================================
   Hero Section Entrance Animation
   ============================================ */
function initHeroAnimation() {
  const tl = gsap.timeline({ delay: 0.3 })

  // Ring entrance
  tl.from('.ring-svg', {
    scale: 0.3,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)',
  })

  // Tag line entrance
  tl.from('.hero-tag .tag-line', {
    scaleX: 0,
    duration: 0.6,
    stagger: 0.1
  }, '-=0.5')
  .from('.hero-tag .tag-text', {
    opacity: 0,
    y: 10,
    duration: 0.5
  }, '-=0.3')

  // Title lines stagger in
  tl.from('.title-line', {
    y: 60,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power3.out'
  }, '-=0.2')

  // Description
  tl.from('.hero-desc', {
    y: 30,
    opacity: 0,
    duration: 0.6
  }, '-=0.3')

  // Buttons
  tl.from('.hero-actions .btn', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
  }, '-=0.2')

  // Hero SVG geometric shapes
  tl.from('.hero-geo', {
    opacity: 0,
    scale: 0.5,
    rotation: -15,
    duration: 0.6,
    stagger: {
      each: 0.08,
      from: 'random'
    },
    ease: 'back.out(1.7)'
  }, '-=0.6')

  // Continuous floating animation for hero shapes
  gsap.to('.hero-geo.rect-1', {
    y: -12, rotation: 5, duration: 3,
    repeat: -1, yoyo: true, ease: 'sine.inOut'
  })
  gsap.to('.hero-geo.rect-2', {
    y: 10, rotation: -8, duration: 2.5,
    repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5
  })
  gsap.to('.hero-geo.circle-1', {
    y: -15, x: 8, duration: 4,
    repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1
  })
  gsap.to('.hero-geo.tri-1', {
    y: 10, rotation: 10, duration: 3.5,
    repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.3
  })
  gsap.to('.hero-geo.dot-1', {
    scale: 1.5, duration: 2,
    repeat: -1, yoyo: true, ease: 'sine.inOut'
  })
  gsap.to('.hero-geo.dot-2', {
    scale: 1.8, duration: 2.5,
    repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.8
  })
}

/* ============================================
   Geometric Line Drawing Animation
   ============================================ */
function initGeoLineAnimation() {
  const accentLines = document.querySelectorAll('.accent-line')

  accentLines.forEach((line) => {
    const length = line.getTotalLength ? line.getTotalLength() : 1000
    gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
    gsap.to(line, {
      strokeDashoffset: 0, duration: 3, delay: 0.5, ease: 'power1.inOut'
    })
  })

  gsap.from('.geo-shape', {
    opacity: 0, scale: 0, duration: 1, stagger: 0.2,
    delay: 1, ease: 'back.out(1.7)', transformOrigin: 'center center'
  })

  gsap.to('.geo-shape', {
    opacity: 0.25, duration: 2, repeat: -1, yoyo: true,
    ease: 'sine.inOut', stagger: 0.3, delay: 2
  })
}

/* ============================================
   Floating Geometric Shapes
   ============================================ */
function initFloatingShapes() {
  const shapes = document.querySelectorAll('.float-shape')

  shapes.forEach((shape, i) => {
    gsap.to(shape, {
      y: `+=${20 + i * 8}`,
      x: `+=${(i % 2 === 0 ? 1 : -1) * (10 + i * 5)}`,
      rotation: `+=${30 + i * 15}`,
      duration: 4 + i * 0.8,
      repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.4
    })
    gsap.to(shape, {
      opacity: 0.15, duration: 3 + i * 0.5,
      repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.6
    })
  })
}

/* ============================================
   Projects Horizontal Scroll
   ============================================ */
function initProjectsScroll() {
  const wrapper = document.querySelector('.projects-pin-wrapper')
  const track = document.querySelector('.projects-track')
  if (!wrapper || !track) return

  // Calculate how far to scroll horizontally
  const totalWidth = track.scrollWidth
  const viewportWidth = window.innerWidth
  const scrollDistance = totalWidth - viewportWidth + 100

  gsap.to(track, {
    x: -scrollDistance,
    ease: 'none',
    scrollTrigger: {
      trigger: wrapper,
      start: 'top 30%',
      end: `+=${scrollDistance}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  })
}

/* ============================================
   Section Geometric Decorations Animation
   ============================================ */
function initSectionGeoAnimations() {
  // Entrance animation for section geo shapes
  gsap.utils.toArray('.section-geo-shape').forEach((shape, i) => {
    gsap.from(shape, {
      scrollTrigger: {
        trigger: shape.closest('.section'),
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 0,
      rotation: -20 + (i % 3) * 15,
      duration: 0.8,
      delay: i * 0.12,
      ease: 'back.out(1.7)',
      transformOrigin: 'center center',
    })
  })

  // Continuous floating for section geo shapes
  gsap.utils.toArray('.section-geo-shape').forEach((shape, i) => {
    gsap.to(shape, {
      y: `+=${6 + i * 3}`,
      rotation: `+=${4 + i * 2}`,
      duration: 3 + i * 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: i * 0.3,
    })
  })
}

/* ============================================
   Scroll-Triggered Animations
   ============================================ */
function initScrollAnimations() {
  // Section headers
  gsap.utils.toArray('.section-header').forEach((header) => {
    gsap.from(header, {
      scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
      y: 40, opacity: 0, duration: 0.8
    })
    const line = header.querySelector('.section-line')
    if (line) {
      gsap.from(line, {
        scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
        scaleX: 0, duration: 0.6, delay: 0.3, ease: 'power2.out'
      })
    }
  })

  // About cards — fade up + scale entrance
  gsap.utils.toArray('.geo-card').forEach((card, i) => {
    gsap.to(card, {
      scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, scale: 1, duration: 0.7, delay: i * 0.15, ease: 'power3.out'
    })
  })

  // Project cards — entrance as they appear in horizontal scroll
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: '.projects-pin-wrapper',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.6,
      delay: i * 0.12,
      ease: 'power3.out',
    })
  })

  // Contact section — slide up from bottom
  gsap.to('.contact-content', {
    scrollTrigger: { trigger: '.contact', start: 'top 80%', toggleActions: 'play none none none' },
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
  })

  // Contact items — fade up + scale
  gsap.utils.toArray('.contact-item').forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, scale: 1, duration: 0.6, delay: i * 0.1, ease: 'power2.out'
    })
  })

  // Footer — fade up entrance
  gsap.from('.footer-content', {
    scrollTrigger: { trigger: '.footer', start: 'top 95%', toggleActions: 'play none none none' },
    y: 30, opacity: 0, duration: 0.8
  })

  // Parallax on floating shapes
  gsap.to('.floating-geo', {
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 1 },
    y: -100, ease: 'none'
  })
}

export default App
