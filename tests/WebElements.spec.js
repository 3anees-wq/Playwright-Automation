//Handling web elements
 
//Textbox - locator().fill('value_to_be_filled')
//Radio button - check()
//Checkbox - check()    uncheck()
//Dropdown - selectOption('')
//Multi dropdown
//button - click()
//Link - click()
 
import {test} from '@playwright/test'
 
test('Handling web elements', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
 
    await page.locator('[id="name"]').fill('Rogersoft')
    await page.waitForTimeout(1000)
    await page.getByText('Female').check()
    await page.waitForTimeout(1000)
    await page.locator('[id="sunday"]').check()
    await page.waitForTimeout(1000)
    await page.locator('[id="sunday"]').uncheck()
    await page.waitForTimeout(1000)
    await page.locator('[id="country"]').selectOption('Canada')
    await page.waitForTimeout(1000)
    await page.locator('[id="country"]').selectOption({label:'Canada'})
    await page.waitForTimeout(1000)
    await page.locator('[id="country"]').selectOption({value:'usa'})
    await page.waitForTimeout(1000)
    await page.locator('[id="country"]').selectOption({index:2})
await page.waitForTimeout(1000)
    await page.locator('[id="colors"]').selectOption(['Red','Blue'])
    await page.waitForTimeout(1000)
    await page.locator("[name='start']").click()
 
    await page.locator('[class="home-link"]').click()
 
    //await page.locator('[class="match"]').click()
 
    //await page.waitForTimeout(5000)
})