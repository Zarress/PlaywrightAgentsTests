// spec: specs/deleting-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Przypadki brzegowe', () => {
  test('Szybkie wielokrotne kliknięcie przycisku Delete project', async ({ seedSingleProject, homePage, projectDetailsPage }) => {
    // Act
    await homePage.clickProjectByName(testProjects.seedProject.title);
    await projectDetailsPage.rapidClickDelete(3);
    await projectDetailsPage.verifyDeleteConfirmDialog();
    await projectDetailsPage.cancelDelete();

    // Assert
    await projectDetailsPage.verifyDeleteButtonVisible();
    await homePage.verifyProjectVisible(testProjects.seedProject.title);
  });
});
