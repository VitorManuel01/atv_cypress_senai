describe('template spec', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport("macbook-11")
  })

  it('login de usuario', () => {
    cy.visit('https://www.kabum.com.br/')
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
  ///cadastro
    cy.get('#linkLoginHeader').click()
  /cy.get('[data-testid="login-input"]').type("lewovad600@gianes.com").wait(300)

   cy.get('[data-testid="password-input"]').type("SenhaForteSenai356").wait(300)
   cy.get('[data-testid="login-submit-button"]').click()
  
  })
})