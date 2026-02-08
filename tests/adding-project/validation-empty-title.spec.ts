// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Walidacja wymaganych pól - puste Title', async ({ homePage, newProjectPage }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await homePage.clickAddProject();
    
    // Sprawdź, że formularz został otwarty
    await newProjectPage.verifyFormVisible();
    
    // 2. Nie wypełniając żadnego pola, kliknij przycisk 'Save'
    await newProjectPage.clickSave();
    
    // Sprawdź, że kursor przeniósł się do pola Title (walidacja)
    await newProjectPage.verifyTitleFocused();
    
    // Anuluj operację
    await newProjectPage.clickCancel();
    
    // 3. Sprawdź czy projekt nie został dodany do listy - powinien być widoczny widok "No Project Selected"
    await homePage.verifyNoProjectSelectedVisible();
  });
});