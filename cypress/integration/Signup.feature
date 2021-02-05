Feature: Signup New customer

As a Rhipe program officer, 
In order to sign up Rhipe customer successfully, 
I want to be able to fill the sign up form with details from the test data sheet.

@test
Scenario: Signup New customer with same delivery address
Given I open rhipe Signup page
When I fillup the general information section
And I use same delivery address
And I use only authorised contact 
And I fill up the authorised signatory contact section


@test
Scenario: Signup New customer with different delivery address
Given I open rhipe Signup page
When I fillup the general information section
And I use different delivery address
And I fill up delivery address
And I use only authorised contact 
And I fill up the authorised signatory contact section

@test
Scenario: Signup New customer with same delivery address and other contacts
Given I open rhipe Signup page
When I fillup the general information section
And I use same delivery address
And I use other authorised contacts 
And I fill up the authorised signatory contact section
And I fill Usage Report Contact section
And I fill Sales contact section
And I fill Accounts contact section
And I fill statement contact section
And I fill technical contact section

@test
Scenario: Signup New customer with different delivery address and other contacts
Given I open rhipe Signup page
When I fillup the general information section
And I use different delivery address
And I use other authorised contacts 
And I fill up the authorised signatory contact section
And I fill Usage Report Contact section
And I fill Sales contact section
And I fill Accounts contact section
And I fill statement contact section
And I fill technical contact section