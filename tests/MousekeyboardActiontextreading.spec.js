//Mouse & Keyboard Actions
 
//Mouse Actions
 
//Mouse Hover - page.locator().hover()
//Mouse button click - page.locator().click({button: 'right'})
//Mouse double click - page.locator().dblclick()
//Mouse button press - page.mouse.down()   // page.mouse.up()
//Drag & drop
//Move the mouse pointer to the element - page.locator().hover()
//Press & hold the element - page.mouse.down()
//Move the mouse pointer to the target element - page.locator().hover()
//Release the mouse pointer - page.mouse.up()
//page.locator('source_element').dragTo(page.locator('target_element'))
 
//Keyboard actions
//page.keyboard.press('Shift+Enter')
//page.keyboard.down('Shift')
//page.keyboard.up('Shift')
 
import {test} from '@playwright/test'
 
test('Handling keyboard & mouse actions', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
 
    await page.locator('[class="dropbtn"]').hover()
   
    await page.waitForTimeout(2000)
    await page.locator('[ondblclick="myFunction1()"]').dblclick()
    await page.waitForTimeout(2000)
    //await page.locator('[id="draggable"]').dragTo(page.locator('[id="droppable"]'))
    await page.waitForTimeout(2000)
    await page.locator('[id="draggable"]').hover()
    await page.mouse.down()
    await page.locator('[id="droppable"]').hover()
    await page.mouse.up()
    await page.waitForTimeout(5000)
    await page.locator('[id="name"]').click()
    await page.keyboard.press('R+O+G+E+R')
    await page.waitForTimeout(5000)
 
    console.log(await page.locator('[class="dropbtn"]').textContent()) //visible & hidden
    console.log(await page.locator('[class="dropbtn"]').innerText())   //visible
    console.log(await page.locator('[id="name"]').inputValue())  //value inside the textbox
})