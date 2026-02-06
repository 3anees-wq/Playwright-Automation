//Annotations
 
//test.only - to run only the mentioned test cases
//test.skip - to skip the mentioned test cases
//test.fixme - to skip the mentioned test cases & to inform the viewer that the script needs a fix
//test.fail - expecting the final status of the test to be failed. Only if the final status is failed, the est will be reported as Passed in report
//test.step - to represent each step in a test case
//test.describe - to represent test suite of test cases. A describe can have multiple test cases in it



//test.setTimeout(45000)   - in milliseconds  , for explicit Timeout  for tetscase

//Timeout can be change or add in config file,  timeout:45000   - So it will be applicable for all tests
//globalTimeout : 45000 , If total 10 testcase then that execution maximum time.
//expect: {timeout:20}   , This is for assertion timeout

 //timeout: 2*60*1000,
  //globalTimeout: 2*60*60*1000,
  //expect: {timeout:10*1000},



  test.step('Launch the website', async () => {
            await page.goto('https://testautomationpractice.blogspot.com/')
        })





        test.describe.only('Handling the different date pickers in the website', async () => {
 
test('test1', async ({page})=> {
 
}
 
test('test2', async({page}) => {
 
}
 
}

//to set timeout within a test case - test.setTimeout(60 * 1000)