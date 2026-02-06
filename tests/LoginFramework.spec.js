//framework

import {test,expect} from '@playwright/test'


import { LoginPage } from './Pages/Login'



import data from './testdata/login.json'

import { CommonFunctions } from './common/commonfunctions'
 
test('Valid login', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
 
    const login = new LoginPage(page)
    const common = new CommonFunctions()
 
    var username = data[0].Username
    var password = data[0].Password
    const csvData = common.readFromCSV('login.csv')
    var csv_username = csvData[1].Username
    var csv_password = csvData[1].Password
    //Enter username, below step from json file
    //await login.fillUsername(username)
    await login.fillUsername(csv_username)
    //Enter Password, below step for json file
    //await login.fillPassword(password)
    await login.fillPassword(csv_password)
    //Click Login button
    await login.clickLoginButton()
 
})
 
//data driven framework
 
 