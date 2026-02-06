//Handling multiple tabs & windows
 
import {test,expect,chromium, firefox} from '@playwright/test'
 
test('Handling mutiple tabs', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
 
    await page.getByText('New Tab').click()
    await page.waitForTimeout(2000)
    const tabs = page.context().pages()
    await expect(tabs[1]).toHaveURL('https://www.pavantestingtools.com/')
})
 
test('Handling pop up windows', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
 
    await page.locator('[id="PopUp"]').click()
    await page.waitForTimeout(2000)
    const windows = page.context().pages()
    await expect(windows[1]).toHaveURL('https://www.selenium.dev/')
})
 
test('Creating multiple tabs', async({page}) => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const tab = await context.newPage()
    const tab2 = await context.newPage()
 
    await tab.goto('https://www.saucedemo.com/')
    await tab2.goto('https://testautomationpractice.blogspot.com/')
 
    await tab.waitForTimeout(5000)
})
 
test('Creating multiple windows', async () => {
    const browser1 = await chromium.launch()
    const context1 = await browser1.newContext()
    const tab1 = await context1.newPage()
 
    const browser2 = await firefox.launch()
    const context2 = await browser2.newContext()
    const tab2 = await context2.newPage()
 
    await tab1.goto('https://www.saucedemo.com/')
    await tab2.goto('https://testautomationpractice.blogspot.com/')
 
    //tab1.locator('').fill('') //saucedemo element
 
    await tab1.waitForTimeout(5000)
 
})