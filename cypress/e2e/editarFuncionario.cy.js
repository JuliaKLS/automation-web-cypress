/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import { seletoresEditarFuncionarioPersonalDetails as el } from "../support/seletores/seletoresEditarFuncionario";
describe('Editar Funcionarios', () => {
    it('Editar Primeiro Funcionario da Listagem', () => {
        cy.login();

        let otherIdAndDriversLicenseNumber = faker.number.int({ min: 7, max: 15 });

        cy.get(el.btnPim).click();
        cy.get(el.btnEditar).click();
        cy.get(el.otherId).type(otherIdAndDriversLicenseNumber);
        cy.get(el.driversLicenseNumber).type(otherIdAndDriversLicenseNumber);

        cy.dataLicencaExpira().then((dataLicencaExpira) => {
            cy.get(el.licenseExpiryDate).click().clear().type(dataLicencaExpira);
            cy.get(el.btnClearCalendar).contains('Close').click();
        });

        
        cy.get(el.nationality).click();
        cy.get(el.dropDown).first().click();
        cy.get(el.maritalStatus).click();
        cy.get(el.dropDown).first().click();

        cy.dataAniversario().then( dataAniversario => {
            cy.get(el.dataOfBirth).type(dataAniversario);
            cy.get(el.btnClearCalendar).contains('Close').click();
        });

        cy.get(el.genderMaleOrFemale).click();
        cy.get(el.btnSave).click();

        cy.get(el.bloodType).click()
        cy.get(el.dropDown).first().click();
        cy.get(el.testeField).type("OK");
        cy.get(el.btnSave).click();

        cy.get(el.btnAddAtachment).click();
        cy.uploadAttachment();
        cy.get(el.comment).type("Teste");
        cy.get(el.btnSave);
    });
});