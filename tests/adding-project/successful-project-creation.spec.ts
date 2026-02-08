// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Pomyślne dodanie projektu z wszystkimi polami', async ({ homePage, newProjectPage, projectDetailsPage }) => {
    // 1. Kliknij przycisk '+ Add Project' z sidebara
    await homePage.clickAddProject();
    
    // 2-4. Wypełnij formularz i zapisz
    await newProjectPage.verifyFormVisible();
    await newProjectPage.fillForm(testProjects.sidebarProject);
    
    // 5. Kliknij przycisk 'Save'
    await newProjectPage.clickSave();
    
    // Sprawdź czy projekt został dodany do listy
    await homePage.verifyProjectVisible(testProjects.sidebarProject.title);
    
    // 6. Kliknij na nowo utworzony projekt z listy
    await homePage.clickProjectByName(testProjects.sidebarProject.title);
    
    // Sprawdź szczegóły projektu
    await projectDetailsPage.verifyProjectDetails({
      title: testProjects.sidebarProject.title,
      date: '15 kwi 2026',
      description: testProjects.sidebarProject.description
    });
  });
});