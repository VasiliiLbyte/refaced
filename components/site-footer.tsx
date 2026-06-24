import { RefacedLogo } from './refaced-logo'

const NAV = [
  {
    title: 'Каталог',
    links: ['Оправы', 'Солнцезащитные очки', 'Аксессуары', 'Новинки'],
  },
  {
    title: 'Услуги',
    links: ['Проверка зрения', 'Индивидуальный подбор', 'Ремонт', 'Доставка'],
  },
  {
    title: 'Бренды',
    links: ['Matsuda', 'Jacques Marie Mage', 'Andy Wolf', 'Все бренды'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-offwhite">
      <div className="mx-auto max-w-[1600px] px-6 pt-20 pb-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <RefacedLogo className="h-9 w-auto text-offwhite" />
            <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-offwhite/65">
              {
                'Мультибрендовый бутик оптики в\u00A0Санкт-Петербурге. Редкие оправы со\u00A0всего мира и\u00A0внимательный подбор.'
              }
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {NAV.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-taupe">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-offwhite/70 transition-colors duration-300 hover:text-offwhite"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-offwhite/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-offwhite/50">
            {'© 2026 Refaced. Все права защищены.'}
          </p>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-offwhite/60">
            <a href="#" className="transition-colors hover:text-offwhite">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-offwhite">
              Telegram
            </a>
            <a href="#" className="transition-colors hover:text-offwhite">
              VK
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
