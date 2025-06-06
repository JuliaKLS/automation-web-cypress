export const SeletoresCadastrarFuncionario = {

    btnPim: ':nth-child(2) > .oxd-main-menu-item',
    btnAdd: '.orangehrm-header-container > .oxd-button',
    btnuploadFoto: '.oxd-icon-button oxd-icon-button--solid-main employee-image-action',
    firstName: '[name="firstName"]',
    middleName: '[name="middleName"]',
    lastName: '[name="lastName"]',
    creatLoginDetails: '.oxd-switch-input',
    employeeId: ':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input',
    username: ':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    statusEnabled: ':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input',
    password: '[type="password"]',
    confirmPassword: '[type="password"]',
    btnSave: '[type="submit"]',
    btnMenuSanduiche: '.oxd-topbar-header-title > .oxd-icon',
}




/* OBS: O ideal e que o seletor dos elementos sejam personalizados com o prefixo data-*,
exemplo: data-cy, data-testid, data-test, data-qa, etc. Porém, nos sites open source, como o Orange, 
não é comum termos esse personalização, por isso utilizei os selores acima, pois são os disponíveis*/