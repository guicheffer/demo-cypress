/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www-getyourguide-com.vm.gygtest.com/?platform=desktop')
  })

  // https://on.cypress.io/interacting-with-elements

  it('searches on the search box input on homepage', () => {
    // https://on.cypress.io/type
    cy.get('.search-form-input')
      .type('london br', { force: true })

    cy.get('.suggestion-item:first-child[data-value=London][data-index=0]')
      .click()

    cy.get('.search-form-input')
      .should('have.value', 'London BridgE')
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
