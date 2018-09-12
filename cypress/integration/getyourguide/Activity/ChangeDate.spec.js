import setup from '../../../setup'

context('ADP > Change Dates', () => {
  let now = ''

  beforeEach(() => {
    cy.visit(setup.url.get('adp'))

    now = new Date()
  })

  it('sees activity options as soon as user changes the date', () => {
    cy.wait(2000)

    cy.get('#btn-activity-search').click()

    cy.get('#datepicker .datepicker-input').focus()
    cy.get('.pika-next').click()
    cy.get(`.pika-table td:not(.is-disabled):not(.is-not-available):not(.is-empty)
      .pika-button[data-pika-day=${now.getDate()}]`).click()

    // Booking assistant is still loading? / Element exists?
    cy.get('#booking-assistant').should('have.class', 'is-loading')
    cy.get('.btn-add-to-cart')
  })

  it('selects an available date and participants then see results', () => {
    cy.wait(2000)

    cy.log('ready to interact with calendar')
    cy.get('#datepicker .datepicker-input').focus()
    cy.get('.pika-next').click()
    cy.get(`.pika-table td:not(.is-disabled):not(.is-not-available):not(.is-empty)
      .pika-button[data-pika-day=${now.getDate()}]`).click()

    cy.log('ready to interact with total of participants')
    cy.get('.participants-summary-container').focus()
    cy.get('.peoplepicker-input-adult + .people-picker-plus').click()
    cy.get('.peoplepicker-input-adult').should('have.value', '2')

    cy.get('#btn-activity-search').click()
    cy.get('.activity-option.is-active')
  })
})
