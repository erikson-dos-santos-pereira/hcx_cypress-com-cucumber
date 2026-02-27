Feature: Api

Scenario: Validate contract and response from the product search API
Given that I make a GET request to the API
Then the response status code should be 200