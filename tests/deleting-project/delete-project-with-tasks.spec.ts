// spec: specs/deleting-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Usuwania Projektów', () => {
  test('Usunięcie projektu z zadaniami', async ({ seedSingleProject, homePage, projectDetailsPage }) => {
    // Arrange
    await homePage.clickProjectByName(testProjects.seedProject.title);
    await projectDetailsPage.addTask('Test task');
    await projectDetailsPage.verifyTaskVisible('Test task');

    // Act
    await projectDetailsPage.clickDeleteProject();
    await projectDetailsPage.verifyDeleteConfirmDialog();
    await projectDetailsPage.confirmDelete();

    // Assert
    await homePage.verifyNoProjectSelectedVisible();
    await homePage.verifyProjectNotVisible(testProjects.seedProject.title);
  });
});
