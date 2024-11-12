describe('template spec', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport("macbook-11")
    cy.visit('https://www.kabum.com.br/')


  })
  it('area do cliente', () => {
    cy.get('#linkLoginHeader').click()
    /cy.get('[data-testid="login-input"]').type("").wait(300)
  
     cy.get('[data-testid="password-input"]').type().wait(300)
     cy.get('[data-testid="login-submit-button"]').click()
      cy.wait(800)
     cy.get('#linkMinhaContaHeader').click()
     cy.wait(800)

     cy.get('[href="minha-conta/meus-pedidos"]').click()

     cy.wait(800)

     cy.get('[data-testid="periodFilter"] > .sc-dQEtJz')
     cy.contains("Últimos 3 meses").click( {force: true})
     cy.contains("Todos").click( {force: true})

     cy.wait(8000)
     cy.get('#linkMinhaContaHeader').click()
     cy.wait(800)
     cy.get('[href="minha-conta/meus-dados"]').click()
     cy.wait(800)
     cy.get('[data-testid="complete-name-input"]').clear().type("Vitor Manuel").wait(1000).clear()
     cy.wait(800)
     cy.get('[data-testid="complete-name-input"]').type("Vitor Manuel Pereira Dos Santos")

     cy.wait(1000)
     cy.get('[data-testid="submit-update-person-form-button"]').click()
  })
})