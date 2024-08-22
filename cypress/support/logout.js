import LogoutTest from '../object/logoutPage'

Cypress.Commands.add('logout', () => {
    let logoutObj;
    logoutObj = new LogoutTest();
    logoutObj.elements.menu().should('be.visible')
    logoutObj.menuClick()
    logoutObj.elements.logout().should('be.visible');
    logoutObj.logoutClick();
})