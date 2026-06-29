import { defineConfig, devices } from '@playwright/test'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/refaced'
const port = process.env.PLAYWRIGHT_PORT || '3001'
const baseURL = `http://127.0.0.1:${port}${basePath}/`

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  timeout: 60_000,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'chromium-reduced-motion',
      use: {
        ...devices['Desktop Chrome'],
        reducedMotion: 'reduce',
      },
    },
  ],
  webServer: {
    command: `cross-env NEXT_PUBLIC_BASE_PATH=${basePath} pnpm exec next dev --port ${port}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
