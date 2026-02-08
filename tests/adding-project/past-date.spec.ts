// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Dodanie projektu z datą w przeszłości', async ({ homePage, newProjectPage, projectDetailsPage }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await homePage.clickAddProject();
    
    // Sprawdź, że formularz został otwarty
    await newProjectPage.verifyFormVisible();
    
    // 2. Wypełnij formularz: Title: 'Projekt z przeszłości', Description: 'Test daty z przeszłości', Due date: '2025-01-01'
    await newProjectPage.fillForm({
      title: 'Projekt z przeszłości',
      description: 'Test daty z przeszłości',
      dueDate: '2025-01-01'
    });
    
    // 3. Kliknij przycisk 'Save'
    await newProjectPage.clickSave();
    
    // Sprawdź, że projekt z datą z przeszłości został zapisany
    await homePage.verifyProjectVisible('Projekt z przeszłości');
    
    // 4. Kliknij na projekt i sprawdź, czy data '1 sty 2025' jest wyświetlana
    await homePage.clickProjectByName('Projekt z przeszłości');
    
    // Sprawdź, że data z przeszłości jest poprawnie wyświetlana
    await projectDetailsPage.verifyProjectDetails({
      title: 'Projekt z przeszłości',
      date: '1 sty 2025',
      description: 'Test daty z przeszłości'
    });
  });
});