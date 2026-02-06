//Screenshots
 
import {test} from '@playwright/test'
 
test('Handling screenshots', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.screenshot({path:"tests/screenshots/login.png"})
    await page.locator('[id="user-name"]').screenshot({path:"tests/screenshots/username.png"})
})