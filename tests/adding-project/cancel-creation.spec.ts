// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Anulowanie tworzenia projektu', async ({ homePage, newProjectPage }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await homePage.clickAddProject();
    
    // Sprawdź, że formularz został otwarty
    await newProjectPage.verifyFormVisible();
    
    // 2. Wypełnij częściowo formularz: tylko Title: 'Test Cancel'
    await newProjectPage.fillTitle(testProjects.cancelTest.title);
    
    // 3. Kliknij przycisk 'Cancel'
    await newProjectPage.clickCancel();
    
    // Sprawdź, że formularz został zamknięty i powrócono do głównego widoku
    await homePage.verifyNoProjectSelectedVisible();
    
    // 4. Sprawdź, że projekt 'Test Cancel' nie został dodany do listy projektów
    await homePage.verifyProjectNotVisible(testProjects.cancelTest.title);
  });
});