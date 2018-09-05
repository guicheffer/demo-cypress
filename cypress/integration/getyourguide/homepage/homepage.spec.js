/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www-getyourguide-com.vm.gygtest.com/?platform=desktop')
  })

  // https://on.cypress.io/interacting-with-elements

  it('searches on the search box input on homepage', () => {
    const type = 'london br'
    const expected = 'London Bridge'

    cy.get('.search-form-input')
      .type('london br', { force: true })

    cy.get(`.suggestion-item[data-value="${expected}"]`)
      .click()

    cy.get('.search-form-input')
      .should('have.value', expected)
    //
    //   // .type() with special character sequences
    //   .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
    //   .type('{del}{selectall}{backspace}')
    //
    //   // .type() with key modifiers
    //   .type('{alt}{option}') //these are equivalent
    //   .type('{ctrl}{control}') //these are equivalent
    //   .type('{meta}{command}{cmd}') //these are equivalent
    //   .type('{shift}')
    //
    //   // Delay each keypress by 0.1 sec
    //   .type('slow.typing@email.com', { delay: 100 })
    //   .should('have.value', 'slow.typing@email.com')
    //
    // cy.get('.action-disabled')
    //   // Ignore error checking prior to type
    //   // like whether the input is visible or disabled
    //   .type('disabled error checking', { force: true })
    //   .should('have.value', 'disabled error checking')
  })
})
