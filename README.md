# Refaced

Лендинг мультибрендового бутика оптики Refaced в Санкт-Петербурге. Next.js App Router, Tailwind 4, статический экспорт на GitHub Pages.

**Прод:** https://vasiliilbyte.github.io/refaced/

## Разработка

```bash
pnpm install
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
pnpm build
```

Для GitHub Pages (с `basePath`):

```bash
$env:NEXT_PUBLIC_BASE_PATH="/refaced"; pnpm build   # Windows PowerShell
NEXT_PUBLIC_BASE_PATH=/refaced pnpm build           # macOS / Linux
```

## Тесты

```bash
pnpm test:e2e
```
