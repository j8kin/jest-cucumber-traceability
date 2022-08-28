@FeatureLevelTag1
@FeatureLevelTag2
Feature: Test Feature file
  This file is used to create traceability file wich contains tags for related scenarios and feature file

  @ScenarioTag1
  Scenario: Test Scenario
    Given: Dummy Step

  @ScenarioOutlineTag1
  Scenario Outline: Test Scenario. <Description>
    Given: Dummy Step

    Examples:
      | Description     |
      | dummy scenario1 |
      | dummy scenario2 |