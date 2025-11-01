describe('Verify Basic Form', () => {

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.log('Hello test case')
    });

    context('Bad Path', () => {
        it('Validate Form bad path', () => {
            // Elements
            const emailInput = cy.get('#user-name');
            const passwordInput = cy.get('#password');
            const buttonSummit = cy.get('#login-button');
            
            //Actions
            emailInput.type('kese@gmasidas.com');
            passwordInput.type('pepepepeasd22');
            buttonSummit.click({force:true});
            const errorDyspaly = cy.get('.error');
            //Expected Result

            errorDyspaly.should('be.visible');

        });

    });

    context('Happy path', () => {
        it('Validate Form Succesfully', () => {
            cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click({ force: true });

        });
    });

})