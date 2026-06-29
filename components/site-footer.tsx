import { RefacedLogo } from './refaced-logo'

const NAV = [
  {
    title: 'Каталог',
    links: [
      { label: 'Оправы', href: '#catalog' },
      { label: 'Солнцезащитные очки', href: '#catalog' },
      { label: 'Аксессуары', href: '#catalog' },
      { label: 'Новинки', href: '#catalog' },
    ],
  },
  {
    title: 'Услуги',
    links: [
      { label: 'Проверка зрения', href: '#eye-exam' },
      { label: 'Индивидуальный подбор', href: '#eye-exam' },
      { label: 'Ремонт', href: '#stores' },
      { label: 'Доставка', href: '#stores' },
    ],
  },
  {
    title: 'Бренды',
    links: [
      { label: 'MATSUDA', href: '#brands' },
      { label: 'JACQUES MARIE MAGE', href: '#brands' },
      { label: 'ANDY\u00A0WOLF', href: '#brands' },
      { label: 'Все бренды', href: '#brands' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-offwhite">
      <div className="mx-auto max-w-[1600px] px-6 pt-20 pb-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <RefacedLogo className="h-9 w-auto text-offwhite" />
            <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-offwhite/70">
              {
                'Мультибрендовый бутик оптики в\u00A0Санкт-Петербурге. Редкие оправы со\u00A0всего мира и\u00A0внимательный подбор.'
              }
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3" aria-label="Навигация в подвале">
            {NAV.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-taupe">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-offwhite/75 transition-colors duration-300 hover:text-offwhite"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-offwhite/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-offwhite/60">
            {'© 2026 Refaced. Все права защищены.'}
          </p>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.16em] text-offwhite/65">
            {['Instagram', 'Telegram', 'VK'].map((social) => (
              <span key={social}>{social}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
