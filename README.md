# 🧪 Projeto de Testes Automatizados - Cypress

Este repositório contém testes automatizados end-to-end desenvolvidos com [Cypress](https://www.cypress.io/), 

## 📁 Estrutura do Projeto
├── cypress/

│ ├── e2e/

│ ├── fixtures/ 

│ ├── screenshots/ 

│ └── support/ 

│ ├── seletores/

├── node_modules/ 

├── cypress.config.js 

├── package.json 

├── .gitignore 

## ✅ Funcionalidades Testadas

- Login;
- Cadastro de Usuário;
- Cadastro de Funcionário;
- Editar Funcionário;
- Upload de foto de perfil Admin;
- Teste responsivo com viewport.

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Gerenciador de pacotes `npm`
- Cypress (será instalado automaticamente com `npm install`)

---

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/automation-web-cypress.git

# Acesse a pasta
cd automation-web-cypress

# Instale as dependências
npm install

# Abra o Cypress em modo interativo
npx cypress open

# Ou rode os testes direto no terminal (modo headless)
npx cypress run

📱 Testes Responsivos
Os testes incluem cenários utilizando o comando cy.viewport('iphone-x') para validar a aplicação em dispositivos móveis.

🛠️ Tecnologias Utilizadas
Cypress

Faker.js para geração de dados fake

JavaScript (ES6+)

📌 Observações
Prints de tela e vídeos são gerados automaticamente em falhas, mas estão ignorados no repositório via .gitignore.

O diretório node_modules/ não deve ser versionado no Git.

👩‍💻 Autor(a)
Feito com 💚 por [Júlia Karolina Lira da Silva]
LinkedIn | GitHub
