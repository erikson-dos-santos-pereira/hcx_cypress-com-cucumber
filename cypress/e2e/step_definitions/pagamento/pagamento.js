import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("that I have the product Blue Top added to my cart", () => {
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

When("I click the Continue shopping button", () => {
    cy.get(':nth-child(5) > .btn').click()
    cy.get('.modal-title').contains('Added')
    cy.get('.modal-footer > .btn').click()
    //Validate cart
    cy.get('.shop-menu > .nav > :nth-child(3) > a',{timeout: 30000}).click()
    cy.get('.col-sm-6 > .btn').click()
})
 
Then("I should be redirected to the checkout screen", () => {  
    //validate product in checkout cart
    cy.get('h4 > a').contains('Blue Top')
    cy.get(':nth-child(7) > .btn').click()
    //logout
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()   
})