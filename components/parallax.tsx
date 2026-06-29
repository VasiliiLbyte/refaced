'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Parallax({
  children,
  className = '',
  amount = 6,
}: {
  children: ReactNode
  className?: string
  amount?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.set(el, { scale: 1.1 })
      gsap.fromTo(
        el,
        { yPercent: -amount },
        {
          yPercent: amount,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [amount])

  return (
    <div ref={ref} className={`h-full w-full will-change-transform ${className}`}>
      {children}
    </div>
  )
}
