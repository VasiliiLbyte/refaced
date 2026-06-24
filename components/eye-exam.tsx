import { Reveal } from './reveal'

const IMG =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8264-%D0%A3%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%BE-NR-82tvoITIj2jgnYMUSwa4Q0J3eN9jDd.jpg'

const STEPS = [
  {
    no: '01',
    title: 'Диагностика',
    text: 'Полная проверка зрения на\u00A0современном оборудовании и\u00A0набором пробных линз.',
  },
  {
    no: '02',
    title: 'Подбор оправы',
    text: 'Оптометрист и\u00A0стилист помогают выбрать форму под лицо, образ жизни и\u00A0рецепт.',
  },
  {
    no: '03',
    title: 'Изготовление',
    text: 'Линзы под\u00A0ваш рецепт и\u00A0посадку\u00A0\u2014 с\u00A0контролем на\u00A0каждом этапе.',
  },
]

export function EyeExam() {
  return (
    <section className="bg-offwhite py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20 lg:px-20">
        <Reveal>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={IMG || '/placeholder.svg'}
              alt="Профессиональный набор пробных линз оптометриста в бутике Refaced"
              className="h-full w-full object-cover grayscale"
              crossOrigin="anonymous"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-taupe">
            Услуга
          </p>
          <h2
            className="mt-5 text-pretty font-light leading-[1.08] text-ink"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            Проверка зрения
            <br />
            и подбор оптики
          </h2>

          <div className="mt-10 flex flex-col gap-8">
            {STEPS.map((step) => (
              <div
                key={step.no}
                className="flex gap-6 border-t border-ink/10 pt-6"
              >
                <span className="text-sm font-medium tracking-[0.1em] text-taupe">
                  {step.no}
                </span>
                <div>
                  <h3 className="text-lg font-normal text-ink">{step.title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink/65">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center justify-center border border-ink px-9 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-offwhite"
          >
            Записаться онлайн
          </a>
        </Reveal>
      </div>
    </section>
  )
}
