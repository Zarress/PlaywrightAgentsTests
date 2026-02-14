// spec: specs/deleting-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Usuwania Projektów', () => {
  test('Usunięcie wszystkich projektów po kolei', async ({ seedThreeProjects, homePage, projectDetailsPage }) => {
    const projectNames = [
      testProjects.seedProject.title,
      testProjects.secondSeedProject.title,
      testProjects.thirdSeedProject.title,
    ];

    // Act
    for (const name of projectNames) {
      await homePage.clickProjectByName(name);
      await projectDetailsPage.clickDeleteProject();
      await projectDetailsPage.confirmDelete();
    }

    // Assert
    await homePage.verifyNoProjectSelectedVisible();
    await homePage.verifyCreateNewProjectButtonVisible();
    for (const name of projectNames) {
      await homePage.verifyProjectNotVisible(name);
    }
  });
});
