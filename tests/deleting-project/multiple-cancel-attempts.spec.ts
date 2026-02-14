// spec: specs/deleting-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Usuwania Projektów', () => {
  test('Wielokrotne anulowanie i ponowne próby usunięcia', async ({ seedSingleProject, homePage, projectDetailsPage }) => {
    // Arrange
    await homePage.clickProjectByName(testProjects.seedProject.title);

    // Act - pierwsza próba usunięcia
    await projectDetailsPage.clickDeleteProject();
    await projectDetailsPage.cancelDelete();
    await projectDetailsPage.verifyDeleteButtonVisible();

    // Act - druga próba usunięcia
    await projectDetailsPage.clickDeleteProject();
    await projectDetailsPage.cancelDelete();
    await projectDetailsPage.verifyDeleteButtonVisible();

    // Act - trzecia próba - potwierdzenie
    await projectDetailsPage.clickDeleteProject();
    await projectDetailsPage.confirmDelete();

    // Assert
    await homePage.verifyNoProjectSelectedVisible();
    await homePage.verifyProjectNotVisible(testProjects.seedProject.title);
  });
});
