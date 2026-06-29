import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Prefix local public paths with basePath (e.g. /refaced on GitHub Pages). */
export function assetPath(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  return `${basePath}${path}`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
