'use client'

import { useRef, type ReactNode } from 'react'

interface MagneticProps {
  children: ReactNode
  /** How far the element drifts toward the cursor, in px. Keep it small. */
  strength?: number
  className?: string
}

export function Magnetic({
  children,
  strength = 14,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  function handleMove(e: React.MouseEvent<HTMLSpanElement>) {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${
      (y / rect.height) * strength
    }px)`
  }

  function reset() {
    const el = ref.current
    if (el) el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{ display: 'inline-block', transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      {children}
    </span>
  )
}
