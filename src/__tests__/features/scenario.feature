Feature: Test Feature file
  This file is used to create traceability file wich contains tags for related scenarios and feature file

  @ScenarioTag1
  Scenario: Test Scenario 1
    Given: Dummy Step

  @ScenarioTag2
  Scenario: Test Scenario 2
    Given: Dummy Step

  @ScenarioTag1
  Scenario: Test Scenario 3
    Given: Dummy Step

  Scenario Outline: Test Scenario. <Description>
    Given: Dummy Step

    Examples:
      | Description     |
      | dummy scenario1 |
      | dummy scenario2 |