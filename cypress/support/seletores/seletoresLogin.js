export const seletoresLogin = {
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    username: '[name="username"]',
    password: '[name="password"]',
    btnSave: '[type="submit"]',
    textoDeInvalido: '.oxd-alert-content-text',
}


/* OBS: O ideal e que o seletor dos elementos sejam personalizados com o prefixo data-*,
exemplo: data-cy, data-testid, data-test, data-qa, etc. Porém, nos sites open source, como o Orange, 
não é comum termos esse personalização, por isso utilizei os selores acima, pois são os disponíveis*/