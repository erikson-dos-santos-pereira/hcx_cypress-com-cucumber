Feature: Pagamento

Scenario: Successfully adding the product "Blue Top" to the car
Given that I searched for the product Blue Top
When I select the first item from the list of results
Then at least 1 product should be displayed in my shopping cart