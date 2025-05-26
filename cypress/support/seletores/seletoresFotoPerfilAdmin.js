export const seletoresUpdateFotoPerfilAdmin = {
    btnMyInfo: ':nth-child(6) > .oxd-main-menu-item',
    clicaFotoAtual: '[class="employee-image"]',
    clicaLugarDaFotoNova: '.oxd-file-input',
    btnSave: '.oxd-button',
}

/* OBS: O ideal e que o seletor dos elementos sejam personalizados com o prefixo data-*,
exemplo: data-cy, data-testid, data-test, data-qa, etc. Porém, nos sites open source, como o Orange, 
não é comum termos esse personalização, por isso utilizei os selores acima, pois são os disponíveis*/