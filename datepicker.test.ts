import { expect, test } from "@playwright/test";

test('calender date using fill function', async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"); 
    
    let bdate = "1989-10-07"; 
    await page.fill("input[type='date']", bdate); 
    await page.waitForTimeout(2000); 

})

test('calender date range selector', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    const startInput = page.locator("//input[@placeholder='Start date']");
    const endInput = page.locator("//input[@placeholder='End date']");

    // Select start date
    await startInput.click();

    const startmmyyyy = page.locator("(//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//th[text()='«'])[1]");
    const startdatevalue = page.locator("//td[@data-date='1665100800000']");

    let dateToPrevSelect: string = "October 2022";

    while (true) {
        const StartMonthYear = await startmmyyyy.textContent();

        if (StartMonthYear === dateToPrevSelect) {
            break;
        }

        await prev.click();
    }

    // Now that you are on the desired month, select the specific date
    await startdatevalue.click();

    // Wait for some time if needed
    await page.waitForTimeout(3000);

    
});
