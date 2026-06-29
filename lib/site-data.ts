export type NavLink = { label: string; href: string }
export type Social = { label: string; href: string }
export type Store = { name: string; address: string; hours: string; mapUrl: string }

// Канонический список брендов — единый источник для ленты в герое и сетки брендов.
// TODO(клиент): подтвердить финальный список и порядок.
export const BRANDS: string[] = [
  'MATSUDA',
  'MASUNAGA',
  'MOSCOT',
  'ORGREEN',
  'GÖTTI',
  'S.T.\u00A0DUPONT',
  'LOEWE',
  'MONTBLANC',
  'RAY-BAN',
  'ANDY\u00A0WOLF',
  'OLIVER\u00A0PEOPLES',
  'VICTORIA\u00A0BECKHAM',
  'JACQUES\u00A0MARIE\u00A0MAGE',
]

// Избранные бренды для футера.
export const FEATURED_BRANDS: string[] = ['MATSUDA', 'JACQUES\u00A0MARIE\u00A0MAGE', 'ANDY\u00A0WOLF']

export const MAIN_NAV: NavLink[] = [
  { label: 'Оптика', href: '#catalog' },
  { label: 'Солнце', href: '#catalog' },
  { label: 'Бренды', href: '#brands' },
  { label: 'Проверка зрения', href: '#eye-exam' },
  { label: 'Блог', href: '#catalog' },
]

export const SECONDARY_NAV: NavLink[] = [
  { label: 'Доставка и оплата', href: '#catalog' },
  { label: 'Возврат', href: '#catalog' },
  { label: 'Контакты', href: '#stores' },
  { label: 'Партнёрам', href: '#stores' },
]

// TODO(клиент): подставить реальные ссылки на каналы.
export const SOCIALS: Social[] = [
  { label: 'Telegram', href: '#' },
  { label: 'VK', href: '#' },
]

export const STORES: Store[] = [
  {
    name: 'Refaced на\u00A0Невском',
    address: 'Невский проспект, 21',
    hours: 'Ежедневно 11:00\u201322:00',
    mapUrl: '#stores',
  },
  {
    name: 'Refaced на\u00A0Рубинштейна',
    address: 'улица Рубинштейна, 3',
    hours: 'Ежедневно 12:00\u201321:00',
    mapUrl: '#stores',
  },
]
