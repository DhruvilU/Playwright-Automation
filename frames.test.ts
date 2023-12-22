import { expect, test } from "@playwright/test"


test('Interact with frames', async ({ page }) => {

    await page.goto("https://letcode.in/frame");

    const allFrames = page.frames();
    console.log("No. of frames: " + allFrames.length); 

// first way to play with frame, where we store frame src id into frame locator and use it to interact with elements 

   // const frameWay = page.frameLocator("#firstfr"); 
  //  await frameWay.locator(input[name='fname']).fill("Dhruvil"); 

// another way to play with frame, where we store frame name and use it to interact with element 

    const myFrame1 = page.frame("firstFr"); 

    const fname = "Dhruvil"
    const lname = "Upadhyay"

    await myFrame1?.fill("input[name='fname']", fname);   //?. check if frane is null or not
    await myFrame1?.fill("input[name='lname']", lname);  //?. check if frane is null or not

   // const expectedText = 'You have entered ${fname} ${lname}'; 
   
    const expectedText = `You have entered ${fname} ${lname}`;
    console.log("Expected Text is " + expectedText); 

    const actualText = (await myFrame1?.locator("p.title.has-text-info").innerText());
    console.log("Actual Text is " + actualText); 

    expect(actualText).toContain(expectedText); 
    
    await page.waitForTimeout(3000);     

})

test('Interact with Inner frames', async ({ page }) => {

    await page.goto("https://letcode.in/frame");

    await page.frameLocator('iframe[name="firstFr"]').frameLocator('app-frame-content iframe').getByPlaceholder('Enter email').click();
    await page.frameLocator('iframe[name="firstFr"]').frameLocator('app-frame-content iframe').getByPlaceholder('Enter email').fill('upadhyay.dhruvil@gmail.com');

})
