import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("that I searched for the product Blue Top", () => {
    //All the steps below are for logging in
    cy.visit("https://automationexercise.com", { timeout: 120000 })
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').clear().type('teste2024@teste.com.br')
    cy.get('[data-qa="login-password"]').clear().type('teste')
    cy.get('[data-qa="login-button"]').click()
    //Validate homepage
    cy.get(':nth-child(10) > a')
    //Search product
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('[name="search"]').click().type('blue top')
    cy.get('#submit_search').click()
    //validates product
    cy.get('.choose > .nav > li > a').click()
    cy.get('.product-information > h2').contains('Blue Top')
})

When("I select the first item from the list of results", () => {
    cy.get(':nth-child(5) > .btn').click()
    cy.get('.modal-title').contains('Added')
    cy.get('.modal-footer > .btn').click()
})

 
Then("at least 1 product should be displayed in my shopping cart", () => {
    //Validate cart
    cy.get('.shop-menu > .nav > :nth-child(3) > a',{timeout: 30000}).click()
    //logout
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()   
})