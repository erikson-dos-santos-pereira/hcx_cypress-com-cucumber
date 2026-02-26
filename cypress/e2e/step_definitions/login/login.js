import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("that I am on the homepage", () => {
    cy.visit("https://automationexercise.com", { timeout: 120000 })
})

When("I submit a valid registered email address and password", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').clear().type('teste2024@teste.com.br')
    cy.get('[data-qa="login-password"]').clear().type('teste')
    cy.get('[data-qa="login-button"]').click()
})

 
Then ("be redirected to the logged-in homepage", () => {
    cy.get(':nth-child(10) > a')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()    
})