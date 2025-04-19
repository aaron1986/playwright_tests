// @ts-check
import { test, expect } from '@playwright/test';

test('has title and heading', async ({ page }) => {
  await page.goto('https://analyticsexample.com/');

  //check title is My eportfolio
  await expect(page).toHaveTitle("My eportfolio");

  //check all buttons are working
  const buttons = page.locator('span.btn-info', { 
    hasText: 'More Info' 
  });
  const count = await buttons.count();
  
  for (let i = 0; i < count; i++) {
    await buttons.nth(i).click();
  }
  
});

// test("", async({page}) => {

// })