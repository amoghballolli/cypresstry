///<reference types="cypress"/>

//describe is  test suite block -> helps in groupling test cases 
describe('check for login scenario', () => {
//it is for test case block -> helps in seperating out test cases 
  it('login in', () => {
//cy is in build cypress object -> helps performe actions on browser
    cy.visit('https://www.demoblaze.com/')
    //iphone -6 size port
    //cy.viewport(550,720)
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.wait(1000)
    cy.get('#loginusername').type('sewefo9805@apxby.com')
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type('Testing@123')
    cy.wait(2000)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
   
  })
  it('search product',()=>{
    cy.get('#itemc').click()
  })
  
})