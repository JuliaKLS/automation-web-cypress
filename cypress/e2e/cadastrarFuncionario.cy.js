/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import { SeletoresCadastrarFuncionario as el } from "../support/seletores/seletoresCadastrarFuncionario";

describe('Cadastros de Funcionarios - WEB', () => {
  it('Cadastrar Funcionario Com Sucesso', () => {
    cy.login();
    cy.get(el.btnPim).click();
    cy.get(el.btnAdd).click();
    cy.uploadFotoPerfil();

    let firstName = faker.person.firstName();
    let middleName = faker.person.middleName();
    let lastName = faker.person.lastName();
    let employeeId = faker.number.int({ min: 5, max: 10 });
    let username = `${firstName}.${lastName}`;

    cy.get(el.firstName).type(firstName);
    cy.get(el.middleName).type(middleName);
    cy.get(el.lastName).type(lastName);
    cy.get(el.employeeId).type(employeeId);
    cy.get(el.creatLoginDetails).click();
    cy.get(el.username).type(username);
    cy.get(el.statusEnabled).click();

    cy.passwordEmployee().then(passwordEmployee => {
      cy.get(el.password).eq(0).type(passwordEmployee);
      cy.get(el.confirmPassword).eq(1).type(passwordEmployee);
    });

    cy.get(el.btnSave).click();
  });
});



describe ('Cadastrar Funcionario - Responsivo no iphone', () => {
  beforeEach(() => {
    cy.viewport('iphone-x'); 
  });

  it('Cadastrar Funcionario Com Sucesso no iphone-x', () => {
    cy.login();
    cy.get(el.btnMenuSanduiche).click();
    cy.get(el.btnPim).click();
    cy.get(el.btnAdd).click();
    cy.uploadFotoPerfil();

    let firstName = faker.person.firstName();
    let middleName = faker.person.middleName();
    let lastName = faker.person.lastName();
    let employeeId = faker.number.int({ min: 5, max: 10 });
    let username = `${firstName}.${lastName}`;

    cy.get(el.firstName).type(firstName);
    cy.get(el.middleName).type(middleName);
    cy.get(el.lastName).type(lastName);
    cy.get(el.employeeId).type(employeeId);
    cy.get(el.creatLoginDetails).click();
    cy.get(el.username).type(username);
    cy.get(el.statusEnabled).click();

    cy.passwordEmployee().then(passwordEmployee => {
      cy.get(el.password).eq(0).type(passwordEmployee);
      cy.get(el.confirmPassword).eq(1).type(passwordEmployee);
    });

    cy.get(el.btnSave).click();
  });
});

describe ('Cadastrar Funcionario - Responsivo iPad Mini', () => {
  beforeEach(() => { 
    cy.viewport('ipad-mini');
  });

  it('Cadastrar Funcionario Com Sucesso no iPad Mini', () => {
    cy.login();
    cy.get(el.btnMenuSanduiche).click();
    cy.get(el.btnPim).click();
    cy.get(el.btnAdd).click();
    cy.uploadFotoPerfil();

    let firstName = faker.person.firstName();
    let middleName = faker.person.middleName();
    let lastName = faker.person.lastName();
    let employeeId = faker.number.int({ min: 5, max: 10 });
    let username = `${firstName}.${lastName}`;

    cy.get(el.firstName).type(firstName);
    cy.get(el.middleName).type(middleName);
    cy.get(el.lastName).type(lastName);
    cy.get(el.employeeId).type(employeeId);
    cy.get(el.creatLoginDetails).click();
    cy.get(el.username).type(username);
    cy.get(el.statusEnabled).click();

    cy.passwordEmployee().then(passwordEmployee => {
      cy.get(el.password).eq(0).type(passwordEmployee);
      cy.get(el.confirmPassword).eq(1).type(passwordEmployee);
    });

    cy.get(el.btnSave).click();
  });
});