Feature: Pagamento

Scenario: Validating product integrity on the checkout screen
Given that I have the product Blue Top added to my cart
When I click the Continue shopping button
Then I should be redirected to the checkout screen