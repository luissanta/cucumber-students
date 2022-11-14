Feature: Login on the page of the students of the Universidad de los Andes

  Scenario Outline: As a user, I want to login with wrong credentials

    Given I am on the uniandes sub page
    And I enter the login form
    When I login with <username> and <password>
    Then I should see a alert message saying Revisa tu contraseña

    Examples:
      | username                   | password          |
      | cucumber@uniandes.edu.co   | SecretPassword!   |
      | university@uniandes.edu.co | SecretPassword!   |
      | cypress@uniandes.edu.co    | Password!cucumber |


  Scenario Outline: As a user, I want to login with correct credentials

    Given I am on the uniandes sub page
    And I enter the login form
    When I login with <username> and <password>
    Then I see that I am logged in correctly

    Examples:
      | username                   | password          |
      | l.santa@uniandes.edu.co    | cucumber          |
