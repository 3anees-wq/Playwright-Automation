//Session Storage

import {test,chromium} from '@playwright/test'

test.beforeAll(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[id="user-name"]').fill('standard_user')
    await page.locator('[id="password"]').fill('secret_sauce')
    await page.locator('[id="login-button"]').click()

    await page.context().storageState({path:'session.json'})

    await page.close()
})

test('Add to cart', async ({browser}) => {
    const context = await browser.newContext({storageState:'session.json'})
    const tab = await context.newPage()
    await tab.goto('https://www.saucedemo.com/inventory.html')
    await tab.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
})