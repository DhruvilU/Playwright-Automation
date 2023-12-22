import { expect, test } from "@playwright/test"


test('Interaction with Inputbox', async ({ page }) => {


await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo"); 

const MessageInput = page.locator("input#user-message");  // await is not required as we simply find the locator 
console.log(await MessageInput.getAttribute("placeholder"));  // we get the placeholder message attached to the textbox 
await MessageInput.scrollIntoViewIfNeeded(); // scroll the page and make it visible 


expect(MessageInput).toHaveAttribute("placeholder", "Please enter your Message");  // Assertion to make sure we have correct value 
console.log("Before entering data:" + await MessageInput.inputValue()); // Get the inputbox value before
await MessageInput.type("Hi Dhruvil");  // Enter Value to inputbox
console.log("After entering data : " + await MessageInput.inputValue());  // Get the inputbox value after 

})

test('Sum Values', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo"); 

    const sum1Input = page.locator("#sum1");   // assigned page locator to sum1Input const
    const sum2Input = page.locator("#sum2");   // // assigned page locator to sum2Input const

    const getValuesBtn = page.locator("//button[text()='Get Sum']");   // Get button value and assigned to getValuesBtn const
    let num1 = 124;    // assigned value to num1
    let num2 = 456;    // assigned value to num2

    await sum1Input.type("" + num1);   // pass value to textbox 1. We can use fill instead of type when we want to add whole value together. type is used when we want to enter single letter or character one after another
    await sum2Input.type("" + num2);   // pass value to textbox 2
    await getValuesBtn.click()  // click the button 

    const result = page.locator("#addmessage");   // find the locator and assigned to result const 
    console.log(await result.textContent());   // get the output text on consol
    let expectedResult = num1+num2;  // saved result of num1 and num2 to expectedResult 
    expect(result).toHaveText(" "+ expectedResult);  // // Assertion to make sure we have correct value 


})

test("Checkbox ", async({ page }) =>{

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    
    const singleCheckbox = await page.locator("id=isAgeSelected");
    expect (singleCheckbox).not.toBeChecked();  // Assertion to make sure check box is unchecked 
    await singleCheckbox.check(); 
    expect (singleCheckbox).toBeChecked();  // Assertion to make sure check box is checked 

} )
