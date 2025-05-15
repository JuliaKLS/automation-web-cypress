/// <reference types="cypress" />


describe('Login', () => {
    it('Login com sucesso', () => {
        cy.login()
    });

    it('Login com username inválido', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('invalido')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()

        cy.get('.oxd-alert-content-text')
        .should('contain.text', 'Invalid credentials')
    });

    it('Login com password inválido', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('invalido')
        cy.get('[type="submit"]').click()

        cy.get('.oxd-alert-content-text')
        .should('contain.text', 'Invalid credentials')
    });
  });
  