// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Walidacja formatu daty', async ({ homePage, newProjectPage }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await homePage.clickAddProject();
    
    // Sprawdź, że formularz został otwarty
    await newProjectPage.verifyFormVisible();
    
    // 2. Spróbuj wpisać nieprawidłowy format daty w pole Due date
    // HTML5 date input automatycznie waliduje format - nieprawidłowe dane będą odrzucone
    await expect(async () => {
      await newProjectPage.fillDueDate('złaData');
    }).rejects.toThrow('Malformed value');
    
    // 4. Wpisz prawidłową datę w formacie YYYY-MM-DD
    await newProjectPage.fillDueDate(testProjects.dateValidation.dueDate);
    
    // 5. Wypełnij Title: 'Test Daty', Description: 'Test walidacji dat' i zapisz projekt
    await newProjectPage.fillTitle(testProjects.dateValidation.title);
    await newProjectPage.fillDescription(testProjects.dateValidation.description);
    await newProjectPage.clickSave();
    
    // Sprawdź, że projekt z prawidłową datą został utworzony
    await homePage.verifyProjectVisible(testProjects.dateValidation.title);
  });
});