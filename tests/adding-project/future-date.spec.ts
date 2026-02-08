// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Dodawanie projektów - daty w przyszłości', () => {
  test('Pozwala na utworzenie projektu z datą daleko w przyszłości', async ({ homePage, newProjectPage, projectDetailsPage }) => {
    // Act
    await homePage.clickAddProject();
    await newProjectPage.createProject({
      title: 'Projekt dalekiej przyszłości',
      description: 'Test odległej daty',
      dueDate: '2030-12-31'
    });
    
    // Assert
    await homePage.clickProjectByName('Projekt dalekiej przyszłości');
    await projectDetailsPage.verifyProjectDetails({
      title: 'Projekt dalekiej przyszłości',
      date: '31 gru 2030',
      description: 'Test odległej daty'
    });
  });
});