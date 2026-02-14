// spec: specs/adding-project.md

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Dodawanie projektów - walidacja pól', () => {
  test('Wymaga wypełnienia pola Description', async ({ homePage, newProjectPage }) => {
    // Arrange
    await homePage.clickAddProject();
    await newProjectPage.fillTitle('Test Validation');
    
    // Act
    await newProjectPage.clickSave();
    
    // Assert
    await expect(newProjectPage.descriptionInput).toBeFocused();
    
    // Cleanup - anuluj operację
    await newProjectPage.clickCancel();
    await homePage.verifyProjectNotVisible('Test Validation');
  });
});