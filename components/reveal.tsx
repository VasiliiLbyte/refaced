'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'figure'
  blur?: boolean
  clip?: boolean
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  blur = false,
  clip = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setReduceMotion(reduced)

    if (reduced) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as as 'div'

  const transition = reduceMotion
    ? 'none'
    : [
        `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        !clip ? `transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s` : null,
        blur ? `filter 1s cubic-bezier(0.16,1,0.3,1) ${delay}s` : null,
        clip ? `clip-path 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}s` : null,
      ]
        .filter(Boolean)
        .join(', ')

  const clipStyle = clip
    ? {
        clipPath: shown ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
        transition,
      }
    : undefined

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: clip ? 1 : shown ? 1 : 0,
        transform: clip ? undefined : shown ? 'translateY(0)' : 'translateY(28px)',
        filter: blur ? (shown ? 'blur(0px)' : 'blur(6px)') : undefined,
        transition: clip ? undefined : transition,
      }}
    >
      {clip ? <div style={clipStyle}>{children}</div> : children}
    </Tag>
  )
}
