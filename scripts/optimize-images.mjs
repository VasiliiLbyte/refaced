import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'

const PUBLIC = path.resolve('public')
const BACKUP = path.resolve('raw-images')
const FILES = [
  'catalog-frames.jpg',
  'catalog-accessories.jpg',
  'catalog-sunglasses.jpg',
  'service-eye-exam.jpg',
  'archive-main.jpg',
  'archive-detail.jpg',
  'stores-interior.jpg',
]

await fs.mkdir(BACKUP, { recursive: true })

for (const name of FILES) {
  const src = path.join(PUBLIC, name)
  const backup = path.join(BACKUP, name)
  const tmp = path.join(PUBLIC, name + '.tmp')

  const before = (await fs.stat(src)).size
  // сохраняем оригинал один раз
  try { await fs.access(backup) } catch { await fs.copyFile(src, backup) }

  await sharp(backup)
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(tmp)

  await fs.rename(tmp, src)
  const after = (await fs.stat(src)).size
  console.log(`${name}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`)
}
console.log('Готово. Оригиналы сохранены в raw-images/')
