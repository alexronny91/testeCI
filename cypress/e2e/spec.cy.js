describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('https://alexronny91.github.io/testeCI/')
  })
  it('sucess', () => {
    cy.get('h1').should('contain', 'Teste')
    cy.get('h1').should('contain', 'Cypress')
  })
  it('fail', () => {
    cy.get('h1').should('contain', 'CI')
  })
})