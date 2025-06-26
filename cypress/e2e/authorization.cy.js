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

  it('Верный логин, не верный пароль', () => {
    cy.visit('https://impacta.top/auth/login');
    cy.get('.sc-fe6c781-1 > .sc-264d4e3d-0 > .sc-264d4e3d-3').type('sergeygolovatenko1988@gmail.com').should('have.value', 'sergeygolovatenko1988@gmail.com');
    cy.get('.sc-f6f5dc0a-0').should('have.attr', 'disabled');
    cy.get('.sc-ee9d50a4-0 > .sc-264d4e3d-0 > .sc-264d4e3d-3').type('PasTest456').should('have.value', 'PasTest456');
    cy.get('.sc-f6f5dc0a-0').should('not.be.disabled');
    cy.get('.sc-f6f5dc0a-0').click();
    cy.get('.sc-fe6c781-4').should('have.text', 'Incorrect email or password. Check the spelling and try again')
  })

  it('Не верный логин, верный пароль', () => {
    cy.visit('https://impacta.top/auth/login');
    cy.get('.sc-fe6c781-1 > .sc-264d4e3d-0 > .sc-264d4e3d-3').type('Test@gmail.com').should('have.value', 'Test@gmail.com');
    cy.get('.sc-f6f5dc0a-0').should('have.attr', 'disabled');
    cy.get('.sc-ee9d50a4-0 > .sc-264d4e3d-0 > .sc-264d4e3d-3').type('PasTest123').should('have.value', 'PasTest123');
    cy.get('.sc-f6f5dc0a-0').should('not.be.disabled');
    cy.get('.sc-f6f5dc0a-0').click();
    cy.get('.sc-fe6c781-4').should('have.text', 'Incorrect email or password. Check the spelling and try again')
  })

  it('Не верный логин, не верный пароль', () => {
    cy.visit('https://impacta.top/auth/login');
    cy.get('.sc-fe6c781-1 > .sc-264d4e3d-0 > .sc-264d4e3d-3').type('Test@gmail.com').should('have.value', 'Test@gmail.com');
    cy.get('.sc-f6f5dc0a-0').should('have.attr', 'disabled');
    cy.get('.sc-ee9d50a4-0 > .sc-264d4e3d-0 > .sc-264d4e3d-3').type('PasTest456').should('have.value', 'PasTest456');
    cy.get('.sc-f6f5dc0a-0').should('not.be.disabled');
    cy.get('.sc-f6f5dc0a-0').click();
    cy.get('.sc-fe6c781-4').should('have.text', 'Incorrect email or password. Check the spelling and try again')
  })

}) 