import 'cypress-wait-until';

describe('template spec', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport("macbook-11")
  })

  it('Carrinho de compras', () => {
    cy.visit('https://www.kabum.com.br/')
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.contains("Placa de Vídeo").wait(1000).click()
    cy.waitUntil(() => cy.contains("COMPRAR").then($el => $el.is(':visible')))
    cy.contains("COMPRAR").click().wait(500)
    cy.contains("Continuar comprando").wait(300).click()
    cy.contains("Monitor Gamer").wait(1000).click()
    // Por conta de um erro que estava ocorrendo devido a design da página, foi necessário a biblioteca waitUntil
    cy.waitUntil(() => cy.contains("COMPRAR").then($el => $el.is(':visible')))
    cy.contains("COMPRAR").click().wait(500)
    cy.contains("Continuar comprando").wait(300).click()
    cy.wait(1000)
    cy.get('.sc-61d5583e-2 > .flex').click().wait(500)
    cy.contains("Ir para o carrinho").click()

    //Pra assegurar que existe produtos no carrinho, o codigo pega a área que mostra o valor transforma em float em ve se é maior que 0
    cy.get('#valorDosProdutos > b')
      .invoke('text')
      .then((text) => {
        const totalValue = parseFloat(text.replace('R$', '').replace(',', '.'))
        expect(totalValue).to.be.greaterThan(0)
      })


  })
})