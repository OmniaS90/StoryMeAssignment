import { Page, Locator } from 'playwright';

class HomePage{
    page: Page;
    HomePage:Locator
    RegisterBtn:Locator


   
  constructor(page: Page) {
    this.page = page;
    this.page.setDefaultTimeout(60000);
    this.page.setDefaultNavigationTimeout(60000);
    this.HomePage=page.locator('//a[@href="/en/eservices/rental-index/" and @class="swiper-slide app service-box" and .//span[contains(@class, "service-name") and contains(text(), "Inquiry About")]]')
    this.RegisterBtn=page.locator('//button[@class="btn dropdown-toggle dld-sub-header__btn rounded-circle" and @type="button" and @data-bs-toggle="dropdown"][span[@class="sr-only" and text()="Login"]]')

  }
  async clickOnRentalIndex(){
    await this.HomePage.click()
    await this.page.setDefaultTimeout(60000);
  }

  async PageNavigation() {
    await this.page.goto('https://example.com/api/register');
  }
  async CLickOnRegisterBtn(){
   await  this.page.setDefaultTimeout(60000);
  await   this.RegisterBtn.click()
}

}
export { HomePage };