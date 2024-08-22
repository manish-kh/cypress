class AppsTest {
    elements = {
      apps: () => cy.get('[data-cy="main-apps-menu"]'),
    };

    appsClick() {
        this.elements.apps().click(); // Invoke .click() to perform the click action
      }
    clearAndType(element, text) {
        element().clear().type(text);
      }
}

export default AppsTest;