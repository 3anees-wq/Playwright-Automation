//Locator - id, name, xpath, css selector

//import test = require("node:test");

 
//DOM
//fill()
 
//page.getByRole()
//page.getByText("text_value")  - text value of the element
//page.getByLabel("text_value_of _the_Label") - when the tag name is label
//page.getByTestId("value_of_data-test-id_attribute")        - if the element contains data-test-id attribute
//page.getByTitle("value_of_title_attribute") - if the element contains title attribute
//page.getByPlaceholder("value_of_palceholder_attribute") - if the element has placeholder attribute
//page.getByAltText("value_of_alt_attribute") - if the element has alt attribute
 
//Login


 import {test} from '@playwright/test'

test('Login to website', async({page}) => {

    await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder("Username").fill('standard_user')
    await page.getByPlaceholder("password").fill('secret_sauce')
    await page.getByRole("button", {id: "login-button"}).click()

    
    await page.waitForTimeout(1000)   
}

)
