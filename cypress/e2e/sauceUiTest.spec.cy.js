/// <reference types="Cypress" />

const { loginPage } = require("../pages/loginPage")

const loginPage = new loginPage


describe('Sauce UI Tests' , ()=>{
   beforeEach(()=> {
    cy.visit('/')
   })
    it('Should be able to Login with valid credentials successfully and validate that items are sorted from A to Z', ()=>{
        loginPage.typeUsername()
        loginPage.typePassword()
        loginPage.clickLoginButton()
    })
})