'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WireframeScene from '@/components/three/WireframeScene'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-title',
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          '.hero-subtitle',
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          '.hero-cta',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          '.hero-canvas',
          {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
          },
          '-=0.8'
        )

      gsap.to('.hero-text', {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '20% top',
          end: '50% top',
          scrub: 1,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* 3D Canvas - positioned right half on desktop, full on mobile */}
      <div className="hero-canvas pointer-events-none absolute inset-y-0 right-0 z-0 w-full">
        <WireframeScene />
      </div>

      {/* Text content */}
      <div className="hero-text relative z-10 w-full mx-auto max-w-7xl py-32 ">
        <div className="max-w-2xl">
          <span className="hero-badge mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wider text-accent">
            SOFTWARE & MARKETING
          </span>

          <h1 className="hero-title font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Construimos
            <br />
            <span className="text-accent">experiencias</span>
            <br />
            digitales<span className="text-accent-secondary">.</span>
          </h1>

          <p className="hero-subtitle mt-6 max-w-lg text-lg leading-relaxed text-muted md:text-xl">
            Transformamos ideas en productos de alto impacto. Desarrollo de
            software y estrategia de marketing bajo un mismo techo.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25"
            >
              Empezar un proyecto
            </a>
            <a
              href="#proyectos"
              className="rounded-full border border-muted/30 px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/50 hover:text-accent"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
