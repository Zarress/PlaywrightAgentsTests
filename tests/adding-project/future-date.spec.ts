// spec: specs/adding-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Dodawanie projektów - daty w przyszłości', () => {
  test('Pozwala na utworzenie projektu z datą daleko w przyszłości', async ({ homePage, newProjectPage, projectDetailsPage }) => {
    // Act
    await homePage.clickAddProject();
    await newProjectPage.createProject(testProjects.futureDate);
    
    // Assert
    await homePage.clickProjectByName(testProjects.futureDate.title);
    await projectDetailsPage.verifyProjectDetails({
      title: testProjects.futureDate.title,
      date: '31 gru 2030',
      description: testProjects.futureDate.description
    });
  });
});