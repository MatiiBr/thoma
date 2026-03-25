'use client'

import { useMemo, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  const reveals = useMemo(
    () => [{ selector: '.contact-content', y: 50 }],
    []
  )

  useScrollReveal(sectionRef, reveals)

  return (
    <section ref={sectionRef} id="contacto" className="bg-background px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="contact-content relative overflow-hidden rounded-3xl border border-muted/15 bg-background-secondary p-12 md:p-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-secondary/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Tenés una idea?
                <br />
                <span className="text-accent">Hagámosla realidad.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Contanos sobre tu proyecto y te respondemos en menos de 24
                horas. Sin compromiso.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-4">
              <a
                href="mailto:hola@thoma.dev"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25"
              >
                <span>Escribinos</span>
                <span>→</span>
              </a>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-accent/30 px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <span>WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
