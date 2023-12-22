import { Page, expect, test } from "@playwright/test"


test ('Interacts with Single New Tab', async ({page}) => {
 
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"); 

    console.log("INTERACTON WITH SINGLE TAB"); 
    console.log("-------------------------------------");

    await page.waitForLoadState('domcontentloaded'); 
    console.log("Master Page URL: ", page.url());

   const [newWindow] = await Promise.all([

        page.waitForEvent("popup"),
        page.click("//a[contains(text(),'Follow On Twitter')]"),
       
    ])

    console.log("New Window URL:", newWindow.url()); 
    console.log("-------------------------------------");

})

test ('Inreracts with Multiple New Tabs',async ({page}) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"); 

    console.log("INTERACTON WITH MULTI TABS"); 
    console.log("-------------------------------------");

    await page.waitForLoadState('domcontentloaded'); 
    console.log("Master Page URL: ", page.url());

    const [multiPage] =  await Promise.all([

        page.waitForEvent("popup"),
        page.click("#followboth")

    ])

// Identify opened pages and print it's total numbers

   const pages =  multiPage.context().pages(); 
   console.log("No. of pages: ", pages.length); 

// Print each page url which are opened

   pages.forEach(tab => {

    console.log("Page URL: ",tab.url()); 
    
   });

// Identify particular page to interact with 

    let facebookPage: Page; 

    for (let index = 0; index < pages.length; index++) {

        const pageURL = pages[index].url(); 

        if(pageURL == "https://www.facebook.com/lambdatest/") {

        facebookPage = pages[index]; 

       }    
    }

    const pageText = await facebookPage.textContent("//h1"); 
    console.log(pageText); 

}) 
