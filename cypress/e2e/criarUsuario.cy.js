/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import {seletoresCriarUsuario as el} from '../support/seletores/seletoresCriarUsuario';
describe('Cadastros de Usuarios', () => {
    it('Criar Usuario', () => {
      cy.login();
  
      cy.get(el.btnAdmin).click();
      cy.get(el.btnAdd).contains('Add').click();

      cy.get(el.selectRole).click();
      cy.get(el.role).contains('ESS').click();

      let nomeUsuario = faker.animal.dog();
      cy.get(el.employeeName).type(nomeUsuario);

      cy.get(el.selectStatus).click();
      cy.get(el.statusFuncionario).contains('Enabled').click();

      cy.get(el.username).type(nomeUsuario);

      let senhaUsuarioIgual = faker.internet.password();
      cy.get(el.password).eq(0).type(senhaUsuarioIgual);
      cy.get(el.confirmPassword).eq(1).type(senhaUsuarioIgual);

      cy.get(el.btnSave).click();
    });
});
  