Feature: Register user

  Scenario Outline: Register user with valid data
    Given User navigtes to Url
    When User click Register Button
    Then A form will appear
    And User will input First Name "<First Name>"
    And User will input Last Name "<Last Name>"
    And User will input Email "<Email>"
    When User clicks register
    Then System will show success msg


    Examples:
      | First Name | Last Name | Email           |  |
      | Omnia      | Elsayed   | omnia@gmail.com |  |

  Scenario: Register user with valid data using API
    Given I have the user registration endpoint
    When I send a registration request with valid user data
    Then I should receive a successful response with status code 201
    And the response message should be "User registered successfully" and Data should be the same as input

