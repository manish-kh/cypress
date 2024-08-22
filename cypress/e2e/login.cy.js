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
describe('Invalid Login Tests', function () {
  beforeEach(initializeTest);
  it("Login Test", function(){
    cy.login();
  }) 
  it("Logout Test", function(){
    cy.logout();
  })
});
