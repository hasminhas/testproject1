describe('login page test', () => {
    it('it verifies login functionality with correct credentials', () => {
      // Visit a URL
      cy.visit('https://fastcrib.com/fastcrib2/user/login');
  
      // Find an input username field, type into it, and verify the value
      cy.get('#UserLogin_username')
        //.type('insert username')
        //.should('have.value', 'insert username');

        cy.get('#UserLogin_password')
       // .type('insert password')
        //.should('have.value', 'insert password');
        
        cy.get('#yw0')
        .click();
        cy.get('.content-header')
        .should('be.visible');
      
    });
  });
  