// @ts-check
import { test, expect } from '@playwright/test';

test('check title and links', async ({ page }) => {
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

  //check links are working
  const navNames = ["About Me", "My Portfolio", "Contact Me"];

  for (const name of navNames) {
    await expect(page.getByRole("link", { 
      name
    })).toBeVisible();
  }
  
});

// test("", async({page}) => {

// })