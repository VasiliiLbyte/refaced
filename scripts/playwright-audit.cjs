/**
 * One-off visual/a11y smoke audit. Not part of project test suite.
 * Usage: node scripts/playwright-audit.cjs [baseline|after] [url]
 */
const { chromium } = require('playwright')
const { mkdir, writeFile } = require('fs/promises')
const { join } = require('path')

const tag = process.argv[2] || 'baseline'
const baseUrl = process.argv[3] || 'https://vasiliilbyte.github.io/refaced/'
const outDir = join(process.cwd(), 'scripts', 'audit-output', tag)

async function auditViewport(page, name, width, height) {
  await page.setViewportSize({ width, height })
  await page.goto(baseUrl, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)

  const results = await page.evaluate(() => {
    const hero = document.querySelector('section[class*="100svh"]')
    const h1 = document.querySelector('h1')
    const menuBtn = document.querySelector('[aria-label="Открыть меню"]')
    const header = document.querySelector('header')
    const heroImg = document.querySelector('section img[fetchpriority="high"]')

    const overflowX =
      document.documentElement.scrollWidth > document.documentElement.clientWidth + 1

    const heroRect = hero?.getBoundingClientRect()
    const h1Rect = h1?.getBoundingClientRect()
    const headerStyle = header ? getComputedStyle(header) : null

    return {
      overflowX,
      viewportH: window.innerHeight,
      heroH: heroRect?.height ?? 0,
      heroVisible: heroRect ? heroRect.height >= window.innerHeight * 0.9 : false,
      h1Visible: h1Rect ? h1Rect.bottom > 0 && h1Rect.top < window.innerHeight : false,
      headerBg: headerStyle?.backgroundColor ?? null,
      heroImgSrc: heroImg?.getAttribute('src') ?? null,
      menuExpanded: menuBtn?.getAttribute('aria-expanded') ?? null,
      menuControls: menuBtn?.getAttribute('aria-controls') ?? null,
      kenBurnsRunning: heroImg
        ? getComputedStyle(heroImg).animationName !== 'none'
        : false,
    }
  })

  await page.screenshot({
    path: join(outDir, `${name}-hero.png`),
    fullPage: false,
  })

  await page.evaluate(() => window.scrollTo(0, 120))
  await page.waitForTimeout(400)
  const scrolled = await page.evaluate(() => {
    const header = document.querySelector('header')
    return header ? getComputedStyle(header).backgroundColor : null
  })
  await page.screenshot({
    path: join(outDir, `${name}-scrolled.png`),
    fullPage: false,
  })

  if (width < 500) {
    const menuBtn = page.locator('[aria-label="Открыть меню"]')
    await page.evaluate(() => window.scrollTo(0, 0))
    if (await menuBtn.count()) {
      await menuBtn.click({ timeout: 10000 })
    await page.waitForTimeout(500)
    const menuState = await page.evaluate(() => {
      const dialog = document.querySelector('[role="dialog"]')
      const btn = document.querySelector('[aria-label="Открыть меню"]')
      return {
        dialogVisible: dialog
          ? getComputedStyle(dialog.parentElement).visibility !== 'hidden'
          : false,
        ariaExpanded: btn?.getAttribute('aria-expanded'),
        ariaControls: btn?.getAttribute('aria-controls'),
      }
    })
    await page.screenshot({
      path: join(outDir, `${name}-menu-open.png`),
      fullPage: false,
    })
    await page.keyboard.press('Escape')
    await page.waitForTimeout(300)
    const afterEscape = await page.evaluate(() =>
      document.querySelector('[aria-label="Открыть меню"]')?.getAttribute('aria-expanded'),
    )
    results.menu = { ...menuState, afterEscape }
    }
  }

  results.scrolledHeaderBg = scrolled
  return { viewport: name, ...results }
}

async function main() {
  await mkdir(outDir, { recursive: true })

  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  const report = []
  report.push(await auditViewport(page, 'desktop', 1440, 900))
  report.push(await auditViewport(page, 'mobile', 390, 844))

  const rmContext = await browser.newContext({ reducedMotion: 'reduce' })
  const rmPage = await rmContext.newPage()
  await rmPage.setViewportSize({ width: 1440, height: 900 })
  await rmPage.goto(baseUrl, { waitUntil: 'networkidle' })
  await rmPage.waitForTimeout(800)
  const rm = await rmPage.evaluate(() => {
    const heroImg = document.querySelector('section img')
    const marquee = document.querySelector('.animate-marquee')
    return {
      heroAnimation: heroImg ? getComputedStyle(heroImg).animationName : null,
      marqueeAnimation: marquee ? getComputedStyle(marquee).animationName : null,
    }
  })
  report.push({ viewport: 'reduced-motion', ...rm })

  await writeFile(join(outDir, 'report.json'), JSON.stringify(report, null, 2))
  console.log(JSON.stringify(report, null, 2))

  await browser.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
