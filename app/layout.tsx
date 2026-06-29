import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { assetPath } from '@/lib/utils'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  // TODO: заменить на боевой домен refaced.ru при запуске
  metadataBase: new URL('https://vasiliilbyte.github.io/refaced/'),
  title: 'Refaced — мультибрендовый бутик оптики в Санкт-Петербурге',
  description:
    'Редкие нишевые бренды оправ и солнцезащитных очков со всего мира, индивидуальный подбор и проверка зрения в двух бутиках Санкт-Петербурга.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Refaced',
    title: 'Refaced — мультибрендовый бутик оптики в Санкт-Петербурге',
    description:
      'Редкие нишевые бренды оправ и солнцезащитных очков, проверка зрения и изготовление линз в двух бутиках Санкт-Петербурга.',
    // TODO: заменить на горизонтальную OG-картинку 1200×630
    images: [
      {
        url: 'https://vasiliilbyte.github.io/refaced/hero-samurai.jpg',
        width: 1536,
        height: 2752,
        alt: 'Refaced — бутик оптики в Санкт-Петербурге',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refaced — мультибрендовый бутик оптики в Санкт-Петербурге',
    description:
      'Редкие нишевые бренды оправ и солнцезащитных очков, проверка зрения и изготовление линз в двух бутиках Санкт-Петербурга.',
  },
  icons: {
    icon: [
      { url: assetPath('/favicon.ico'), sizes: 'any' },
      { url: assetPath('/favicon.svg'), type: 'image/svg+xml' },
      { url: assetPath('/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { url: assetPath('/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      { url: assetPath('/favicon-48x48.png'), sizes: '48x48', type: 'image/png' },
      { url: assetPath('/favicon-192x192.png'), sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: assetPath('/apple-touch-icon.png'), sizes: '180x180' },
      { url: assetPath('/apple-touch-icon-152x152.png'), sizes: '152x152' },
      { url: assetPath('/apple-touch-icon-167x167.png'), sizes: '167x167' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: assetPath('/safari-pinned-tab.svg'),
        color: '#000000',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F7F5F1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Перейти к содержимому
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
