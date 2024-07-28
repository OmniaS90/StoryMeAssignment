import {expect} from "@playwright/test";

const { When, Given, Then } = require("@cucumber/cucumber")
import { log } from 'console';
import { HomePage } from '../Pages/HomePage';
import { RegisterUser } from '../Pages/RegisterUser';
import { poManager } from '../Support/Hooks';
import axios from "axios";
let response: any;
let registerUser:RegisterUser
let endpoint: any
let userData: any


Then("A form will appear", async function(){
	await registerUser.AssertFirstNameExists()
});

Then("User will input First Name {string}", async function(FirstName:string) {
	await registerUser.EnterFname(FirstName)
});

Then("User will input Last Name {string}", async function(LastName:string) {
	await registerUser.EnterLname(LastName)
});

Then("User will input Email {string}", async function(Email:string) {
	await registerUser.EnterEmailAddress(Email)
});

When("User clicks register", async function() {
	await registerUser.ClickRegisterBtn()
});

Then ("System will show success msg", async function (){
	await registerUser.AssertThatUserRegisteredSuccessfully();
});


Given('I have the user registration endpoint', async function () {
	endpoint = 'https://example.com/api/register';
});

When('I send a registration request with valid user data', async function () {
	userData = {
		FirstName: 'Omnia',
		LAstName: 'Elsayed',
		email: 'test@example.com'

	};

	try {
		response = await axios.post(endpoint, userData);
	} catch (error:any) {
		response = error.response;
	}
});

Then('I should receive a successful response with status code 201', async function () {
	expect(response.status).toBe(200);
});

Then('the response message should be {string} and Data should be the same as input', async function (expectedMessage:string) {
	const actualMessage = response.data.message; // Adjust this based on your API response structure
	expect(actualMessage).toBe(expectedMessage);
	console.log(response.data);
	const returnedFistname = response.data.FirstName;
	expect(returnedFistname).toBe(userData.FirstName);
});

















