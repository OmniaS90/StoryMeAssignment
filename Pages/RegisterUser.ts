import { expect } from '@playwright/test';
import { Page, Locator } from 'playwright';
class RegisterUser {
    page: Page;
    FnameTxt: Locator
    LnameTxt: Locator
    EmailTxt:Locator
    RegisterBtn:Locator
    SucessMsg:Locator

    constructor(page: Page) {
        this.page = page;
        this.page.setDefaultTimeout(60000);
        this.page.setDefaultNavigationTimeout(60000);
        this.FnameTxt = page.locator('//input[text()="FirstName"]')
        this.LnameTxt = page.locator('//input[text()="LastName"]')
        this.EmailTxt = page.locator('//input[text()="Email"]')
        this.RegisterBtn = page.locator('//button[type="Submit"]')
        this.SucessMsg= page.locator('')

    }

    async AssertFirstNameExists() {
        await expect( this.FnameTxt).toBeVisible()
    }
    async EnterFname(FirstName:string) {
        await this.FnameTxt.fill(FirstName)
    }
    async EnterLname(LastName:string) {
        await this.FnameTxt.fill(LastName)
    }
    async EnterEmailAddress(Email:string) {
        await this.FnameTxt.fill(Email)
    }

    async ClickRegisterBtn() {
        await this.RegisterBtn.click()
    }
    async AssertThatUserRegisteredSuccessfully(){
        await this.SucessMsg.waitFor({state : 'visible'})
        await expect(this.SucessMsg).toContainText('User is registered successfully')
    }
}
export { RegisterUser };
