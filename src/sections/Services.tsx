'use client'

import { useMemo, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const services = [
  {
    icon: '⟨/⟩',
    title: 'Desarrollo Web',
    description:
      'Sitios y aplicaciones web de alto rendimiento con las tecnologías más modernas del mercado.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: '◐',
    title: 'Apps Móviles',
    description:
      'Aplicaciones nativas y cross-platform que ofrecen experiencias fluidas en cualquier dispositivo.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: '◈',
    title: 'Marketing Digital',
    description:
      'Estrategias de crecimiento basadas en datos para maximizar tu alcance y conversión.',
    tags: ['SEO', 'SEM', 'Analytics'],
  },
  {
    icon: '△',
    title: 'Branding & Diseño',
    description:
      'Identidad visual que comunica la esencia de tu marca y conecta con tu audiencia.',
    tags: ['UI/UX', 'Branding', 'Motion'],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  const reveals = useMemo(
    () => [
      { selector: '.services-heading', y: 30 },
      { selector: '.service-card', y: 40, stagger: 0.1 },
    ],
    []
  )

  useScrollReveal(sectionRef, reveals)

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="bg-background-secondary px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="services-heading mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-sm font-medium tracking-wider text-accent">
            SERVICIOS
          </span>
          <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Todo lo que necesitás
            <br />
            <span className="text-muted">bajo un mismo techo.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="services-grid grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group rounded-2xl border border-muted/15 bg-background p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <span aria-hidden="true" className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 font-mono text-lg text-accent">
                {service.icon}
              </span>

              <h3 className="font-heading text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted/10 px-3 py-1 text-xs font-medium text-muted transition-colors group-hover:bg-accent/10 group-hover:text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
