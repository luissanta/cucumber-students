Feature: Registration on the page of the students of the Universidad de los Andes

  Scenario Outline: As a user, I want to register with incorrect data

    Given I am on the uniandes sub page
    And I enter the login form
    And I press the register button
    When I register with <firstname>, <lastname>, <email>, <password> and <confirmPassword>
    Then I see an alert for the input fields with <message>

    Examples:
      | firstname | lastname | email                  | password   | confirmPassword | message                              |
      | Test      | Cucumber | cumfsyuniandes.edu.co  | gfsdgfdhgf | gfsdgfdhgf      | Ingresa un correo electrónico válido |
      | Test      | Cucumber | cumfsytu@niandes.      | gfsdgfdhgf | gfsdgfdhgf      | Ingresa un correo electrónico válido |
      | Test      | Cucumber | cumfyu@uniandes.edu.co | gfsdgfdhgf | gfsdgfdhg3      | Las contraseñas no coinciden         |
      | Test      | Cucumber | cu3fyu@uniandes.edu.co | gfsdg      | gfsdg           | La contraseña debe tener 8 caracteres|


  Scenario Outline: As a user, I want to register with with user information already registered

    Given I am on the uniandes sub page
    And I enter the login form
    And I press the register button
    When I register with <firstname>, <lastname>, <email>, <password> and <confirmPassword>
    Then I want to see a message with an alert by already existing user

    Examples:
      | firstname | lastname | email                  | password   | confirmPassword |
      | Test      | Cucumber | cumfsy@uniandes.edu.co | gfsdgfdhgf | gfsdgfdhgf      |


  Scenario Outline: As a user, I want to register with correct information

    Given I am on the uniandes sub page
    And I enter the login form
    And I press the register button
    When I register with <firstname>, <lastname>, <email>, <password> and <confirmPassword>
    Then I want to see a message confirming my successful registration

    Examples:
      | firstname | lastname | email                  | password   | confirmPassword |
      | Test      | Cucumber | 2qwe4f@uniandes.edu.co | gfsdgfdhgf | gfsdgfdhgf      |
