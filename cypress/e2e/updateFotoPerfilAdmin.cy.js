/// <reference types="cypress" />

import { seletoresUpdateFotoPerfilAdmin as el } from "../support/seletores/seletoresFotoPerfilAdmin";
describe('Update da foto no perfil Admin', () => {
    it('Update foto perfil admin com sucesso', () => {
        cy.login(); 
        cy.get(el.btnMyInfo).click(); 
        cy.get(el.clicaFotoAtual).click(); 
        cy.get(el.clicaLugarDaFotoNova).selectFile('cypress/fixtures/fotoPerfil.jpg', {action: 'drag-drop', force: true});
        cy.get(el.btnSave).click()
    });
  });