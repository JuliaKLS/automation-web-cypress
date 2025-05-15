/// <reference types="cypress" />

describe('Upload da foto no perfil', () => {
    it('Upload foto perfil com sucesso', () => {
        cy.login()
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('My Info').click()
        cy.get('[class="employee-image"]').click()
        cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').selectFile('cypress/fixtures/fotoPerfil.jpg', {action: 'drag-drop'})
        cy.get('.oxd-button').should('be.visible').click()
        //validar mensgem de sucesso
    });
  });