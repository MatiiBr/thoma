'use client'

import { useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'

gsap.registerPlugin(useGSAP)

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lenis = useLenis()

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      lenis?.scrollTo(href, { offset: -80, duration: 1.2 })
      setMobileOpen(false)
    },
    [lenis]
  )

  useGSAP(
    () => {
      gsap.from('nav', {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.nav-link', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power2.out',
      })

      gsap.from('.nav-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: 'back.out(1.7)',
      })
    },
    { scope: navRef }
  )

  const { contextSafe } = useGSAP({ scope: navRef })

  const toggleMobile = contextSafe(() => {
    setMobileOpen((prev) => {
      const next = !prev
      if (next) {
        gsap.from('.mobile-link', {
          x: -30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power2.out',
        })
      }
      return next
    })
  })

  return (
    <header ref={navRef} className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold font-heading tracking-tight">
          Thoma<span className="text-accent">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contacto"
          onClick={(e) => handleNavClick(e, '#contacto')}
          className="nav-cta hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-accent/80 md:inline-block"
        >
          Hablemos
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMobile}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-muted/20 bg-background/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="mobile-link block py-2 text-lg font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                className="mobile-link mt-2 inline-block rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-accent/80"
              >
                Hablemos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
