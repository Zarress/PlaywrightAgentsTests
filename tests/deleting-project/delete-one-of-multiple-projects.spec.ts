// spec: specs/deleting-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Usuwania Projektów', () => {
  test('Usunięcie jednego projektu spośród wielu', async ({ seedMultipleProjects, homePage, newProjectPage, projectDetailsPage }) => {
    // Arrange
    const firstProject = testProjects.seedProject.title;
    const secondProject = testProjects.secondSeedProject.title;

    // Act
    await homePage.clickProjectByName(firstProject);
    await projectDetailsPage.clickDeleteProject();
    await projectDetailsPage.verifyDeleteConfirmDialog();
    await projectDetailsPage.confirmDelete();

    // Assert
    await homePage.verifyProjectNotVisible(firstProject);
    await homePage.verifyProjectVisible(secondProject);
    await homePage.verifyNoProjectSelectedVisible();
    await homePage.clickProjectByName(secondProject);
    await projectDetailsPage.verifyProjectHeading(secondProject);
  });
});
