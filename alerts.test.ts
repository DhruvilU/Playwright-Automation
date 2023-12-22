import { expect, test } from "@playwright/test"


test('Java Script Alert', async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    
    page.on("dialog", async (alert) => {

        const alertValue = await alert.message(); 
        console.log(alertValue); 
        await alert.accept();

    })

    await page.locator("button:has-text('Click Me')").nth(0).click(); // click on teh 1st/2nd/... nth element which has name Click Me button


})

test ('Confirm Box Java Script Alert', async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"); 

    page.on("dialog", async (alert) => {

        const alertValue = await alert.message(); 
        console.log(alertValue); 
        await alert.dismiss();

    })

    await page.locator("button:has-text('Click Me')").nth(1).click(); // click on teh 1st/2nd/... nth element which has name Click Me button
    expect(page.locator("#confirm-demo")).toContainText("Cancel!"); 

})

test ('Prompt Box Java Script Alert', async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"); 

    page.on("dialog", async (alert) => {

        const alertvalue = await alert.defaultValue(); 
        console.log(alertvalue); 
        await alert.accept("Dhruvil"); 
})

        await page.locator("button:has-text('Click Me')").nth(2).click(); 
        expect(page.locator("#prompt-demo")).toContainText("'Dhruvil'"); 

})


test ('Bootstrap Single Modal alert', async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

    await page.locator("button[data-target='#myModal']").click(); 

   // const modalMsg = await page.locator("div#myModal>div>div>div"); 
  // console.log(modalMsg); 

    await page.locator("(//button[contains(@class,'btn btn-dark')])[2]").click(); 

})

test ('Bootstrap Multi Modal alert', async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

    await page.locator("button[data-target='#myMultiModal']").click(); 

    await page.locator("button[data-target='#mySecondModal']").click();
    await page.locator("(//button[text()='Save Changes'])[3]").click();  

    await page.locator("(//button[text()='Save Changes'])[2]").click(); 


})
