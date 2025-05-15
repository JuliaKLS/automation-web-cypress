import { faker } from "@faker-js/faker";

Cypress.Commands.add('login', (username = "Admin", password = "admin123") => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get('[name="username"]').type(username)
  cy.get('[name="password"]').type(password)
  cy.get('[type="submit"]').click()
});
  
Cypress.Commands.add('verificaMensagemSucesso',(mensagemSucesso = 'Successfully Saved') => {
  cy.contains(mensagemSucesso, {timeout: 10000}).should('be.visible')
});
  
Cypress.Commands.add('uploadFotoPerfil', (caminho = 'fotoPerfil.jpg') => {
  cy.get('.employee-image').click();
  cy.get('input[type="file"]').selectFile(`cypress/fixtures/${caminho}`, { action: 'drag-drop', force: true });
});

Cypress.Commands.add('passwordEmployee',() => {
  return faker.internet.password({
    length: 12,            
    memorable: false,      
    pattern: /[A-Za-z0-9!@#$%^&*()_+]/, 
  });
});