type LogoProps = {
  className?: string
}

/**
 * Recreated REFACED wordmark: a thick-rimmed pair of glasses inside a square,
 * followed by the REFACED lettering. Uses currentColor so it can be inverted
 * (white over the photo, ink on the off-white header after scroll).
 */
export function RefacedLogo({ className }: LogoProps) {
  return (
    <span
      className={className}
      aria-label="Refaced"
      role="img"
      style={{ color: 'currentColor', display: 'inline-flex', alignItems: 'center' }}
    >
      <svg
        viewBox="0 0 44 44"
        className="h-7 w-7 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <rect x="2" y="2" width="40" height="40" />
        <path
          d="M7 20h7l1.6-2.4a2 2 0 0 1 1.7-0.9h2.4a2 2 0 0 1 1.7 0.9L24 20M24 20h7M24 20l-1.4-2.4a2 2 0 0 0-1.7-0.9h-2.4a2 2 0 0 0-1.7 0.9L15 20"
          strokeWidth={2}
        />
        <path d="M7 20v4.5a3.5 3.5 0 0 0 3.5 3.5h1A3.5 3.5 0 0 0 15 24.5V20M24 20v4.5a3.5 3.5 0 0 0 3.5 3.5h1a3.5 3.5 0 0 0 3.5-3.5V20" />
      </svg>
      <span
        className="ml-2.5 font-sans text-xl leading-none"
        style={{ fontWeight: 600, letterSpacing: '0.22em' }}
      >
        REFACED
      </span>
    </span>
  )
}
