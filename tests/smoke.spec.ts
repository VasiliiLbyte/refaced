import { test, expect, type Page } from '@playwright/test'

test.use({ reducedMotion: 'reduce' })

async function gotoHome(page: Page) {
  await page.goto('./')
  await expect(page.getByRole('heading', { name: /точка зрения/i })).toBeVisible({
    timeout: 30_000,
  })
}

test.describe('Refaced homepage smoke', () => {
  test('hero fills viewport and headline is visible', async ({ page }) => {
    await gotoHome(page)

    const hero = page.locator('section').filter({ has: page.locator('img[fetchpriority="high"]') })
    const heroBox = await hero.boundingBox()

    expect(heroBox?.height).toBeGreaterThanOrEqual((await page.viewportSize())!.height * 0.9)
    await expect(page.locator('img[fetchpriority="high"]')).toHaveAttribute(
      'src',
      /hero-samurai\.jpg/,
    )
  })

  test('no horizontal overflow on first screen', async ({ page }) => {
    await gotoHome(page)

    const overflowX = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    )

    expect(overflowX).toBe(false)
  })

  test('header becomes solid after scroll', async ({ page }) => {
    await gotoHome(page)

    await page.mouse.wheel(0, 500)
    await page.waitForFunction(() => window.scrollY > 20)

    const headerBg = await page.locator('header').evaluate((el) => getComputedStyle(el).backgroundColor)
    expect(headerBg).not.toBe('rgba(0, 0, 0, 0)')
  })

  test('mobile menu opens, closes with Escape, exposes aria-controls', async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile', 'mobile-only')

    await gotoHome(page)

    const menuBtn = page.getByRole('button', { name: 'Открыть меню' })
    await expect(menuBtn).toHaveAttribute('aria-controls', 'main-menu-panel')

    await menuBtn.click()
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'true')
    await expect(page.getByRole('dialog', { name: 'Главное меню' })).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'false')
  })

  test('skip link targets main content', async ({ page }) => {
    await gotoHome(page)

    await expect(page.getByRole('link', { name: 'Перейти к содержимому' })).toHaveAttribute(
      'href',
      '#main-content',
    )
    await expect(page.locator('#main-content')).toBeAttached()
  })

  test('primary CTAs link to on-page sections', async ({ page }) => {
    await gotoHome(page)

    await expect(page.locator('a[href="#catalog"]').first()).toBeVisible()
    await expect(page.locator('a[href="#eye-exam"]').first()).toBeVisible()
  })
})

test.describe('reduced motion', () => {
  test('disables hero and marquee animations', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-reduced-motion', 'reduced-motion-only')

    await gotoHome(page)

    const heroAnimation = await page.locator('section img').first().evaluate(
      (el) => getComputedStyle(el).animationName,
    )
    const marqueeAnimation = await page.locator('.animate-marquee').evaluate(
      (el) => getComputedStyle(el).animationName,
    )

    expect(heroAnimation).toBe('none')
    expect(marqueeAnimation).toBe('none')
  })
})
