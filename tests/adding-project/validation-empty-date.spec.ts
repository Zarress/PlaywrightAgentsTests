// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Walidacja wymaganych pól - brak Due date', async ({ homePage, newProjectPage }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await homePage.clickAddProject();
    
    // Sprawdź, że formularz został otwarty
    await newProjectPage.verifyFormVisible();
    
    // 2. Wpisz 'Test Validation' w Title i 'Test opisu' w Description
    await newProjectPage.fillTitle('Test Validation');
    await newProjectPage.fillDescription('Test opisu');
    
    // 3. Nie wypełniając Due date, kliknij przycisk 'Save'
    await newProjectPage.clickSave();
    
    // Sprawdź, że kursor przeniósł się do pola Due date (walidacja)
    await expect(newProjectPage.dueDateInput).toBeFocused();
    
    // Anuluj operację
    await newProjectPage.clickCancel();
    
    // 4. Sprawdź czy projekt nie został dodany do listy
    await homePage.verifyNoProjectSelectedVisible();
    await homePage.verifyProjectNotVisible('Test Validation');
  });
});