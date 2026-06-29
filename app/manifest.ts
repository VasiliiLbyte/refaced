import type { MetadataRoute } from 'next'
import { assetPath } from '@/lib/utils'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'REFACED',
    short_name: 'REFACED',
    icons: [
      {
        src: assetPath('/android-chrome-192x192.png'),
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: assetPath('/android-chrome-512x512.png'),
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#F7F5F1',
    background_color: '#F7F5F1',
    display: 'standalone',
  }
}
