describe('Verify ivirtyal login', () => {

    beforeEach(() => {
        cy.visit('/login/index.php');

    })

    context('Happy path', () => {
        it('Login succefully', () => {
            const usernameInput = cy.get('#username');
            const paswordInput = cy.get('#password');
            const buttonSummit = cy.get('#loginbtn');

            usernameInput.type('00000204306');
            paswordInput.type('adminadmin');
            buttonSummit.click;
        });

        it('Login using fixures', () => {

            //get elements
            const usernameInput = cy.get('#username');
            const paswordInput = cy.get('#password');
            const buttonSummit = cy.get('#loginbtn');
            //get credentials
            cy.fixture("users").then((users) => {
                const { invalidUsers } = users;
                //set actions
                usernameInput.type(invalidUsers.email);
                paswordInput.type(invalidUsers.pasword);

                buttonSummit.click();
                //investigar
                //robot framework
                // pom architectue testing

            })
        })
    })
});