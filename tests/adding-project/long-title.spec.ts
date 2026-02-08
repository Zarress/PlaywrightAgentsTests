// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Dodawanie projektów - długie nazwy', () => {
  test('Pozwala na utworzenie projektu z bardzo długą nazwą', async ({ homePage, newProjectPage }) => {
    // Act
    await homePage.clickAddProject();
    await newProjectPage.createProject(testProjects.longTitle);
    
    // Assert
    await homePage.verifyProjectVisible(testProjects.longTitle.title);
  });
});