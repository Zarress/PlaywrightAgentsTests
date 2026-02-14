// spec: specs/deleting-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Usuwania Projektów', () => {
  test('Usunięcie projektu z zadaniami', async ({ seedProjectWithTasks, homePage, projectDetailsPage }) => {
    // Arrange
    await homePage.clickProjectByName(testProjects.seedProjectWithTasks.title);
    await projectDetailsPage.verifyTaskVisible(testProjects.seedProjectWithTasks.tasks[0]);
    await projectDetailsPage.verifyTaskVisible(testProjects.seedProjectWithTasks.tasks[1]);

    // Act
    await projectDetailsPage.clickDeleteProject();
    await projectDetailsPage.verifyDeleteConfirmDialog();
    await projectDetailsPage.confirmDelete();

    // Assert
    await homePage.verifyNoProjectSelectedVisible();
    await homePage.verifyProjectNotVisible(testProjects.seedProjectWithTasks.title);
  });
});
