import { createTraceability } from '../index';

it('Verify Create Traceability. Feature file not contains any tags', async () => {
  const listOfTags = createTraceability('features\\notags.feature');
  expect(listOfTags).toBeNull;
});

it('Verify Create Traceability. Feature file contain tags only in scenarios', async () => {
  const listOfTags = createTraceability('features\\scenario.feature');
  expect(listOfTags).not.toBeNull;
  expect(listOfTags).toEqual(
    expect.arrayContaining(['@scenariotag1', '@scenariotag2'])
  );
});

it('Verify Create Traceability. Feature file contain tags only in Scenario Outline', async () => {
  const listOfTags = createTraceability('features\\scenarioOutline.feature');
  expect(listOfTags).not.toBeNull;
  expect(listOfTags).toEqual(
    expect.arrayContaining(['@scenariooutlinetag1', '@scenariooutlinetag2'])
  );
});

it('Verify Create Traceability', async () => {
  const listOfTags = createTraceability('features\\test.feature');
  expect(listOfTags).not.toBeNull;
  expect(listOfTags).toEqual(
    expect.arrayContaining([
      '@featureleveltag1',
      '@featureleveltag2',
      '@scenariotag1',
      '@scenariooutlinetag1'
    ])
  );
});
