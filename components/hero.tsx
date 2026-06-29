'use client'

import { useEffect, useState } from 'react'
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react'
import { RefacedLogo } from './refaced-logo'
import { Magnetic } from './magnetic'
import { assetPath } from '@/lib/utils'

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

const HERO_IMG = assetPath('/hero-samurai.jpg')

export function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll + close on Escape when the menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
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
        <div className="mx-auto grid h-20 max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-6 md:h-24 md:px-12 lg:px-20">
          {/* Left: menu trigger */}
          <div className={`flex items-center justify-start transition-colors duration-500 ${inkTone}`}>
            <button
              aria-label="Открыть меню"
              aria-expanded={menuOpen}
              className="group flex items-center gap-3 transition-opacity hover:opacity-60"
              onClick={() => setMenuOpen(true)}
            >
              <span className="flex w-5 flex-col gap-[5px]">
                <span className="h-px w-full bg-current transition-all duration-300 group-hover:w-3/4" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current transition-all duration-300 group-hover:w-1/2" />
              </span>
              <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] sm:inline">
                Меню
              </span>
            </button>
          </div>

          {/* Center: logo */}
          <a
            href="#"
            className={`justify-self-center px-6 sm:px-10 lg:px-16 xl:px-24 transition-colors duration-500 ${inkTone}`}
            aria-label="Refaced — на главную"
          >
            <RefacedLogo />
          </a>

          {/* Right: icons */}
          <div className={`flex items-center justify-end gap-5 transition-colors duration-500 ${inkTone}`}>
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
          </div>
        </div>
      </header>

      {/* ── Fullscreen menu overlay ───────────────── */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* dim backdrop */}
        <div
          className="absolute inset-0 bg-ink/50"
          onClick={() => setMenuOpen(false)}
        />

        {/* panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Главное меню"
          className={`absolute inset-y-0 left-0 flex w-full max-w-sm flex-col bg-ink text-offwhite transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* close */}
          <div className="px-8 pt-8 md:px-10 md:pt-10">
            <button
              aria-label="Закрыть меню"
              className="transition-opacity hover:opacity-60"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-6 w-6" strokeWidth={1.2} />
            </button>
          </div>

          {/* primary nav */}
          <nav className="flex flex-1 flex-col justify-center gap-1 px-8 md:px-10">
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="py-2.5 font-light leading-tight text-offwhite/90 transition-colors duration-300 hover:text-offwhite [font-size:clamp(1.75rem,3.4vw,2.4rem)]"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* panel footer */}
          <div className="px-8 pb-10 md:px-10">
            <div className="flex flex-col gap-3">
              {['Доставка и оплата', 'Возврат', 'Контакты', 'Партнёрам'].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="text-[11px] font-medium uppercase tracking-[0.18em] text-offwhite/45 transition-colors hover:text-offwhite/80"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
            <div className="mt-8 flex items-center gap-6">
              {['Telegram', 'Instagram', 'VK'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[11px] font-medium uppercase tracking-[0.18em] text-offwhite/45 transition-colors hover:text-offwhite/80"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative -mt-9 h-[100svh] w-full overflow-hidden bg-ink">
        {/* Photo with slow Ken Burns zoom */}
        <img
          src={HERO_IMG || assetPath('/placeholder.svg')}
          alt="Витрина бутика Refaced: японский доспех среди оправ на фоне фасадов Санкт-Петербурга"
          width={1536}
          height={2752}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full origin-center object-cover object-[center_30%] grayscale animate-kenburns"
        />
        {/* Top scrim to keep the header and utility bar legible */}
        <div
          className="absolute inset-x-0 top-0 h-56"
          style={{
            background:
              'linear-gradient(to bottom, rgba(18,17,14,0.62) 0%, rgba(18,17,14,0.32) 45%, rgba(18,17,14,0) 100%)',
          }}
        />
        {/* Bottom scrim for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(18,17,14,0.85) 0%, rgba(18,17,14,0.45) 34%, rgba(18,17,14,0.12) 60%, rgba(18,17,14,0) 80%)',
          }}
        />
        {/* Lower-left wash to anchor the editorial text */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'radial-gradient(120% 95% at 0% 100%, rgba(18,17,14,0.7) 0%, rgba(18,17,14,0.3) 40%, rgba(18,17,14,0) 66%)',
          }}
        />
        {/* Subtle film grain over the photograph */}
        <div className="film-grain absolute inset-0" aria-hidden="true" />

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
                className="mt-5 font-light leading-[1.06] text-offwhite"
                style={{
                  fontSize: 'clamp(2.3rem, 5.4vw, 4.4rem)',
                  letterSpacing: '0.01em',
                }}
              >
                <span className="line-mask">
                  <span
                    className="block whitespace-nowrap pb-[0.08em]"
                    style={{ animationDelay: '0.25s' }}
                  >
                    Точка зрения
                  </span>
                </span>
                <span className="line-mask">
                  <span
                    className="block whitespace-nowrap pb-[0.08em]"
                    style={{ animationDelay: '0.38s' }}
                  >
                    ручной работы
                  </span>
                </span>
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
                <Magnetic>
                  <a
                    href="#"
                    className="group inline-flex flex-col text-sm font-medium uppercase tracking-[0.18em] text-offwhite"
                  >
                    Смотреть коллекцию
                    <span className="relative mt-1.5 h-px w-full overflow-hidden bg-offwhite/40">
                      <span className="absolute inset-0 -translate-x-full bg-taupe transition-transform duration-500 ease-out group-hover:translate-x-0" />
                    </span>
                  </a>
                </Magnetic>
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
        <div className="group absolute inset-x-0 bottom-0 overflow-hidden border-t border-offwhite/15 bg-ink/20 backdrop-blur-[2px]">
          <div className="flex w-max animate-marquee py-3.5 group-hover:[animation-play-state:paused]">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <a
                key={`${brand}-${i}`}
                href="#"
                className="flex items-center whitespace-nowrap px-7 text-[10px] font-medium uppercase tracking-[0.28em] text-offwhite/70 transition-colors hover:text-offwhite"
              >
                {brand}
                <span className="ml-7 text-offwhite/30">·</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
