// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Dodawanie projektów - długie nazwy', () => {
  test('Pozwala na utworzenie projektu z bardzo długą nazwą', async ({ homePage, newProjectPage }) => {
    const longTitle = 'To jest bardzo długa nazwa projektu testowego która sprawdza obsługę długich tytułów i czy są jakieś ograniczenia długości nazw projektów w tej aplikacji';
    
    // Act
    await homePage.clickAddProject();
    await newProjectPage.createProject({
      title: longTitle,
      description: 'Test długiej nazwy',
      dueDate: '2026-06-10'
    });
    
    // Assert
    await homePage.verifyProjectVisible(longTitle);
  });
});