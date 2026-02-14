// spec: specs/deleting-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Usuwania Projektów', () => {
  test('Anulowanie usuwania projektu', async ({ seedSingleProject, homePage, projectDetailsPage }) => {
    // Act
    await homePage.clickProjectByName(testProjects.seedProject.title);
    await projectDetailsPage.clickDeleteProject();
    await projectDetailsPage.verifyDeleteConfirmDialog();
    await projectDetailsPage.cancelDelete();

    // Assert
    await projectDetailsPage.verifyDeleteButtonVisible();
    await homePage.verifyProjectVisible(testProjects.seedProject.title);
  });
});
