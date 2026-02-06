//Upload Files
 
import {test} from '@playwright/test'
 
test('Handling upload files', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
 
    await page.locator('[id="singleFileInput"]').setInputFiles('tests/upload/abc.txt')
    await page.locator('[id="multipleFilesInput"]').setInputFiles(['tests/upload/abc.txt','tests/upload/sample.csv'])
 
    await page.waitForTimeout(5000)
})