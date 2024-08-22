class LogoutTest {
    elements = {
      menu: () => cy.get('#react-burger-menu-btn'),
      logout: () => cy.get('[data-test="logout-sidebar-link"]')
    };
    
    menuClick() {
        this.elements.menu().click(); 
    }

    logoutClick() {
        this.elements.logout().click();
    }

    clearAndType(element, text) {
        element().clear().type(text);
      }
}

export default LogoutTest;