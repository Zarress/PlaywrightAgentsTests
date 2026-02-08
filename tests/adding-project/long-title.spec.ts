// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Dodanie projektu z długą nazwą', async ({ homePage, newProjectPage }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await homePage.clickAddProject();
    
    // Sprawdź, że formularz został otwarty
    await newProjectPage.verifyFormVisible();
    
    // 2. Wpisz w Title bardzo długą nazwę projektu
    const longTitle = 'To jest bardzo długa nazwa projektu testowego która sprawdza obsługę długich tytułów i czy są jakieś ograniczenia długości nazw projektów w tej aplikacji';
    await newProjectPage.fillTitle(longTitle);
    
    // 3. Wypełnij Description: 'Test długiej nazwy' i Due date: '2026-06-10'
    await newProjectPage.fillDescription('Test długiej nazwy');
    await newProjectPage.fillDueDate('2026-06-10');
    
    // 4. Kliknij przycisk 'Save'
    await newProjectPage.clickSave();
    
    // 5. Sprawdź, czy projekt z długą nazwą jest widoczny na liście bocznej
    await homePage.verifyProjectVisible(longTitle);
  });
});