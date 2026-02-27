import {Given, Then} from 'cypress-cucumber-preprocessor/steps'

let apiResponse;

Given("that I make a GET request to the API", () => {
    cy.request('GET','https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
  .then((response) => {
    expect(response.status).to.eq(200); // Ensures the API responded successfully.
    apiResponse = response;
  })
})

Then("the response status code should be 200", () => {
    expect(apiResponse.status).to.eq(200);
})