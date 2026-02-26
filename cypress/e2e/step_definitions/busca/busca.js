import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("that I am on the homepage of an e-commerce website", () => {
    //All the steps below are for logging in
    cy.visit("https://automationexercise.com", { timeout: 120000 })
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').clear().type('teste2024@teste.com.br')
    cy.get('[data-qa="login-password"]').clear().type('teste')
    cy.get('[data-qa="login-button"]').click()
    //Validate homepage
    cy.get(':nth-child(10) > a')
})

When("I search for the product blue top", () => {
    //Validate homepage
    cy.get(':nth-child(10) > a')
    //Search product
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('[name="search"]').click().type('blue top')
    cy.get('#submit_search').click()
})

 
Then ("I should see a list of results", () => {
    //validates product
    cy.get('.choose > .nav > li > a').click()
    cy.get('.product-information > h2').contains('Blue Top')
    //logout
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()   
})