import { Reveal } from './reveal'
import { Parallax } from './parallax'
import { assetPath } from '@/lib/utils'
import { STORES } from '@/lib/site-data'

const IMG = assetPath('/stores-interior.jpg')

export function Stores() {
  return (
    <section id="stores" className="bg-ink text-offwhite">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-2">
        <Reveal blur className="flex flex-col justify-center px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-taupe">
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
                <a
                  href={store.mapUrl}
                  className="group mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-offwhite/80 hover:text-offwhite"
                >
                  Построить маршрут
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          clip
          delay={0.1}
          className="relative min-h-[380px] overflow-hidden lg:min-h-0"
        >
          <Parallax>
            <img
              src={IMG || assetPath('/placeholder.svg')}
              alt="Интерьер бутика Refaced с витринами оправ и видом на улицу Санкт-Петербурга"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover grayscale"
            />
          </Parallax>
        </Reveal>
      </div>
    </section>
  )
}
