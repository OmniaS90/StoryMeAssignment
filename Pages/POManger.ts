import { Page } from 'playwright';
import{HomePage} from './HomePage'
import { RegisterUser } from './RegisterUser';


class POManager {
  page: Page;
  registerUser: RegisterUser
  homePage:HomePage


  constructor(page: Page) {
    this.page = page;
    this.homePage= new HomePage(page)
    this.registerUser=new RegisterUser(page)
  }


  getHomePage(){
    return this.homePage
  }

  getOwnerRegisterUser(){
    return this.registerUser
  }

}
export { POManager };