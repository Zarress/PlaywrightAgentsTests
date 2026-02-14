// spec: specs/adding-project.md

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Dodawanie projektów - walidacja pól', () => {
  test('Wymaga wypełnienia pola Due date', async ({ homePage, newProjectPage }) => {
    // Arrange
    await homePage.clickAddProject();
    await newProjectPage.fillTitle('Test Validation');
    await newProjectPage.fillDescription('Test opisu');
    
    // Act
    await newProjectPage.clickSave();
    
    // Assert
    await expect(newProjectPage.dueDateInput).toBeFocused();
    
    // Cleanup - anuluj operację
    await newProjectPage.clickCancel();
    await homePage.verifyProjectNotVisible('Test Validation');
  });
});