export const seletoresCriarUsuario = {

 btnAdmin: ':nth-child(1) > .oxd-main-menu-item > .oxd-text',
 btnAdd: '.oxd-button.oxd-button--medium.oxd-button--secondary',
 selectRole: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
 role: '.oxd-select-dropdown > :nth-child(3)',
 employeeName: '.oxd-autocomplete-text-input input',
 selectStatus: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
 statusFuncionario: '.oxd-select-wrapper',
 username: ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input',
 password: '[type="password"]',
 confirmPassword: '[type="password"]',
 btnSave: '[type="submit"]',
 listBox: '.oxd-autocomplete-dropdown',
 urlVisualizarUsuarios: 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers',
 assertListagemUsuarios: '.orangehrm-horizontal-padding > .oxd-text',
};




/* OBS: O ideal e que o seletor dos elementos sejam personalizados com o prefixo data-*,
exemplo: data-cy, data-testid, data-test, data-qa, etc. Porém, nos sites open source, como o Orange, 
não é comum termos esse personalização, por isso utilizei os selores acima, pois são os disponíveis*/