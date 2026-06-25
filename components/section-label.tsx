interface SectionLabelProps {
  /** Short label, e.g. "01 — Каталог". */
  label: string
  /** Tailwind text color token classes, defaults to ink. */
  tone?: string
}

/**
 * A thin vertical caption that pins to the side of a section while it scrolls.
 * Place as the first child of a `relative` section wrapper.
 */
export function SectionLabel({
  label,
  tone = 'text-ink/40',
}: SectionLabelProps) {
  return (
    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-0 lg:block">
      <div className="sticky top-1/2 -translate-y-1/2">
        <span
          className={`inline-block whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.3em] ${tone}`}
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
