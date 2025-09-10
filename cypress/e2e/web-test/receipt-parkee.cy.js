describe('example to-do app', () => {
  it('showing page of parking transaction',() => {
    cy.visit('https://r.parkee.app/?l=06R&ps=06R4OL0DACB0')

  })

    it('user can click parking details',() => {
    cy.visit('https://r.parkee.app/?l=06R&ps=06R4OL0DACB0')
    cy.get('#arrow').click()

  })

  it('user can clik button share Receipt',() => {
    cy.visit('https://r.parkee.app/?l=06R&ps=06R4OL0DACB0')
    cy.get('#button-share-receipt').click()
  })

  it('user can clik button Download Receipt',() => {
    cy.visit('https://r.parkee.app/?l=06R&ps=06R4OL0DACB0')
    cy.get('#button-download-receipt').click()
  })

  it('user can clik text Contack us in Receipt',() => {
    cy.visit('https://r.parkee.app/?l=06R&ps=06R4OL0DACB0')
    cy.get('#contact-us-link').click()
  })

  it('user can clik icon instagram parkee-app',() => {
    cy.visit('https://r.parkee.app/?l=06R&ps=06R4OL0DACB0')
    cy.get('#image-link-instagram').click()
  })

  it('user can clik icon Facebook parkee-app',() => {
    cy.visit('https://r.parkee.app/?l=06R&ps=06R4OL0DACB0')
    cy.get('#image-link-facebook').click()
  })

  it('user can clik icon medium parkee-app',() => {
    cy.visit('https://r.parkee.app/?l=06R&ps=06R4OL0DACB0')
    cy.get('#image-link-medium').click()
  })
})