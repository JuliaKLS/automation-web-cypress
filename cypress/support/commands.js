import { faker } from "@faker-js/faker";
import { seletoresLogin as el} from "./seletores/seletoresLogin";

Cypress.Commands.add('login', (username = "Admin", password = "admin123") => {
  cy.visit(el.url);
  cy.get(el.username).type(username)
  cy.get(el.password).type(password)
  cy.get(el.btnSave).click()
});
  
Cypress.Commands.add('verificaMensagemSucessoSaved',(mensagemSucesso = 'Successfully Saved') => {
  cy.contains(mensagemSucesso, {timeout: 10000}).should('be.visible')
});

Cypress.Commands.add('verificaMensagemSucessoDelete',(mensagemSucesso = 'Successfully Deleted') => {
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

Cypress.Commands.add('dataLicencaExpira', () => {
  const dataLicencaExpira = faker.date.future({ years: 5 });

  const year = dataLicencaExpira.getFullYear();
  const day = String(dataLicencaExpira.getDate()).padStart(2, '0');
  const month = String(dataLicencaExpira.getMonth() + 1).padStart(2, '0');

  const formattedDateLicencaExpira = `${year}-${day}-${month}`;
  return cy.wrap(formattedDateLicencaExpira); 
});


Cypress.Commands.add('dataAniversario', () => {
  const dataAniversario = faker.date.birthdate({ min: 18, max: 65, mode: 'age' }); 

  const year = dataAniversario.getFullYear();
  const day = String(dataAniversario.getDate()).padStart(2, '0');
  const month = String(dataAniversario.getMonth() + 1).padStart(2, '0');

  const formattedDateDataAniversario = `${year}-${day}-${month}`;
  return cy.wrap(formattedDateDataAniversario);
});

Cypress.Commands.add('uploadAttachment', (caminho = 'testeORANGEpdf.pdf') => {
  cy.get('.oxd-file-button').selectFile(`cypress/fixtures/${caminho}`, { action: 'drag-drop', force: true });
});

Cypress.Commands.add('deleteUsuario',() => {
  cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)').click();
  cy.get('.oxd-button--label-danger').click()
});

Cypress.Commands.add('deleteUsuarioAdmin',() => {
  cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)').click();
  cy.get('.oxd-toast').contains('Cannot be deleted');
});




/* OBS: O ideal e que o seletor dos elementos sejam personalizados com o prefixo data-*,
exemplo: data-cy, data-testid, data-test, data-qa, etc. Porém, nos sites open source, como o Orange, 
não é comum termos esse personalização, por isso utilizei os selores acima, pois são os disponíveis*/