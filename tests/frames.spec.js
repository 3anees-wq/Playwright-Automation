//Frames
 
import {test} from '@playwright/test'
 
test('Handling frames', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
 
    await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"}).locator('[name="mytext1"]').fill('Rogersoft')
     
    await page.frameLocator('[src="frame_2.html"]').locator('[name="mytext2"]').fill('abcd')
 
    await (page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"}).childFrames())[0].locator('[id="i6"]').check()
    
})
 
//Variables
//var - can be declared anywhere, defined anywhere and accessed anywhere. declared within a block can be accessed from anywhere
//let - can be declared anywhere, defined anywhere. declared within a block cannot be accessed outside.
//const - should be defined immediately when declared. declared within a block cannot be accessed outside.
