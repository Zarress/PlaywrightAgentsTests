// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Dodawanie projektów - walidacja daty', () => {
  test('Odrzucenie nieprawidłowego formatu daty', async ({ homePage, newProjectPage }) => {
    // Arrange
    await homePage.clickAddProject();
    
    // Act & Assert
    await expect(async () => {
      await newProjectPage.fillDueDate('złaData');
    }).rejects.toThrow('Malformed value');
  });

  test('Pomyślne utworzenie projektu z prawidłową datą', async ({ homePage, newProjectPage }) => {
    // Act
    await homePage.clickAddProject();
    await newProjectPage.createProject(testProjects.dateValidation);
    
    // Assert
    await homePage.verifyProjectVisible(testProjects.dateValidation.title);
  });
});