'use client'

import { useMemo, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const stats = [
  { value: '50+', label: 'Proyectos entregados' },
  { value: '3', label: 'Años de experiencia' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Soporte continuo' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  const reveals = useMemo(
    () => [
      { selector: '.about-heading', y: 40 },
      { selector: '.about-text', y: 30, delay: 0.2 },
      { selector: '.stat-item', y: 40, stagger: 0.1, delay: 0.1 },
    ],
    []
  )

  useScrollReveal(sectionRef, reveals)

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="bg-background-secondary px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <div className="about-heading">
              <span className="mb-4 inline-block text-sm font-medium tracking-wider text-accent">
                NOSOTROS
              </span>
              <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Tecnología y creatividad
                <br />
                <span className="text-muted">en cada pixel.</span>
              </h2>
            </div>

            <div className="about-text mt-8 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Somos un equipo multidisciplinario que fusiona ingeniería de
                software con estrategia de marketing digital.
              </p>
              <p>
                Creemos que la mejor tecnología es invisible — lo que importa es
                el impacto que genera en tu negocio y en la experiencia de tus
                usuarios.
              </p>
            </div>
          </div>

          <div className="stats-grid grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-item rounded-2xl border border-muted/15 bg-background p-6 text-center"
              >
                <span className="font-heading text-4xl font-bold text-accent md:text-5xl">
                  {stat.value}
                </span>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
