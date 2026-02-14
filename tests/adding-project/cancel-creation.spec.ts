// spec: specs/adding-project.md

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Dodawanie projektów - anulowanie', () => {
  test('Anulowanie tworzenia projektu z częściowo wypełnionym formularzem', async ({ homePage, newProjectPage }) => {
    const projectTitle = 'Test Cancel';
    
    // Arrange
    await homePage.clickAddProject();
    await newProjectPage.fillTitle(projectTitle);
    
    // Act
    await newProjectPage.clickCancel();
    
    // Assert
    await homePage.verifyProjectNotVisible(projectTitle);
  });
});