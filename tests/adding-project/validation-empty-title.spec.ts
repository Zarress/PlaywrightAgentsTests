// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Dodawanie projektów - walidacja pól', () => {
  test('Wymaga wypełnienia pola Title', async ({ homePage, newProjectPage }) => {
    // Arrange & Act
    await homePage.clickAddProject();
    await newProjectPage.clickSave();
    
    // Assert
    await newProjectPage.verifyTitleFocused();
    
    // Cleanup - anuluj operację
    await newProjectPage.clickCancel();
    
    // Assert - sprawdź, że projekt nie został dodany
    await homePage.verifyProjectNotVisible('Test Validation');
  });
});