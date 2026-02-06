//Visual Testing
 
import {test,expect} from '@playwright/test'
 
test('Visual testing', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[id="user-name"]').fill('standard_user')
    await expect(page).toHaveScreenshot('login.png')
})