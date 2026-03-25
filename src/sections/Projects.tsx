'use client'

import { useMemo, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const projects = [
  {
    title: 'Fintech Dashboard',
    category: 'Desarrollo Web',
    description:
      'Plataforma de gestión financiera con visualización de datos en tiempo real.',
    color: 'from-accent/20 to-accent/5',
  },
  {
    title: 'E-Commerce App',
    category: 'App Móvil',
    description:
      'Marketplace mobile-first con experiencia de compra optimizada y pagos integrados.',
    color: 'from-accent-secondary/20 to-accent-secondary/5',
  },
  {
    title: 'Campaña Growth',
    category: 'Marketing Digital',
    description:
      'Estrategia omnicanal que triplicó la adquisición de usuarios en 6 meses.',
    color: 'from-accent/20 to-accent-secondary/5',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  const reveals = useMemo(
    () => [
      { selector: '.projects-heading', y: 30 },
      { selector: '.project-card', y: 50, stagger: 0.12 },
    ],
    []
  )

  useScrollReveal(sectionRef, reveals)

  return (
    <section ref={sectionRef} id="proyectos" className="bg-background px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="projects-heading mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-sm font-medium tracking-wider text-accent">
              PROYECTOS
            </span>
            <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Trabajo que
              <br />
              <span className="text-muted">habla por sí solo.</span>
            </h2>
          </div>
          <a
            href="#contacto"
            className="shrink-0 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Ver todos los proyectos →
          </a>
        </div>

        {/* Projects list */}
        <div className="projects-list flex flex-col gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="project-card group relative overflow-hidden rounded-2xl border border-muted/15 transition-all duration-300 hover:border-accent/30"
            >
              <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:p-10">
                <div
                  className={`flex h-48 w-full shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} md:h-40 md:w-64`}
                >
                  <span className="font-heading text-5xl font-bold text-foreground/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-heading text-2xl font-semibold md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <span className="hidden text-2xl text-muted transition-all group-hover:translate-x-2 group-hover:text-accent md:block">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
