Feature: Success register

    Background:
        Given I am on redmine page
    Scenario: 
        When I fill register input and press submit
        Then I see success notification shown
        