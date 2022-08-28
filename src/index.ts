import { loadFeature } from 'jest-cucumber';
import {
  DefineScenarioFunctionWithAliases,
  StepsDefinitionCallbackOptions
} from 'jest-cucumber/dist/src/feature-definition-creation';
import {
  Options,
  ParsedScenario,
  ParsedScenarioOutline,
  ParsedStep
} from 'jest-cucumber/dist/src/models';

export const createTraceability = (featureFileToLoad: string): string[] => {
  const fullpath = module.parent?.path;
  const feature = loadFeature(`${fullpath}\\${featureFileToLoad}`);

  const listOfTags: string[] = [];
  feature.tags.map((tags) => listOfTags.push(tags));
  feature.scenarios.map((scn) => scn.tags.map((tag) => listOfTags.push(tag)));
  feature.scenarioOutlines.map((scn) =>
    scn.tags.map((tag) => listOfTags.push(tag))
  );

  return listOfTags;
};
