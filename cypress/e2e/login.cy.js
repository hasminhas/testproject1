describe('login page test', () => {
    it('it verifies login functionality with correct credentials', () => {
      // Visit a URL
      cy.visit('https://fastcrib.com/fastcrib2/user/login');
  
      // Find an input username field, type into it, and verify the value
      cy.get('#UserLogin_username')
        .type('hassan.ahmad@confiz.com')
        .should('have.value', 'hassan.ahmad@confiz.com');

        cy.get('#UserLogin_password')
        .type('ecb257ea460c9308f68cbcffc66d3cfd')
        .should('have.value', 'ecb257ea460c9308f68cbcffc66d3cfd');
        
        cy.get('#yw0')
        .click();

        cy.get('.content-header')
        .should('be.visible');
      
    });
  });
  