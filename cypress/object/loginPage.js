class LoginTest {
    elements = {
      username: () => cy.get('[data-test="username"]'),
      password: () => cy.get('[data-test="password"]'),
      submit: () => cy.get('[data-test="login-button"]')
    };
    enterUsername(name) {
      this.clearAndType(this.elements.username, name);
    }
    enterPassword(password) {
      this.clearAndType(this.elements.password, password);
    }

    submitClick() {
        this.elements.submit().click(); // Invoke .click() to perform the click action
    }
    clearAndType(element, text) {
        element().clear().type(text);
      }
}

export default LoginTest;