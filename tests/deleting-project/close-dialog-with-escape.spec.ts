// spec: specs/deleting-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Przypadki brzegowe', () => {
  test('Próba zamknięcia dialogu potwierdzenia klawiszem Escape', async ({ seedSingleProject, homePage, projectDetailsPage }) => {
    // Act
    await homePage.clickProjectByName(testProjects.seedProject.title);
    await projectDetailsPage.clickDeleteProject();
    await projectDetailsPage.verifyDeleteConfirmDialog();
    await projectDetailsPage.dismissDialogWithEscape();

    // Assert
    await projectDetailsPage.verifyDeleteButtonVisible();
    await homePage.verifyProjectVisible(testProjects.seedProject.title);
  });
});
