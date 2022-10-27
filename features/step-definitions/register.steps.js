import { Given, When, Then } from "@cucumber/cucumber";
import redmineRegisterPage, {
  confirmPasswordInput,
  emailInput,
  firstnameInput,
  lastnameInput,
  passwordInput,
  registerBtn,
  submitBtn,
  successNotification,
  usernameInput,
} from "../pageobjects/redmineRegister.page";

const username = redmineRegisterPage.generateName();
const pass = "qwerty";
const firstname = "Dan";
const lastname = "Dan";
const email = redmineRegisterPage.generateName() + "@gmail.com";

Given(/^I am on redmine page$/, async function () {
  browser.setWindowSize(1200, 900);
  browser.url("https://www.redmine.org/");
  await redmineRegisterPage.registerBtn.click();
});

When(/^I fill register input and press submit$/, async function () {
  await redmineRegisterPage.usernameInput.setValue(username);
  await redmineRegisterPage.passwordInput.setValue(pass);
  await redmineRegisterPage.confirmPasswordInput.setValue(pass);
  await redmineRegisterPage.firstnameInput.setValue(firstname);
  await redmineRegisterPage.lastnameInput.setValue(lastname);
  await redmineRegisterPage.emailInput.setValue(email);
  await redmineRegisterPage.submitBtn.click();
});

Then(/^I see success notification shown$/, async function () {
  expect(await redmineRegisterPage.successNotification).toBeDisplayed();
});
