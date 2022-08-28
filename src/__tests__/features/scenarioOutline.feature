Feature: Test Feature file
  This file is used to create traceability file wich contains tags for related scenarios and feature file

  Scenario: Test Scenario
    Given: Dummy Step

  @ScenarioOutlineTag1
  Scenario Outline: Test Scenario 1. <Description>
    Given: Dummy Step

    Examples:
      | Description     |
      | dummy scenario1 |
      | dummy scenario2 |

  @ScenarioOutlineTag2
  Scenario Outline: Test Scenario 2. <Description>
    Given: Dummy Step

    Examples:
      | Description     |
      | dummy scenario3 |
      | dummy scenario4 |