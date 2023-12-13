///<reference types="cypress"/>

import { UserData } from "../../Pages/PageObjectModel.cy"
const userinputdata = new UserData()
//describe is  test suite block -> helps in groupling test cases 
// beforeEach(()=>{
 
// })

// afterEach(()=>{
//   cy.wait(200)
// })

describe('check for login scenario', () => {
//it is for test case block -> helps in seperating out test cases 
cy.visit('https://www.demoblaze.com/')
cy.get('#login2').click()
cy.get('#loginusername').click()
  it('login in- postivite data', () => {
    cy.wait(1000)
    //assertion- type-1
    userinputdata.LoginUsername('sewefo9805@apxby.com').should('be.visible').and('not.include.text','.com')
    cy.get('#loginpassword').click()
    cy.wait(1000)
    //Picking data from fixture Json file
    cy.fixture('example.json').then((data)=>{
      return cy.get('#loginpassword').type(data.Password).type('{enter}')
    })
    cy.wait(2000)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.enabled')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
  })

  //userinputdata.LoginPassword('Testing@123') -> can be used insidea of fixture

  // it('login in- negative data', () => {
  //   //negative test case
  //   cy.visit('https://www.demoblaze.com/')
  //   cy.get('#login2').click()
  //   cy.get('#loginusername').click()
  //   cy.get('#loginusername').type('wrongdata')
  //   cy.get('#loginpassword').click()
  //   cy.get('#loginpassword').type('wrong@123')
  //   cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
       //assertion- type-2
    // cy.get(':nth-child(2) > .nav-link').rightclick().then((e)=>{
    //   const t = e.text();  // Use innerText to get the text content
    //   expect(t).to.include('New message');
    // })clea
  // })
  
  
})