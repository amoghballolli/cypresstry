
export class UserData{
    //methods
    LoginUsername(username ){
       //return cypress companent
       return cy.get('#loginusername').type(username).type('{enter}')
    }

    LoginPassword(password){
       return cy.get('#loginpassword').type(password).type('{enter}')
        
    }
  }

  
  