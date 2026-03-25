'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

function LenisGSAPConnector() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    // Sync every Lenis scroll event to ScrollTrigger
    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    // Refresh ScrollTrigger after Lenis is ready
    ScrollTrigger.refresh()

    return () => {
      lenis.off('scroll', onScroll)
    }
  }, [lenis])

  return null
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactLenis root>
      <LenisGSAPConnector />
      {children}
    </ReactLenis>
  )
}
