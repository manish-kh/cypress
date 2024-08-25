import LoginTest from '../object/loginPage';
import logindata from '../fixtures/login.json';
import { it } from 'mocha';

let loginObj;
function initializeTest() {
  cy.fixture('login').then(function (data) {
    this.data = data;
    loginObj = new LoginTest();
  });
}
describe('Login Test cases', function () {
  beforeEach(initializeTest);
  it("Verify login with invalid username and password", function(){
    cy.visit(Cypress.env("BASE_URL"));
    loginObj.enterUsername(logindata.invalidUsername);
    loginObj.enterPassword(logindata.invalidPassword);
    loginObj.submitClick();
    loginObj.elements.error()
      .should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });
  it("Verify login with valid username and invalid password", function(){
    loginObj.enterUsername(Cypress.env("USERNAME"));
    loginObj.enterPassword(logindata.invalidPassword);
    loginObj.submitClick();
    loginObj.elements.error()
      .should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });
  it("Verify login with invalid username but valid password", function(){
    loginObj.enterUsername(logindata.invalidUsername);
    loginObj.enterPassword(Cypress.env("PASSWORD"));
    loginObj.submitClick();
    loginObj.elements.error()
      .should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it("Verify login with locked out user", function(){
    loginObj.enterUsername(logindata.lockedOutUsername);
    loginObj.enterPassword(Cypress.env("PASSWORD"));
    loginObj.submitClick();
    loginObj.elements.error()
      .should('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it("Login using valid username and valid password", function(){
    cy.login();
  });

  it("Logout Test", function(){
    cy.logout();
  })
  
});
