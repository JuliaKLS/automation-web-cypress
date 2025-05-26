/// <reference types="cypress" />

import { faker} from '@faker-js/faker';
import {seletoresCriarUsuario as el} from '../support/seletores/seletoresCriarUsuario';
describe('Cadastros de Usuarios', () => {
    it('Criar Usuario', () => {
      cy.login();
      cy.get(el.btnAdmin).click();
      cy.get(el.btnAdd).contains('Add').click();
      cy.get(el.selectRole).click();
      cy.get(el.role).contains('ESS').click();

      let nomeUsuario = faker.animal.dog();
      let senhaUsuarioIgual = faker.internet.password();

      cy.get(el.employeeName).type('Test', {timeout: 1000}).should('have.value', 'Test')
      cy.get(el.listBox).contains('Test').click();
      cy.get(el.selectStatus).click();
      cy.get(el.statusFuncionario).contains('Enabled').click();
      cy.get(el.username).type(nomeUsuario);
      cy.get(el.password).eq(0).type(senhaUsuarioIgual);
      cy.get(el.confirmPassword).eq(1).type(senhaUsuarioIgual);
      cy.get(el.btnSave).click();
      cy.verificaMensagemSucessoSaved();
      cy.deleteUsuario();
      cy.verificaMensagemSucessoDelete();
    
    });

    it('Validar que admin não pode ser deletado', () => {
      cy.login();
      cy.get(el.btnAdmin).click();
      cy.deleteUsuarioAdmin();
      
    });
});
  