/// <reference types="Cypress" />

export class loginPage{
    typeUsername(){
        cy.get('username').type('standard_user')
    }

    typePassword(){
        cy.get('password').type('secret_sauce')
    }

    clickLoginButton(){
        cy.get('login-button').click()
    }
}