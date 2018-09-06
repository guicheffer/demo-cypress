import setup from '../../../setup'

context('Homepage > Search form', () => {
  beforeEach(() => {
    cy.visit(setup.url.get('homepage'))
  })

  it('searches on the search form box input on homepage', () => {
    cy.get('.search-form-input').type(setup.params.location.type, { force: true })
    cy.get(`.suggestion-item[data-value="${setup.params.location.expected}"]`).click()
    cy.get('.search-form-input').should('have.value', setup.params.location.expected)

    cy.get('.datepicker-from-input').focus()

    const now = new Date()

    cy.get(`.pika-single:not(.is-hidden) .is-today .pika-day[data-pika-day=${now.getDate()}]`).click()

    cy.get('.search-form .search-form-submit').click()

    cy.get('.search-query').should((searchQueryComponent) => {
       expect(searchQueryComponent).to.contain(setup.params.location.expected)
    })
  })
})
