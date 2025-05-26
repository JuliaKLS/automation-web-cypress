/// <reference types="cypress" />

import { seletoresLogin as el } from "../support/seletores/seletoresLogin";
describe('Login - Web', () => {
    it('Login com sucesso', () => {
        cy.login()
    });

    it('Login com username inválido', () => {
        cy.visit(el.url);
        cy.get(el.username).type('invalido');
        cy.get(el.password).type('admin123');
        cy.get(el.btnSave).click();
        cy.get(el.textoDeInvalido).should('contain.text', 'Invalid credentials')
    });

    it('Login com password inválido', () => {
        cy.visit(el.url);
        cy.get(el.username).type('Admin');
        cy.get(el.password).type('invalido');
        cy.get(el.btnSave).click();
        cy.get(el.textoDeInvalido).should('contain.text', 'Invalid credentials')
    });
  });

  describe('Login - Responsivo no iphone-X', () => {

    beforeEach(() => {
        cy.viewport('iphone-x');
  });
    it('Login com sucesso', () => {
    cy.login()
  });

    it('Login com username inválido', () => {
        cy.visit(el.url);
        cy.get(el.username).type('invalido');
        cy.get(el.password).type('admin123');
        cy.get(el.btnSave).click();
        cy.get(el.textoDeInvalido).should('contain.text', 'Invalid credentials')
    });

    it('Login com password inválido', () => {
        cy.visit(el.url);
        cy.get(el.username).type('Admin');
        cy.get(el.password).type('invalido');
        cy.get(el.btnSave).click();
        cy.get(el.textoDeInvalido).should('contain.text', 'Invalid credentials')
    });
});
  
describe('Login - Responsivo no iPad Mini', () => {

    beforeEach(() => {
        cy.viewport('ipad-mini');
  });
    it('Login com sucesso', () => {
    cy.login()
  });

    it('Login com username inválido', () => {
        cy.visit(el.url);
        cy.get(el.username).type('invalido');
        cy.get(el.password).type('admin123');
        cy.get(el.btnSave).click();
        cy.get(el.textoDeInvalido).should('contain.text', 'Invalid credentials')
    });

    it('Login com password inválido', () => {
        cy.visit(el.url);
        cy.get(el.username).type('Admin');
        cy.get(el.password).type('invalido');
        cy.get(el.btnSave).click();
        cy.get(el.textoDeInvalido).should('contain.text', 'Invalid credentials')
    });
});
  
  