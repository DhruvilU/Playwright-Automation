import { chromium, test } from "@playwright/test"

test("Login test demo", async () => { 
    
    const browser = await chromium.launch();    // Launch new chromium browser
    const context = await browser.newContext();  // Creare new browser context 
    const page = await context.newPage();    // Create new page  
    
// launch the browser and click on login from My account dropdown 

    await page.goto("https://ecommerce-playground.lambdatest.io/");    // Navigate to URL
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");     // Hover My account dropdown
    await page.click("text=Login");  // Click on Login text from My account dropdown 

// Enter the credentails and click on the login button 

    await page.fill("input[name='email']", "xyz@gmail.com");     // Enter email into email field 
    await page.fill("input[name='password']", "Change@123");    // Enter password into password field 
    await page.click("input[value='Login']");    // Click to Login button  

    await page.waitForTimeout(5000); 

// New Page (tab) Context to see session is carry forward or not, here session is carry forward

const page1 = await context.newPage(); 
await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account"); 

await page.waitForTimeout(5000); 


// Create new browser context and make sure session is not carry forwarded as it's new incognito browser

const newContext = browser.newContext();  // New browser context is created 
const newPage = (await newContext).newPage();  // new page is created for new browser context 
(await newPage).goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");  // URL is opened 

await page.waitForTimeout(5000);

    
})
