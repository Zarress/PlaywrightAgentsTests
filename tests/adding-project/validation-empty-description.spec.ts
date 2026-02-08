// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Walidacja wymaganych pól - brak Description', async ({ homePage, newProjectPage }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await homePage.clickAddProject();
    
    // Sprawdź, że formularz został otwarty
    await newProjectPage.verifyFormVisible();
    
    // 2. Wpisz 'Test Validation' w polu Title
    await newProjectPage.fillTitle('Test Validation');
    
    // 3. Nie wypełniając Description i Due date, kliknij przycisk 'Save'
    await newProjectPage.clickSave();
    
    // Sprawdź, że kursor przeniósł się do pola Description (walidacja)
    await expect(newProjectPage.descriptionInput).toBeFocused();
    
    // Anuluj operację
    await newProjectPage.clickCancel();
    
    // 4. Sprawdź czy projekt nie został dodany do listy
    await homePage.verifyNoProjectSelectedVisible();
    // Sprawdź, że projekt 'Test Validation' nie ma na liście
    await homePage.verifyProjectNotVisible('Test Validation');
  });
});