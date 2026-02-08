// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Dodanie projektu przyciskiem Create new project', async ({ homePage, newProjectPage }) => {
    // Act
    await homePage.clickCreateNewProject();
    await newProjectPage.createProject(testProjects.mainButtonProject);
    
    // Assert
    await homePage.verifyProjectVisible(testProjects.mainButtonProject.title);
  });
});