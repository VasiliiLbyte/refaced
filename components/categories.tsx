import { Reveal } from './reveal'
import { Parallax } from './parallax'
import { SectionLabel } from './section-label'
import { assetPath } from '@/lib/utils'

const CATEGORIES = [
  {
    label: 'Оптические оправы',
    count: 'Более 60 марок',
    img: assetPath('/catalog-frames.jpg'),
    alt: 'Стена с оптическими оправами на деревянных панелях в бутике Refaced',
  },
  {
    label: 'Солнцезащитные очки',
    count: 'Сезон и архив',
    img: assetPath('/catalog-sunglasses.jpg'),
    alt: 'Витрина с солнцезащитными очками и японским доспехом у окна бутика',
  },
  {
    label: 'Аксессуары и ароматы',
    count: 'Цепочки, футляры, парфюм',
    img: assetPath('/catalog-accessories.jpg'),
    alt: 'Латунные стеллажи с парфюмом и аксессуарами в бутике Refaced',
  },
]

export function Categories() {
  return (
    <section id="catalog" className="relative bg-offwhite py-20 md:py-28 lg:py-32">
      <SectionLabel label="02 — Каталог" />
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <Reveal blur className="flex flex-col gap-4 border-b border-ink/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-taupe">
              Каталог
            </p>
            <h2
              className="mt-4 text-pretty font-light leading-[1.06] text-ink"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
            >
              Что мы подбираем
            </h2>
          </div>
          <a
            href="#catalog"
            className="group inline-flex items-center gap-2 self-start text-[11px] font-medium uppercase tracking-[0.16em] text-ink md:self-auto"
          >
            Весь каталог
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {CATEGORIES.map((cat, i) => (
            <Reveal as="figure" clip key={cat.label} delay={i * 0.08}>
              <a href="#catalog" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-ink/5">
                  <Parallax>
                    <img
                      src={cat.img || assetPath('/placeholder.svg')}
                      alt={cat.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover grayscale transition-all duration-[1.2s] ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                    />
                  </Parallax>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-offwhite/70">
                        {cat.count}
                      </p>
                      <h3 className="mt-1.5 text-xl font-light text-offwhite md:text-2xl">
                        {cat.label}
                      </h3>
                    </div>
                    <span className="mb-1 text-offwhite transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </figcaption>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
