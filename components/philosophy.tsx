import { Reveal } from './reveal'

export function Philosophy() {
  return (
    <section className="bg-offwhite pb-20 md:pb-28 lg:pb-32">
      <div className="mx-auto max-w-[1100px] px-6 text-center md:px-12">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-taupe">
            Refaced — оптика как характер
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className="mx-auto mt-8 max-w-[44rem] text-balance font-light leading-[1.35] text-ink"
            style={{ fontSize: 'clamp(1.5rem, 3.4vw, 2.6rem)' }}
          >
            {
              'Очки\u00A0\u2014 это не аксессуар, а\u00A0вторая пара глаз и\u00A0часть лица. Мы\u00A0ищем по\u00A0всему миру марки, которые делают оправы вручную, и\u00A0подбираем их\u00A0так, чтобы они оставались с\u00A0вами на\u00A0годы.'
            }
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-10 border-t border-ink/10 pt-12 sm:grid-cols-3">
            {[
              { value: '60+', label: 'нишевых брендов' },
              { value: '2', label: 'бутика в\u00A0Санкт-Петербурге' },
              { value: '15\u00A0лет', label: 'опыта оптометристов' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-light text-ink"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-ink/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
