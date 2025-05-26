export const seletoresEditarFuncionarioPersonalDetails = {
    btnPim: ':nth-child(2) > .oxd-main-menu-item',
    btnEditar: ':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)',
    otherId: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    driversLicenseNumber: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    licenseExpiryDate: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    btnClearCalendar: '.oxd-date-input-calendar',
    nationality: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
    maritalStatus: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
    dataOfBirth: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    genderMaleOrFemale: ':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input',
    bloodType: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
    testeField: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    btnAddAtachment: '.orangehrm-action-header > .oxd-button',
    btnBrouse: '.oxd-file-button',
    comment: '.oxd-textarea',
    btnSave: '.orangehrm-horizontal-padding > .oxd-form > .oxd-form-actions > .oxd-button',
    dropDown: '.oxd-select-dropdown',

};


/* OBS: O ideal e que o seletor dos elementos sejam personalizados com o prefixo data-*,
exemplo: data-cy, data-testid, data-test, data-qa, etc. Porém, nos sites open source, como o Orange, 
não é comum termos esse personalização, por isso utilizei os selores acima, pois são os disponíveis*/