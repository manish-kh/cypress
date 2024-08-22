import LoginTest from '../object/loginPage';

Cypress.Commands.add('login', () => {
    let loginObj;
    loginObj = new LoginTest();
    cy.visit(Cypress.env("BASE_URL"));
    loginObj.elements.username().should('be.visible').should('be.enabled');
    loginObj.elements.password().should('be.enabled');
    loginObj.elements.submit().should('be.visible');
    loginObj.enterUsername(Cypress.env("USERNAME"));
    loginObj.enterPassword(Cypress.env("PASSWORD"));
    loginObj.submitClick();
})