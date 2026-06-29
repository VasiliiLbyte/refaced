import { Reveal } from './reveal'
import { Parallax } from './parallax'
import { SectionLabel } from './section-label'
import { Magnetic } from './magnetic'
import { assetPath } from '@/lib/utils'

const IMG = assetPath('/service-eye-exam.jpg')

const PILLARS = [
  {
    title: 'Проверка зрения',
    text: 'Осмотр с\u00A0пробными линзами, без спешки. Учитываем ваши привычки, нагрузку и\u00A0образ жизни.',
  },
  {
    title: 'Изготовление линз',
    text: 'Линзы под ваш рецепт и\u00A0оправу\u00A0\u2014 с\u00A0вниманием к\u00A0оптике и\u00A0к\u00A0тому, как очки сидят и\u00A0выглядят.',
  },
]

export function EyeExam() {
  return (
    <section id="eye-exam" className="relative bg-offwhite py-20 md:py-28 lg:py-32">
      <SectionLabel label="01 — Услуги" />
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20 lg:px-20">
        <Reveal clip>
          <div className="film-grain relative aspect-[4/3] overflow-hidden">
            <Parallax>
              <img
                src={IMG || assetPath('/placeholder.svg')}
                alt="Профессиональный набор пробных линз оптометриста в бутике Refaced"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale"
              />
            </Parallax>
          </div>
        </Reveal>

        <Reveal blur delay={0.1}>
          <h2
            className="text-pretty font-light leading-[1.08] text-ink"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            Проверка зрения
            <br />
            и изготовление линз
          </h2>
          <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-ink/65 md:text-base">
            {
              'Полный цикл прямо в\u00A0бутике\u00A0\u2014 от\u00A0спокойного осмотра до\u00A0готовых очков под ваш рецепт и\u00A0посадку.'
            }
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="border-t border-ink/10 pt-6">
                <h3 className="text-lg font-normal text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-ink/65">
            {'И\u00A0поможем подобрать оправу под лицо, образ жизни и\u00A0рецепт.'}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4">
            <Magnetic strength={10}>
              <a
                href="#eye-exam"
                className="inline-flex items-center justify-center border border-ink px-9 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-ink hover:text-offwhite"
              >
                Записаться онлайн
              </a>
            </Magnetic>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink/50">
              {'Принимают оптометристы с\u00A0опытом 15\u00A0лет'}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
