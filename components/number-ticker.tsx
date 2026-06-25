'use client'

import { useEffect, useRef, useState } from 'react'

interface NumberTickerProps {
  value: number
  /** Text rendered after the number, e.g. "+" or " лет". */
  suffix?: string
  durationMs?: number
  className?: string
}

export function NumberTicker({
  value,
  suffix = '',
  durationMs = 1400,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / durationMs, 1)
            // easeOutExpo for a refined settle
            const eased =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setDisplay(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, durationMs])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
