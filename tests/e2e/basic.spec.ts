import { test, expect } from '@playwright/test'

test.describe('Basic navigation', () => {
  test('home page loads successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('ค้นพบการเดินทางเพื่อการศึกษาในจีน')
  })

  test('can navigate to routes page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=เส้นทางการเรียนรู้')
    await expect(page).toHaveURL(/.*routes/)
  })

  test('search functionality works', async ({ page }) => {
    await page.goto('/')
    await page.selectOption('select', 'shanghai')
    await page.click('text=ค้นหา')
    await expect(page).toHaveURL(/.*routes/)
  })
})

