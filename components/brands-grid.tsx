import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const BRANDS = [
  'MATSUDA',
  'MASUNAGA',
  'MOSCOT',
  'ORGREEN',
  'GÖTTI',
  'S.T. DUPONT',
  'LOEWE',
  'MONTBLANC',
  'RAY-BAN',
  'ANDY WOLF',
  'OLIVER PEOPLES',
  'VICTORIA BECKHAM',
]

export function BrandsGrid() {
  return (
    <section className="relative bg-offwhite pb-20 md:pb-28 lg:pb-32">
      <SectionLabel label="04 — Бренды" />
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <Reveal className="border-b border-ink/10 pb-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-taupe">
            Бренды
          </p>
          <h2
            className="mt-4 text-pretty font-light leading-[1.06] text-ink"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          >
            Марки, которым мы доверяем
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 border-l border-t border-ink/10 sm:grid-cols-3 lg:grid-cols-4">
            {BRANDS.map((brand) => (
              <li
                key={brand}
                className="flex items-center justify-center border-b border-r border-ink/10 px-4 py-10 text-center text-sm font-medium uppercase tracking-[0.18em] text-ink/55 transition-colors duration-300 hover:text-ink"
              >
                {brand}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
