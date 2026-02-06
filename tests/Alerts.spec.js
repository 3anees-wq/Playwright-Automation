//Alerts
 
import {test,expect} from '@playwright/test'
 
test('Handling simple alert', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async alert => {
        expect(alert.type()).toContain('alert')
        console.log(alert.message())
        expect(alert.message()).toBe('I am an alert box!')
        alert.accept()
    })
    await page.locator('[id="alertBtn"]').click()
 
})
 
test('Confirmation alert', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
 
    page.on('dialog', async alert => {
        expect(alert.type()).toContain('confirm')
        expect(alert.message()).toBe('Press a button!')
        alert.accept()
        //alert.dismiss()
    })
 
    await page.locator('[id="confirmBtn"]').click()
 
    await page.waitForTimeout(5000)
   
})
 
test('Prompt alert', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
 
    page.on('dialog', async alert => {
        expect(alert.type()).toContain('prompt')
        expect(alert.message()).toBe('Please enter your name:')
        //alert.dismiss()
        alert.accept('Rogersoft')
    })
 
    await page.locator('[id="promptBtn"]').click()
 
    await page.waitForTimeout(5000)
})