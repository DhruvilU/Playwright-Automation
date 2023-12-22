import { expect, test } from "@playwright/test"


test('Select Option', async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    
    await page.selectOption("#select-demo", {

       // label: "Tuesday"   // we can use label to select dropdown value 
      //    value: "Tuesday   // we can use value to select dropdown value 
         index: 3   // we can use index to select dropdown value 

    }) 

    await page.waitForTimeout(3000);

})

test('MultiSelect Option', async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    
    await page.selectOption("#multi-select", [
        
        { label: "Texas" },  {index: 3} , {value: "Washington"}   // we can use label or index or value to select dropdown value 
    
    ]) 

    await page.waitForTimeout(3000);

})

test('Jquery Dropdown with Search', async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    
    await page.click("(//span[@class='select2-selection select2-selection--single'])[1]"); 

    const inputBox = await page.locator("(//input[@role='textbox'])[2]");
  
    await inputBox.fill("Denmark"); 
    await page.waitForTimeout(1000);

    await page.click("li[role='treeitem']"); 


    await page.click("(//span[@class='select2-selection select2-selection--single'])[1]");
    await inputBox.fill("abc");
    await page.waitForTimeout(1000);
    expect (await page.locator("li.select2-results__option.select2-results__message")).toContainText("No results found"); 

   // await page.locator("//li[text()='Denmark']").click(); 

})

test('Jquery Select Multiple Values ', async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

    const searchBox = await page.locator("input[type='search']"); 
   
    await searchBox.fill("Alaska");
    await page.click("li[role='treeitem']"); 

    await searchBox.fill ("California"); 
    await page.click("li[role='treeitem']"); 

    await searchBox.fill("Nevada");
    await page.click("li[role='treeitem']"); 

    await searchBox.fill("abc");
    expect (await page.locator("li.select2-results__option.select2-results__message")).toContainText("No results found"); 
    

})

test('Jquery dropfown with enable values ', async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

      // Click the dropdown to open it
      await page.click("(//span[@class='select2-selection__arrow'])[2]");

     // Type and select "American Samoa" in the search box
      const searchBox = await page.locator("(//input[@type='search'])[2]");
      await searchBox.fill("American Samoa");
      await page.locator("//li[@role='treeitem']").click();

    // Wait for the selected text element to have the expected value
      const selectedTextLocator = await page.locator("(//span[@class='selection'])[3]").innerText();
      console.log(selectedTextLocator);
      expect(selectedTextLocator.trim()).toBe("American Samoa");

    
})

test('Jquery dropfown with disable values ', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

      // Click the dropdown to open it
      await page.click("(//span[@class='select2-selection__arrow'])[2]");

     // Type and select "Guam" in the search box
      const searchBox = await page.locator("(//input[@type='search'])[2]");
      await searchBox.fill("Guam");
      const dropTreeItem =  await page.locator("//li[@role='treeitem']"); 

     // Verify if dropTreeItem is enable or disable 
      const isClickable = await dropTreeItem.isDisabled(); 

      if(isClickable){
        console.log("Element is not clickable.");
      }
      else{
        console.log("Element is clickable.");
        await dropTreeItem.click(); 
      }

})
