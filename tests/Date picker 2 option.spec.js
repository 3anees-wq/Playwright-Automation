import {test} from '@playwright/test'
 
test('Handling Date picker', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
 
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
 
    //await page.locator('[id="datepicker"]').fill(month+'/'+day+'/'+year)
    await page.locator('[id="datepicker"]').click()
    await page.locator('[class="ui-icon ui-icon-circle-triangle-w"]').click()
    await page.locator('[data-date="'+day+'"]').click()
 
    await page.waitForTimeout(2000)
 
})
 
test('Handling date picker2', async ({page}) => {
 
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
 
    await page.goto('https://testautomationpractice.blogspot.com/')
 
    await page.locator('[id="txtDate"]').click()
    //below is drop down for month
    await page.locator('[class="ui-datepicker-month"]').selectOption('Feb')
    await page.locator('[data-date="'+day+'"]').click()
})