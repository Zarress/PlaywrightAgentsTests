// spec: specs/deleting-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Usuwania Projektów', () => {
  test('Pomyślne usunięcie pojedynczego projektu', async ({ seedSingleProject, homePage, projectDetailsPage }) => {
    // Act
    await homePage.clickProjectByName(testProjects.seedProject.title);
    await projectDetailsPage.verifyDeleteButtonVisible();
    await projectDetailsPage.clickDeleteProject();
    await projectDetailsPage.verifyDeleteConfirmDialog();
    await projectDetailsPage.confirmDelete();

    // Assert
    await homePage.verifyNoProjectSelectedVisible();
    await homePage.verifyCreateNewProjectButtonVisible();
    await homePage.verifyProjectNotVisible(testProjects.seedProject.title);
  });
});
