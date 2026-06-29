import { Reveal } from './reveal'
import { assetPath } from '@/lib/utils'

const IMG =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8370-%D0%A3%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%BE-NR-rCFbNx2qCBKeyYYktg0dqRhsFx9M1j.jpg'

const STORES = [
  {
    name: 'Refaced на\u00A0Невском',
    address: 'Невский проспект, 21',
    hours: 'Ежедневно 11:00\u201322:00',
  },
  {
    name: 'Refaced на\u00A0Рубинштейна',
    address: 'улица Рубинштейна, 3',
    hours: 'Ежедневно 12:00\u201321:00',
  },
]

export function Stores() {
  return (
    <section className="bg-ink text-offwhite">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-2">
        <Reveal className="flex flex-col justify-center px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-taupe">
            Бутики
          </p>
          <h2
            className="mt-5 text-pretty font-light leading-[1.08]"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            Приходите примерить
          </h2>
          <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-offwhite/75 md:text-base">
            {
              'Два бутика в\u00A0центре Санкт-Петербурга. Без записи можно зайти на\u00A0примерку, а\u00A0проверку зрения лучше согласовать заранее.'
            }
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {STORES.map((store) => (
              <div key={store.name} className="border-t border-offwhite/15 pt-6">
                <h3 className="text-lg font-normal">{store.name}</h3>
                <p className="mt-2 text-sm text-offwhite/70">{store.address}</p>
                <p className="mt-1 text-sm text-offwhite/70">{store.hours}</p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="group mt-12 inline-flex items-center gap-2 self-start text-sm font-medium uppercase tracking-[0.18em] text-offwhite"
          >
            Построить маршрут
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="min-h-[380px] lg:min-h-0">
          <img
            src={IMG || assetPath('/placeholder.svg')}
            alt="Интерьер бутика Refaced с витринами оправ и видом на улицу Санкт-Петербурга"
            className="h-full w-full object-cover grayscale"
            crossOrigin="anonymous"
          />
        </Reveal>
      </div>
    </section>
  )
}
