'use client'

import { useEffect, useState } from 'react'
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react'
import { RefacedLogo } from './refaced-logo'

const NAV = ['Оптика', 'Солнце', 'Бренды', 'Проверка\u00A0зрения', 'Блог']

const BRANDS = [
  'S.T.\u00A0DUPONT',
  'LOEWE',
  'MONTBLANC',
  'MOSCOT',
  'MASUNAGA',
  'MATSUDA',
  'ORGREEN',
  'GÖTTI',
  'RAY-BAN',
  'VICTORIA\u00A0BECKHAM',
]

const HERO_IMG =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8427-%D0%A3%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%BE-NR-A9P7YdLJ7tWRNu4i7SdvMO1F2RWGUu.jpg'

export function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const headerDark = scrolled && !menuOpen
  const inkTone = headerDark ? 'text-ink' : 'text-offwhite'

  return (
    <div className="relative">
      {/* ── Utility bar ───────────────────────────── */}
      <div
        className={`relative z-50 flex h-9 items-center justify-center px-4 transition-colors duration-500 ${
          headerDark
            ? 'bg-offwhite text-ink/70'
            : 'bg-transparent text-offwhite/80'
        }`}
      >
        <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-center">
          {'Бесплатная доставка по\u00A0России'}
          <span className="mx-2 opacity-50">·</span>
          {'Запись к\u00A0оптометристу онлайн'}
        </p>
      </div>

      {/* ── Header ────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          headerDark
            ? 'bg-offwhite/95 backdrop-blur-sm shadow-[0_1px_0_rgba(22,20,15,0.08)]'
            : 'bg-transparent'
        }`}
      >
        {/* spacer to sit below the utility bar */}
        <div className="h-9" />
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:h-20 md:px-12 lg:px-20">
          {/* Logo */}
          <a
            href="#"
            className={`transition-colors duration-500 ${inkTone}`}
            aria-label="Refaced — на главную"
          >
            <RefacedLogo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                className={`group relative text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-500 ${inkTone}`}
              >
                {item}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-taupe transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className={`flex items-center gap-5 transition-colors duration-500 ${inkTone}`}>
            <button aria-label="Поиск" className="hidden sm:block transition-opacity hover:opacity-60">
              <Search className="h-[18px] w-[18px]" strokeWidth={1.4} />
            </button>
            <button aria-label="Избранное" className="hidden sm:block transition-opacity hover:opacity-60">
              <Heart className="h-[18px] w-[18px]" strokeWidth={1.4} />
            </button>
            <button aria-label="Корзина" className="transition-opacity hover:opacity-60">
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.4} />
            </button>
            <button aria-label="Личный кабинет" className="hidden sm:block transition-opacity hover:opacity-60">
              <User className="h-[18px] w-[18px]" strokeWidth={1.4} />
            </button>
            <button
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              className="lg:hidden transition-opacity hover:opacity-60"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" strokeWidth={1.4} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.4} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay ───────────────────── */}
      <div
        className={`fixed inset-0 z-40 bg-offwhite transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-7 px-10">
          {NAV.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-light tracking-wide text-ink"
            >
              {item}
            </a>
          ))}
          <div className="mt-6 flex gap-7 text-ink/70">
            <Search className="h-5 w-5" strokeWidth={1.4} />
            <Heart className="h-5 w-5" strokeWidth={1.4} />
            <User className="h-5 w-5" strokeWidth={1.4} />
          </div>
        </nav>
      </div>

      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative -mt-9 h-[100svh] w-full overflow-hidden bg-ink">
        {/* Photo with slow Ken Burns zoom */}
        <img
          src={HERO_IMG || '/placeholder.svg'}
          alt="Витрина бутика Refaced: японский доспех среди оправ на фоне фасадов Санкт-Петербурга"
          className="absolute inset-0 h-full w-full origin-center object-cover animate-kenburns"
          crossOrigin="anonymous"
        />
        {/* Very gentle bottom scrim for legibility only */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(22,20,15,0.62) 0%, rgba(22,20,15,0.22) 32%, rgba(22,20,15,0) 58%)',
          }}
        />
        {/* Soft lower-left wash to keep the editorial text legible over bright frames */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'radial-gradient(120% 90% at 0% 100%, rgba(22,20,15,0.5) 0%, rgba(22,20,15,0.18) 38%, rgba(22,20,15,0) 62%)',
          }}
        />

        {/* Text block — lower-left third */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1600px] px-6 pb-28 md:px-12 md:pb-24 lg:px-20">
            <div className="max-w-xl">
              <p
                className="animate-rise text-[11px] font-medium uppercase tracking-[0.3em] text-offwhite/85"
                style={{ animationDelay: '0.1s' }}
              >
                Редкие нишевые бренды оптики
              </p>

              <h1
                className="animate-rise mt-5 text-pretty font-light leading-[1.05] text-offwhite"
                style={{
                  animationDelay: '0.25s',
                  fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                  letterSpacing: '0.01em',
                }}
              >
                Точка зрения
                <br />
                ручной работы
              </h1>

              <p
                className="animate-rise mt-6 max-w-md text-pretty text-sm font-normal leading-relaxed text-offwhite/85 md:text-base"
                style={{ animationDelay: '0.4s' }}
              >
                {
                  'Привозим нишевые бренды оправ и\u00A0солнцезащитных очков со\u00A0всего мира и\u00A0подбираем пару под ваше лицо, стиль и\u00A0зрение\u00A0\u2014 в\u00A0двух бутиках Санкт-Петербурга.'
                }
              </p>

              <div
                className="animate-rise mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-10"
                style={{ animationDelay: '0.55s' }}
              >
                <a
                  href="#"
                  className="group inline-flex flex-col text-sm font-medium uppercase tracking-[0.18em] text-offwhite"
                >
                  Смотреть коллекцию
                  <span className="mt-1.5 h-px w-full bg-offwhite/60 transition-all duration-300 group-hover:bg-taupe" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm font-normal text-offwhite/85 transition-colors hover:text-offwhite"
                >
                  {'Записаться на\u00A0проверку зрения'}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Brand marquee ──────────────────────── */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-offwhite/15 bg-ink/20 backdrop-blur-[2px]">
          <div className="flex w-max animate-marquee py-3.5">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="flex items-center whitespace-nowrap px-7 text-[10px] font-medium uppercase tracking-[0.28em] text-offwhite/70"
              >
                {brand}
                <span className="ml-7 text-offwhite/30">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
