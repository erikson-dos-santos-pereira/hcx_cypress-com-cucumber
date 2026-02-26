Feature: Login

Scenario: Validar login com sucesso
Given that I am on the homepage
When I submit a valid registered email address and password 
Then be redirected to the logged-in homepage 