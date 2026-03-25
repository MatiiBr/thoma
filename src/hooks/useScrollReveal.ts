'use client'

import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'

interface RevealConfig {
  selector: string
  y?: number
  duration?: number
  stagger?: number
  delay?: number
}

export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  reveals: RevealConfig[]
) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observers: IntersectionObserver[] = []

    reveals.forEach(({ selector, y = 40, duration = 0.7, stagger = 0, delay = 0 }) => {
      const elements = container.querySelectorAll(selector)
      if (elements.length === 0) return

      // Hide initially
      gsap.set(elements, { y, opacity: 0 })

      // Observe the FIRST element of each group as trigger
      const triggerEl = elements[0]

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(elements, {
                y: 0,
                opacity: 1,
                duration,
                stagger,
                delay,
                ease: 'power3.out',
              })
              observer.disconnect()
            }
          })
        },
        { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
      )

      observer.observe(triggerEl)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [containerRef, reveals])
}
