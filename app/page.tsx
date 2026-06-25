import { Hero } from '@/components/hero'
import { Categories } from '@/components/categories'
import { Philosophy } from '@/components/philosophy'
import { Archive } from '@/components/archive'
import { EyeExam } from '@/components/eye-exam'
import { BrandsGrid } from '@/components/brands-grid'
import { Stores } from '@/components/stores'
import { SiteFooter } from '@/components/site-footer'
import { SmoothScroll } from '@/components/smooth-scroll'

export default function Page() {
  return (
    <main className="bg-offwhite">
      <SmoothScroll />
      <Hero />
      <Categories />
      <Philosophy />
      <Archive />
      <EyeExam />
      <BrandsGrid />
      <Stores />
      <SiteFooter />
    </main>
  )
}
