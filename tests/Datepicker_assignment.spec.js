import { test, expect } from '@playwright/test';

test('Handling Date picker assignment', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Target date string
  const mydate = '10-February-2025';
  let datesplit = mydate.split('-');
  const targetDay = datesplit[0];
  const targetMonth = datesplit[1];
  const targetYear = datesplit[2];

  // Open the datepicker
  await page.locator('#datepicker').click();

  // Get locators for month, year, and prev button
  const monthLocator = page.locator('[class="ui-datepicker-month"]');
  const yearLocator = page.locator('[class="ui-datepicker-year"]');
  const prevButton = page.locator('[class="ui-datepicker-prev ui-corner-all"]');

  // Loop until month and year match
  while (
    (await monthLocator.textContent()) !== targetMonth &&
    (await yearLocator.textContent()) !== targetYear
  ) {
    await prevButton.click();
  }

  // Select the target day
  await page.locator('[data-date="'+targetDay+'"]').click()

  await page.waitForTimeout(2000);
});
