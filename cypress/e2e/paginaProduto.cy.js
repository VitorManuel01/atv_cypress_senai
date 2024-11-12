import 'cypress-wait-until';

describe('template spec', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport("macbook-11")
    cy.visit('https://www.kabum.com.br/')


  })
  it('pagina do produto', () => {

    cy.wait(300)
    cy.contains("Placa de Vídeo").click()
    cy.get('img')
      .should('be.visible')
      .and('have.attr', 'src')
      .and('not.be.empty')


    cy.get('.sc-5492faee-2')
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        const price = parseFloat(text.replace('R$', '').replace(',', '.'))
        expect(price).to.be.greaterThan(0)
      })

    cy.get('#descriptionSection') // Substitua pelo seletor correto
      .should('be.visible')
      .invoke('text')
      .should('not.be.empty')


    cy.get('.sc-a24aba34-4 > .sc-50d5e82e-0')
      .click()
      .wait(300)
    cy.contains("Meu carrinho")
      .should('be.visible')
      .invoke('text')
      .should('not.be.empty')

    cy.contains("Continuar comprando").wait(300).click()

    cy.get('#reviewsSection')
      .should('be.visible')
      .invoke('text')
      .should('not.be.empty')
  })
})