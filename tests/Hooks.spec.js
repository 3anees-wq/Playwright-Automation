//Tags - 

// npx playwright test  --project=chromium --headed   - It will run all tests
//npx playwright test  --project=chromium --headed  --grep @smoke  - it will run which is having smoke tag inside test
//npx playwright test --project=chromium --headed --grep-invert @smoke -  it will exclusde smoke tag tetscases and runs remaining 


//Hooks
 
//load website - beforeAll
 
//login - beforeEach
//add to cart
//logout - afterEach
 
//login - before
//add to cart
//logout
 
//close browser - afterAll
 
import {test,chromium} from '@playwright/test'
 
let browser
let context
let tab
 
test.beforeAll(async () => {
    browser = await chromium.launch()
    context = await browser.newContext()
    tab = await context.newPage()
    await tab.goto('https://www.saucedemo.com/')
})
 
test.beforeEach(async () => {
    await tab.locator('[id="user-name"]').fill('standard_user')
    await tab.locator('[id="password"]').fill('secret_sauce')
    await tab.locator('[id="login-button"]').click()
})
 
test('Adding first item to cart', async () => {
    await tab.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
})
 
test('Adding second item to cart', async () => {
    await tab.locator('[id="add-to-cart-sauce-labs-bike-light"]').click()
})
 
test.afterEach(async () => {
    await tab.locator('[id="react-burger-menu-btn"]').click()
    await tab.locator('[id="logout_sidebar_link"]').click()
})
 
test.afterAll(async () => {
    await tab.close()
})