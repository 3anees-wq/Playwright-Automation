import {test} from '@playwright/test'
 
test('Handling web table', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
 
    const table = page.locator('[id="productTable"]')
    const totalRows = table.locator('//tbody/tr')
    await selectItem(totalRows,"Smartphone")
    await selectItem(totalRows,"Smartwatch")
    await page.waitForTimeout(5000)
})
 
async function selectItem(rows,text) {
    let expectedRow = rows.filter({hasText: text})
    await expectedRow.locator('[type="checkbox"]').check()
}