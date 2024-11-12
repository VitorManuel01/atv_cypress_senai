describe('template spec', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport("macbook-11")
  })

  it.only('cadastro de usuario', () => {
    cy.visit('https://www.kabum.com.br/')
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
  ///cadastro
  cy.get('#linkCadastroHeader').click()
  cy.get('[data-testid="complete-name-input"]').type("Enrico Anderson Nelson Ferreira")
  cy.wait(300)
  cy.get('#SelectGender > .sc-jdkBTo > .sc-fmzyuX')
  cy.contains("Homem").click({force: true})
  cy.wait(300)
  cy.get('[data-testid="mobile-number-input"]').type("71983029986", {force: true})
  cy.wait(300)
  cy.get('[data-testid="cpf-input"]').type("73146638584", {force: true})
  cy.wait(300)
  cy.get('[data-testid="birth-date-input"]').type("30012001", {force: true})
  cy.wait(300)
  cy.get('[data-testid="email-input"]').type("lewovad600@gianes.com", {force: true}).wait(300)
  cy.get('[data-testid="password-input"]').type("SenhaForteSenai356", {force: true}).wait(300)
  cy.get('[data-testid="confirm-password-input"]').type("SenhaForteSenai356", {force: true}).wait(300)
  cy.get('#SelectBox > .sc-jdkBTo > .sc-fmzyuX')
  cy.contains("Jovem Pan").click({force: true}).wait(500)
  cy.get('[data-testid="button-form-continue"]').click()

  ///segunda parte

  cy.get('[data-testid="zipcode-input"]').type("42702970", {force: true})
  cy.get('[data-testid="address-identification-input"]').type("CASA", {force: true})
  cy.get('[data-testid="street-input"]').type("Rua Aracy Grubide 17 Quadra 05", {force: true})
  cy.get('[data-testid="address-number-input"]').type("2481", {force: true})
  cy.get('[data-testid="address-complement-input"]').type("Casa", {force: true})
  cy.get('[data-testid="neighborhood-input"]').type("Itinga", {force: true})
  cy.get('[data-testid="city-input"]').type("Lauro de Freitas", {force: true}).wait(2000)
  cy.get('[data-testid="register-submit-button"]').click()
  })
})