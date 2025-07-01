# 🚀 Impacta Web Auto Tests (Cypress)

Автоматизированные E2E тесты для сайта [Impacta](https://impacta.top), написанные с использованием Cypress.

## 📚 Описание проекта

В этом проекте реализованы автоматизированные тесты для проверки ключевых пользовательских сценариев.

На данный момент реализовано:
- ✅ Проверка авторизации с валидными данными
- ✅ Проверка обработки невалидных данных при авторизации

Проект активно развивается и будет дополнен тестами для других функциональностей.

---

## 🛠️ Технологии

- Cypress
- JavaScript
- Node.js
- Git

---

## 🚀 Установка проекта

1. Склонировать репозиторий:
```bash
git clone https://github.com/SergheyGolovatenko/Impacta.git
```

2. Перейти в папку проекта:
```bash
cd Impacta
```

3. Установить зависимости:
```bash
npm install
```

## ▶️ Запуск тестов

Открыть Cypress в интерактивном режиме:
```bash
npx cypress open
```

Запустить все тесты в headless-режиме:
```bash
npx cypress run
```

---

## 📂 Структура проекта
```bash
Impacta/
├── cypress/
│   ├── e2e/               # Автотесты (authorization.cy.js)
│   ├── fixtures/          # Тестовые данные (пока не используются)
│   ├── support/           # Команды и конфигурации
├── cypress.config.js      # Конфигурация Cypress
├── package.json           # Зависимости проекта
├── .gitignore             # Исключённые файлы
└── README.md              # Описание проекта
```

## ✅ Пример теста

```js
describe('Авторизация', () => {
  it('Правильный логин и пароль', () => {
    cy.visit('https://impacta.top/');
    cy.get('.sc-bc1b1a65-12 > .sc-bc1b1a65-5').click();
    cy.get('.sc-fe6c781-1 > .sc-264d4e3d-0 > .sc-264d4e3d-3').type('sergeygolovatenko1988@gmail.com').should('have.value', 'sergeygolovatenko1988@gmail.com');
    cy.get('.sc-f6f5dc0a-0').should('have.attr', 'disabled');
    cy.get('.sc-ee9d50a4-0 > .sc-264d4e3d-0 > .sc-264d4e3d-3').type('PasTest123').should('have.value', 'PasTest123');
    cy.get('.sc-f6f5dc0a-0').should('not.be.disabled');
    cy.get('.sc-f6f5dc0a-0').click();
    cy.get('.sc-b4d871ca-6').should('be.visible')
  })
```

---

## 📬 Контакты

Автор: Сергей Головатенко  
Email: sergeygolovatenko1988@gmail.com  
GitHub: https://github.com/SergheyGolovatenko  

## 📝 Лицензия

Проект доступен под лицензией MIT.