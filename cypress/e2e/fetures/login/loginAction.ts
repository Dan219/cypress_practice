import { LoginAction } from "./loginAction";

describe('Login Tests with Fixtures', () => {
    const loginAction = new LoginAction();
    
    beforeEach(() => {
        loginAction.navigateToLogin();
    });

    it('should login with valid credentials', () => {
        cy.fixture('users').then((users) => {
            loginAction.loginAs(users.validUsers.email, users.validUsers.password);
            // Verificar que el login fue exitoso
            cy.url().should('include', '/dashboard');
        });
    });

    it('should show error with invalid credentials', () => {
        cy.fixture('users').then((users) => {
            loginAction.loginAs(users.invalidUsers.email, users.invalidUsers.password);
            // Verificar mensaje de error
            cy.get('.error-message').should('be.visible');
        });
    });
});