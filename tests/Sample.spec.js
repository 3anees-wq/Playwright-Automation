import {test} from '@playwright/test'
 
test('Test to load a website', async ({page}) => {
 
    await page.goto("https://www.google.com/")
 
})