import LoginTest from '../object/loginPage';
import logindata from '../fixtures/login.json';
import { it } from 'mocha';

let loginObj;
function initializeTest() {
  cy.fixture('contact').then(function (data) {
    this.data = data;
    loginObj = new LoginTest();
  });
}
describe('Invalid Login Tests', function () {
  beforeEach(initializeTest);
  it('should display login page elements', function () {
    cy.visit(Cypress.env("BASE_URL"));
    loginObj.visitLoginPage();
    loginObj.elements.emailInput().should('be.visible').should('be.enabled');
    loginObj.elements.passwordInput().should('be.enabled');
    loginObj.elements.submitBtn().should('be.visible');
  });

  it('Blank Email And Password Error Message', () => {
    loginObj.elements.emailInput().click();
    loginObj.elements.passwordInput().click();
    loginObj.elements.emailInput().click();
    loginObj.elements.emailErrorMsg()
      .should('be.visible')
      .should('have.text', 'Please enter your email.')
    loginObj.elements.passwordErrorMsg()
      .should('be.visible')
      .should('have.text', 'Please enter a password.')
  }
)
});