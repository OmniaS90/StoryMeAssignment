const { When, Given, Then } = require("@cucumber/cucumber")
import { poManager } from '../Support/Hooks';

let homePage


Given("User navigtes to Url", async function () {
    homePage = await poManager.getHomePage();
    await homePage.PageNavigation()
});
When("User click Register Button", async function () {
    
    homePage=await poManager.getHomePage();
   await  homePage.CLickOnRegisterBtn()

});