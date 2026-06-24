import { Reveal } from './reveal'

const IMG_MAIN =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8404-%D0%A3%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%BE-NR-d6MLxZCoYfAxhANSGNuf05tTe3LOag.jpg'
const IMG_DETAIL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8402-%D0%A3%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%BE-NR-wm472AWmfsm4DQjW3kxywaWeMWPbl4.jpg'

export function Archive() {
  return (
    <section className="bg-ink py-20 text-offwhite md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20 lg:px-20">
        {/* Text */}
        <Reveal className="order-2 lg:order-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-taupe">
            Архив
          </p>
          <h2
            className="mt-5 text-pretty font-light leading-[1.08]"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            Музей оптики
            <br />
            внутри бутика
          </h2>
          <p className="mt-7 max-w-md text-pretty text-sm leading-relaxed text-offwhite/75 md:text-base">
            {
              'Пенсне, лорнеты и\u00A0оправы XIX\u00A0века\u00A0\u2014 наша собственная коллекция, которую можно рассмотреть вживую. Это история о\u00A0том, как менялось зрение на\u00A0мир, и\u00A0источник вдохновения для подбора современных оправ.'
            }
          </p>
          <a
            href="#"
            className="group mt-9 inline-flex flex-col text-sm font-medium uppercase tracking-[0.18em] text-offwhite"
          >
            {'Узнать о\u00A0коллекции'}
            <span className="mt-1.5 h-px w-full bg-offwhite/50 transition-all duration-300 group-hover:bg-taupe" />
          </a>
        </Reveal>

        {/* Images */}
        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 aspect-[4/5] overflow-hidden">
              <img
                src={IMG_MAIN || '/placeholder.svg'}
                alt="Витрина с антикварными очками, пенсне и лорнетами на пробковом основании"
                className="h-full w-full object-cover grayscale"
                crossOrigin="anonymous"
              />
            </div>
            <div className="col-span-2 mt-12 aspect-[3/4] overflow-hidden">
              <img
                src={IMG_DETAIL || '/placeholder.svg'}
                alt="Антикварные пенсне и футляры крупным планом"
                className="h-full w-full object-cover grayscale"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
