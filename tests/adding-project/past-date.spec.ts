// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Dodawanie projektów - daty w przeszłości', () => {
  test('Pozwala na utworzenie projektu z datą w przeszłości', async ({ homePage, newProjectPage, projectDetailsPage }) => {
    // Act
    await homePage.clickAddProject();
    await newProjectPage.createProject(testProjects.pastDate);
    
    // Assert
    await homePage.clickProjectByName(testProjects.pastDate.title);
    await projectDetailsPage.verifyProjectDetails({
      title: testProjects.pastDate.title,
      date: '1 sty 2025',
      description: testProjects.pastDate.description
    });
  });
});