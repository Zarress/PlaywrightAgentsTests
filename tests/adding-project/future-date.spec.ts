// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Dodanie projektu z datą daleko w przyszłości', async ({ homePage, newProjectPage, projectDetailsPage }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await homePage.clickAddProject();
    
    // Sprawdź, że formularz został otwarty
    await newProjectPage.verifyFormVisible();
    
    // 2. Wypełnij formularz: Title: 'Projekt dalekiej przyszłości', Description: 'Test odległej daty', Due date: '2030-12-31'
    await newProjectPage.fillForm({
      title: 'Projekt dalekiej przyszłości',
      description: 'Test odległej daty',
      dueDate: '2030-12-31'
    });
    
    // 3. Kliknij przycisk 'Save'
    await newProjectPage.clickSave();
    
    // Sprawdź, że projekt z odległą datą został zapisany 
    await homePage.verifyProjectVisible('Projekt dalekiej przyszłości');
    
    // 4. Kliknij na projekt i sprawdź, czy data '31 gru 2030' jest poprawnie wyświetlana
    await homePage.clickProjectByName('Projekt dalekiej przyszłości');
    
    // Sprawdź, że przyszła data jest poprawnie wyświetlana
    await projectDetailsPage.verifyProjectDetails({
      title: 'Projekt dalekiej przyszłości',
      date: '31 gru 2030',
      description: 'Test odległej daty'
    });
  });
});